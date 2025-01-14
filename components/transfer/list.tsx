import React, { ChangeEvent, Component, CSSProperties, isValidElement, ReactNode } from 'react';
import { findDOMNode } from 'react-dom';
import classNames from 'classnames';
import noop from 'lodash/noop';
import Checkbox from '../checkbox';
import { TransferItem } from './index';
import Search from './search';
import Item from './item';
import triggerEvent from '../_util/triggerEvent';
import Animate from '../animate';
import PureRenderMixin from '../rc-components/util/PureRenderMixin';

function isRenderResultPlainObject(result: any): result is { value; label } {
  return (
    result &&
    !isValidElement(result) &&
    Object.prototype.toString.call(result) === '[object Object]'
  );
}

export interface TransferListProps {
  prefixCls: string;
  titleText: string;
  dataSource: TransferItem[];
  filter: string;
  filterOption?: (filterText: any, item: any) => boolean;
  style?: CSSProperties;
  checkedKeys: string[];
  highlightKey?: string;
  handleFilter: (e: any) => void;
  handleSelect: (selectedItem: any, checked: boolean) => void;
  handleSelectAll: (dataSource: any[], checkAll: boolean) => void;
  handleClear: () => void;
  render?: (item: any) => any;
  showSearch?: boolean;
  searchPlaceholder: string;
  notFoundContent: ReactNode;
  itemUnit: string;
  itemsUnit: string;
  body?: (props: any) => any;
  footer?: (props: any) => any;
  lazy?: boolean | {};
  onScroll: Function;
}

export default class TransferList extends Component<TransferListProps, any> {
  static displayName = 'TransferList';

  static defaultProps = {
    dataSource: [],
    titleText: '',
    showSearch: false,
    render: noop,
    lazy: {},
  };

  timer: number;

  triggerScrollTimer: number;

  state = {
    mounted: false,
  };

  componentDidMount() {
    this.timer = window.setTimeout(() => {
      this.setState({
        mounted: true,
      });
    }, 0);
  }

  componentWillUnmount() {
    clearTimeout(this.timer);
    clearTimeout(this.triggerScrollTimer);
  }

  shouldComponentUpdate(...args: any[]) {
    return PureRenderMixin.shouldComponentUpdate.apply(this, args);
  }

  getCheckStatus(filteredDataSource: TransferItem[]) {
    const { checkedKeys } = this.props;
    if (checkedKeys.length === 0) {
      return 'none';
    }
    if (filteredDataSource.every(item => checkedKeys.indexOf(item.key) >= 0)) {
      return 'all';
    }
    return 'part';
  }

  handleSelect = (selectedItem: TransferItem) => {
    const { checkedKeys, handleSelect } = this.props;
    const result = checkedKeys.some(key => key === selectedItem.key);
    handleSelect(selectedItem, !result);
  };

  handleFilter = (e: ChangeEvent<HTMLInputElement>) => {
    const { handleFilter, prefixCls } = this.props;
    handleFilter(e);
    if (!e.target.value) {
      return;
    }
    // Manually trigger scroll event for lazy search bug

    this.triggerScrollTimer = window.setTimeout(() => {
      const listNode = (findDOMNode(this) as HTMLElement).querySelectorAll(
        `${prefixCls}-content`,
      )[0];
      if (listNode) {
        triggerEvent(listNode, 'scroll');
      }
    }, 0);
  };

  handleClear = () => {
    const { handleClear } = this.props;
    handleClear();
  };

  matchFilter = (text: string, item: TransferItem) => {
    const { filter, filterOption } = this.props;
    if (filterOption) {
      return filterOption(filter, item);
    }
    return text.indexOf(filter) >= 0;
  };

  renderItem = (item: TransferItem) => {
    const { render = noop } = this.props;
    const renderResult = render(item);
    if (isRenderResultPlainObject(renderResult)) {
      return {
        renderedText: renderResult.value,
        renderedEl: renderResult.label,
      };
    }
    return {
      renderedText: renderResult,
      renderedEl: renderResult,
    };
  };

  render() {
    const {
      prefixCls,
      dataSource,
      titleText,
      checkedKeys,
      highlightKey,
      lazy,
      body = noop,
      footer = noop,
      showSearch,
      style,
      filter,
      searchPlaceholder,
      notFoundContent,
      itemUnit,
      itemsUnit,
      onScroll,
      handleSelectAll,
    } = this.props;
    const { mounted } = this.state;

    // Custom Layout
    const footerDom = footer({ ...this.props });
    const bodyDom = body({ ...this.props });

    const listCls = classNames(prefixCls, {
      [`${prefixCls}-with-footer`]: !!footerDom,
    });

    const filteredDataSource: TransferItem[] = [];
    const totalDataSource: TransferItem[] = [];

    const showItems = dataSource.map(item => {
      const { renderedText, renderedEl } = this.renderItem(item);
      if (filter && filter.trim() && !this.matchFilter(renderedText, item)) {
        return null;
      }

      // all show items
      totalDataSource.push(item);
      if (!item.disabled) {
        // response to checkAll items
        filteredDataSource.push(item);
      }

      const checked = checkedKeys.indexOf(item.key) >= 0;
      const isHighlight = highlightKey === item.key;
      return (
        <Item
          key={item.key}
          item={item}
          lazy={lazy}
          renderedText={renderedText}
          renderedEl={renderedEl}
          checked={checked}
          isHighlight={isHighlight}
          prefixCls={prefixCls}
          onClick={this.handleSelect}
        />
      );
    });

    const unit = dataSource.length > 1 ? itemsUnit : itemUnit;

    const search = showSearch ? (
      <div className={`${prefixCls}-body-search-wrapper`}>
        <Search
          prefixCls={`${prefixCls}-search`}
          onChange={this.handleFilter}
          handleClear={this.handleClear}
          placeholder={searchPlaceholder}
          value={filter}
        />
      </div>
    ) : null;

    const listBody = bodyDom || (
      <div
        className={
          showSearch ? `${prefixCls}-body ${prefixCls}-body-with-search` : `${prefixCls}-body`
        }
      >
        {search}
        <Animate
          component="ul"
          componentProps={{ onScroll }}
          className={`${prefixCls}-content`}
          transitionName={mounted ? `${prefixCls}-content-item-highlight` : ''}
          transitionLeave={false}
        >
          {showItems}
        </Animate>
        <div className={`${prefixCls}-body-not-found`}>{notFoundContent}</div>
      </div>
    );

    const listFooter = footerDom ? <div className={`${prefixCls}-footer`}>{footerDom}</div> : null;

    const checkStatus = this.getCheckStatus(filteredDataSource);
    const checkedAll = checkStatus === 'all';
    const checkAllCheckbox = (
      <Checkbox
        checked={checkedAll}
        indeterminate={checkStatus === 'part'}
        onChange={() => handleSelectAll(filteredDataSource, checkedAll)}
      />
    );

    return (
      <div className={listCls} style={style}>
        <div className={`${prefixCls}-header`}>
          {checkAllCheckbox}
          <span className={`${prefixCls}-header-selected`}>
            <span>
              {(checkedKeys.length > 0 ? `${checkedKeys.length}/` : '') + totalDataSource.length}{' '}
              {unit}
            </span>
            <span className={`${prefixCls}-header-title`}>{titleText}</span>
          </span>
        </div>
        {listBody}
        {listFooter}
      </div>
    );
  }
}
