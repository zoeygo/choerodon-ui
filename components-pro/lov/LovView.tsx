import React, { Component, Key } from 'react';
import classNames from 'classnames';
import { action, toJS } from 'mobx';
import noop from 'lodash/noop';
import KeyCode from 'choerodon-ui/lib/_util/KeyCode';
import ConfigContext from 'choerodon-ui/lib/config-provider/ConfigContext';
import DataSet from '../data-set/DataSet';
import Record from '../data-set/Record';
import Table, { onColumnResizeProps, TableProps } from '../table/Table';
import TableProfessionalBar from '../table/query-bar/TableProfessionalBar';
import { SelectionMode, TableMode, TableQueryBarType } from '../table/enum';
import { DataSetEvents, DataSetSelection } from '../data-set/enum';
import { ColumnProps } from '../table/Column';
import { modalChildrenProps } from '../modal/interface';
import autobind from '../_util/autobind';
import { getColumnKey } from '../table/utils';
import SelectionList, { TIMESTAMP, SelectionsPosition } from './SelectionList';
import { LovConfig, ViewRenderer, SelectionProps } from './Lov';
import { FormContextValue } from '../form/FormContext';

export interface LovViewProps {
  dataSet: DataSet;
  config: LovConfig;
  context: FormContextValue;
  tableProps?: Partial<TableProps>;
  multiple: boolean;
  values: any[];
  viewMode?: string;
  onSelect: (records: Record | Record[]) => void;
  onBeforeSelect?: (records: Record | Record[]) => boolean | undefined;
  modal?: modalChildrenProps;
  popupHidden?: boolean;
  valueField?: string;
  textField?: string;
  viewRenderer?: ViewRenderer;
  showSelectedInView?: boolean;
  selectionProps?: SelectionProps,
}

export default class LovView extends Component<LovViewProps> {
  static get contextType() {
    return ConfigContext;
  }

  selection: DataSetSelection | false;

  selectionMode: SelectionMode | undefined;

  resizedColumns: Map<Key, number> = new Map<Key, number>();

  @action
  componentWillMount() {
    const {
      dataSet,
      dataSet: { selection },
      multiple,
      viewMode,
    } = this.props;
    this.selection = selection;
    dataSet.selection = multiple ? DataSetSelection.multiple : DataSetSelection.single;
    if ((viewMode === 'popup' || viewMode === 'drawer' || viewMode === 'modal') && multiple) {
      dataSet.addEventListener(DataSetEvents.batchSelect, this.handleSelect);
      dataSet.addEventListener(DataSetEvents.batchUnSelect, this.handleSelect);
    }
  }

  @action
  componentWillUnmount() {
    const { dataSet, multiple, viewMode } = this.props;
    dataSet.selection = this.selection;
    if ((viewMode === 'popup' || viewMode === 'drawer' || viewMode === 'modal') && multiple) {
      dataSet.removeEventListener(DataSetEvents.batchSelect, this.handleSelect);
      dataSet.removeEventListener(DataSetEvents.batchUnSelect, this.handleSelect);
    }
  }

  shouldComponentUpdate(nextProps: Readonly<LovViewProps>): boolean {
    const { viewMode } = this.props;
    if (viewMode === 'popup' && nextProps.popupHidden) {
      return false;
    }
    return true;
  }

  /* istanbul ignore next */
  getColumns(): ColumnProps[] | undefined {
    const {
      config: { lovItems },
      tableProps,
      viewMode,
    } = this.props;
    return lovItems
      ? lovItems
        .filter(({ gridField }) => gridField === 'Y')
        .sort(({ gridFieldSequence: seq1 }, { gridFieldSequence: seq2 }) => seq1 - seq2)
        .map<ColumnProps>(({ display, gridFieldName, gridFieldWidth, gridFieldAlign }) => {
          let column: ColumnProps | undefined = {};
          if (tableProps && tableProps.columns) {
            column = tableProps.columns.find(c => c.name === gridFieldName);
          }
          return {
            ...column,
            key: gridFieldName,
            header: display,
            name: gridFieldName,
            width: viewMode === 'popup' ? gridFieldName ? this.resizedColumns.get(gridFieldName) : undefined : gridFieldWidth,
            align: gridFieldAlign,
            editor: false,
          };
        })
      : undefined;
  }

  @autobind
  handleSelect(event?: React.MouseEvent | any) {
    const { selectionMode } = this;
    const {
      onSelect,
      onBeforeSelect = noop,
      modal,
      multiple,
      dataSet,
      tableProps,
      viewMode,
      showSelectedInView,
    } = this.props;
    // 为了drawer模式下右侧勾选项的顺序
    if (showSelectedInView && (viewMode === 'drawer' || viewMode === 'modal') && multiple) {
      if (event && event.records) {
        event.records.forEach(item => {
          if (item.isSelected) {
            item.setState(TIMESTAMP, new Date().getTime());
          } else {
            item.setState(TIMESTAMP, 0);
          }
        });
      }
    }
    let records: Record[] = selectionMode === SelectionMode.treebox ?
      dataSet.treeSelected : (selectionMode === SelectionMode.rowbox || multiple) ?
        dataSet.selected : dataSet.current ? [dataSet.current] : [];
    // 满足单选模式下，双击和勾选框选中均支持
    if (tableProps && tableProps.alwaysShowRowBox && !event) {
      records = dataSet.selected;
    }
    const record: Record | Record[] | undefined = multiple ? records : records[0];
    if (record && onBeforeSelect(record) !== false) {
      if (modal && (!event || !multiple)) {
        modal.close();
      }
      if (!event || !multiple || viewMode === 'popup') {
        onSelect(record);
      }
    }
    return false;
  }

  /* istanbul ignore next */
  @autobind
  handleKeyDown(e) {
    if (e.keyCode === KeyCode.ENTER) {
      this.handleSelect();
    }
  }

  /**
   * 单选 onRow 处理
   * @param props
   */
  @autobind
  handleRow(props) {
    const { tableProps } = this.props;
    if (tableProps) {
      const { onRow } = tableProps;
      if (onRow) {
        return {
          onDoubleClick: this.handleSelect,
          ...onRow(props),
        };
      }
    }
    return {
      onDoubleClick: this.handleSelect,
    };
  }

  @autobind
  handleSingleRow() {
    return {
      onClick: this.handleSelect,
    };
  }

  @autobind
  handleColumnResize(props: onColumnResizeProps) {
    const { width, column } = props;
    this.resizedColumns.set(getColumnKey(column), width);
  }

  renderTable() {
    const {
      dataSet,
      config: { queryBar, height, treeFlag, queryColumns, tableProps: configTableProps = {} },
      multiple,
      tableProps,
      viewMode,
      context,
      showSelectedInView,
    } = this.props;
    const { getConfig } = context;
    const columns = this.getColumns();
    const popup = viewMode === 'popup';
    const modal = viewMode === 'modal';
    const drawer = viewMode === 'drawer';
    const lovTableProps: TableProps = {
      autoFocus: true,
      mode: treeFlag === 'Y' ? TableMode.tree : TableMode.list,
      onKeyDown: this.handleKeyDown,
      dataSet,
      columns,
      queryFieldsLimit: queryColumns,
      queryBar: queryBar || getConfig('lovQueryBar') || getConfig('queryBar'),
      selectionMode: SelectionMode.none,
      ...configTableProps,
      ...tableProps,
      className: classNames(configTableProps && configTableProps.className, tableProps && tableProps.className),
      style: {
        ...(configTableProps && configTableProps.style),
        height,
        ...(tableProps && tableProps.style),
      },
      queryBarProps: {
        ...(tableProps && tableProps.queryBarProps),
        ...getConfig('lovQueryBarProps'),
      },
    };
    if (multiple) {
      if (popup || !tableProps || !tableProps.selectionMode) {
        if (lovTableProps.mode === TableMode.tree) {
          lovTableProps.selectionMode = SelectionMode.treebox;
        } else {
          lovTableProps.selectionMode = SelectionMode.rowbox;
        }
      }
      if (lovTableProps.selectionMode !== SelectionMode.rowbox && lovTableProps.selectionMode !== SelectionMode.treebox) {
        lovTableProps.highLightRow = false;
        lovTableProps.selectedHighLightRow = true;
      }
    } else if (popup) {
      lovTableProps.onRow = this.handleSingleRow;
    } else if (lovTableProps.selectionMode !== SelectionMode.rowbox) {
      lovTableProps.onRow = this.handleRow;
    } else {
      lovTableProps.highLightRow = false;
      lovTableProps.selectedHighLightRow = true;
    }
    if (popup) {
      if (lovTableProps.showSelectionCachedButton === undefined) {
        lovTableProps.showSelectionCachedButton = false;
        lovTableProps.showCachedSelection = true;
      }
      lovTableProps.autoWidth = true;
      lovTableProps.onColumnResize = this.handleColumnResize;
    }

    const isProfessionalBar = lovTableProps.queryBar === TableQueryBarType.professionalBar;
    if (!popup && !lovTableProps.queryBar && isProfessionalBar) {
      lovTableProps.queryBar = (props) => <TableProfessionalBar {...props} />;
    }
    if ((modal || drawer) && showSelectedInView) {
      lovTableProps.showSelectionTips = false;
    }
    this.selectionMode = lovTableProps.selectionMode;
    return (
      <>
        <Table {...lovTableProps} />
        {modal && this.renderSelectionList()}
      </>
    );
  }

  renderSelectionList() {
    const {
      dataSet,
      valueField = '',
      textField = '',
      config: { treeFlag, tableProps: configTableProps = {} },
      tableProps,
      multiple,
      viewMode,
      showSelectedInView,
      selectionProps,
    } = this.props;
    if (!showSelectedInView || !multiple) {
      return null;
    }

    if (!this.selectionMode) {
      const selectionMode = tableProps?.selectionMode || configTableProps?.selectionMode;
      if (!selectionMode) {
        this.selectionMode = treeFlag === 'Y' ? SelectionMode.treebox : SelectionMode.rowbox;
      } else {
        this.selectionMode = selectionMode;
      }
    }

    const selectionsPosition = viewMode === 'drawer' ?
      SelectionsPosition.side :
      (viewMode === 'modal' ? SelectionsPosition.below : undefined);

    return (
      <SelectionList
        dataSet={dataSet}
        treeFlag={treeFlag}
        valueField={valueField}
        textField={textField}
        selectionsPosition={selectionsPosition}
        selectionProps={selectionProps}
      />
    );
  }

  render() {
    const {
      modal,
      viewRenderer,
      dataSet,
      viewMode,
      config: lovConfig,
      textField,
      valueField,
      multiple,
    } = this.props;
    if (modal) {
      modal.handleOk(this.handleSelect);
    }
    return (
      <>
        {viewMode === 'drawer' && this.renderSelectionList()}
        <div>
          {viewRenderer
            ? toJS(
              viewRenderer({
                dataSet,
                lovConfig,
                textField,
                valueField,
                multiple,
                modal,
              }),
            )
            : this.renderTable()}
        </div>
      </>
    );
  }
}
