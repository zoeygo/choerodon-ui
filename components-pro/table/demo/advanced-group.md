---
order: 28
title:
  zh-CN: 进阶数据分组
  en-US: Advanced Group
---

## zh-CN

进阶数据分组。
 
## en-US

Advanced Group.

```jsx
import {
  useDataSet,
  Table,
  Form,
  TextField,
  CheckBox,
  SelectBox,
  Switch,
  Row,
  Col,
} from 'choerodon-ui/pro';
import { action } from 'mobx';

const { Option } = SelectBox;

const App = () => {
  // 物料
  const itemDs = useDataSet(() => ({
    paging: false,
    data: [
      { id: 1, company: '厦门XX食品有限公司', itemCode: 'A', itemName: '188836-笔记本电脑', itemSize: '15.9英寸', unitPrice: 9000, quantity: 10, amount: 90000, tax: 0.1, totalAmount: 1965310000 },
      { id: 2, company: '厦门XX食品有限公司', itemCode: 'B', itemName: '2984-汽车', itemSize: null, unitPrice: 80000, quantity: 20, amount: 1600000, tax: 0.1, totalAmount: 1965310000 },
      { id: 3, company: '厦门XX食品有限公司', itemCode: 'C', itemName: '12294-打印机', itemSize: null, unitPrice: 85000, quantity: 20, amount: 1700000, tax: 0.1, totalAmount: 1965310000 },
      { id: 4, company: '厦门XX食品有限公司', itemCode: 'D', itemName: '43996-电子芯片', itemSize: null, unitPrice: 96000, quantity: 20, amount: 1920000, tax: 0.1, totalAmount: 1965310000 },
      { id: 5, company: '厦门XX食品有限公司', itemCode: 'E', itemName: '09761-洗衣机', itemSize: null, unitPrice: 88000000, quantity: 20, amount: 1960000000, tax: 0.1, totalAmount: 1965310000 },
      { id: 6, company: '山西XX科贸有限公司', itemCode: 'A', itemName: '188836-笔记本电脑', itemSize: '15.9英寸', unitPrice: 90000000, quantity: 10, amount: 900000000, tax: 0.1, totalAmount: 2701740000 },
      { id: 7, company: '山西XX科贸有限公司', itemCode: 'B', itemName: '2984-汽车', itemSize: null, unitPrice: 90000000, quantity: 10, amount: 900000000, tax: 0.1, totalAmount: 2701740000 },
      { id: 8, company: '山西XX科贸有限公司', itemCode: 'C', itemName: '12294-打印机', itemSize: null, unitPrice: 90000000, quantity: 10, amount: 900000000, tax: 0.1, totalAmount: 2701740000 },
      { id: 9, company: '山西XX科贸有限公司', itemCode: 'D', itemName: '43996-电子芯片', itemSize: null, unitPrice: 98000, quantity: 10, amount: 980000, tax: 0.1, totalAmount: 2701740000 },
      { id: 10, company: '山西XX科贸有限公司', itemCode: 'E', itemName: '09761-洗衣机', itemSize: null, unitPrice: 76000, quantity: 10, amount: 760000, tax: 0.1, totalAmount: 2701740000 },
      { id: 11, company: '上海XX商务有限公司', itemCode: 'A', itemName: '188836-笔记本电脑', itemSize: '15.9英寸', unitPrice: 90000000, quantity: 10, amount: 900000000, tax: 0.1, totalAmount: 2701880000 },
      { id: 12, company: '上海XX商务有限公司', itemCode: 'B', itemName: '2984-汽车', itemSize: null, unitPrice: 90000000, quantity: 10, amount: 900000000, tax: 0.1, totalAmount: 2701880000 },
      { id: 13, company: '上海XX商务有限公司', itemCode: 'C', itemName: '12294-打印机', itemSize: null, unitPrice: 90000000, quantity: 10, amount: 900000000, tax: 0.1, totalAmount: 2701880000 },
      { id: 14, company: '上海XX商务有限公司', itemCode: 'D', itemName: '43996-电子芯片', itemSize: null, unitPrice: 90000, quantity: 10, amount: 900000, tax: 0.1, totalAmount: 2701880000 },
      { id: 15, company: '上海XX商务有限公司', itemCode: 'E', itemName: '09761-洗衣机', itemSize: null, unitPrice: 98000, quantity: 10, amount: 980000, tax: 0.1, totalAmount: 2701880000 },
    ],
    fields: [
      {
        name: 'id',
        label: '编号',
      },
      {
        name: 'company',
        label: '公司',
      },
      {
        name: 'itemCode',
        label: '报价信息',
      },
      {
        name: 'unitPrice',
        type: 'currency',
        label: '含税单价',
      },
      {
        name: 'quantity',
        type: 'number',
        label: '数量',
      },
      {
        name: 'amount',
        type: 'currency',
        label: '含税金额',
      },
      {
        name: 'totalAmount',
        type: 'currency',
        label: '含税总价',
      },
      {
        name: 'itemSize',
        label: '规格',
      },
      {
        name: 'tax',
        type: 'number',
        label: '税率',
      },
    ],
  }), []);
   
  // 评分
  const scoreDs = useDataSet(() => ({
    paging: false,
    data: [
      { id: 1, company: '厦门XX食品有限公司', scoreId: '1', scoreMeaning: '评分要素1', score: '80' },
      { id: 2, company: '厦门XX食品有限公司', scoreId: '2', scoreMeaning: '评分要素2', score: '80' },
      { id: 3, company: '厦门XX食品有限公司', scoreId: '3', scoreMeaning: '评分要素3', score: '80' },
      { id: 4, company: '厦门XX食品有限公司', scoreId: '4', scoreMeaning: '商务总分（50%）', score: '80', showInHeader: 1 },
      { id: 5, company: '厦门XX食品有限公司', scoreId: '5', scoreMeaning: '评分要素1', score: '80' },
      { id: 6, company: '厦门XX食品有限公司', scoreId: '6', scoreMeaning: '评分要素2', score: '80' },
      { id: 7, company: '厦门XX食品有限公司', scoreId: '7', scoreMeaning: '评分要素3', score: '80' },
      { id: 8, company: '厦门XX食品有限公司', scoreId: '8', scoreMeaning: '技术总分（50%）', score: '80', showInHeader: 1 },
      { id: 9, company: '厦门XX食品有限公司', scoreId: '9', scoreMeaning: '总分', score: '80', showInHeader: 1 },
      { id: 10, company: '厦门XX食品有限公司', scoreId: '10', scoreMeaning: '推荐理由', score: '80', showInHeader: 1 },
      { id: 11, company: '山西XX科贸有限公司', scoreId: '1', scoreMeaning: '评分要素1', score: '70' },
      { id: 12, company: '山西XX科贸有限公司', scoreId: '2', scoreMeaning: '评分要素2', score: '70' },
      { id: 13, company: '山西XX科贸有限公司', scoreId: '3', scoreMeaning: '评分要素3', score: '70' },
      { id: 14, company: '山西XX科贸有限公司', scoreId: '4', scoreMeaning: '商务总分（50%）', score: '70', showInHeader: 1 },
      { id: 15, company: '山西XX科贸有限公司', scoreId: '5', scoreMeaning: '评分要素1', score: '70' },
      { id: 16, company: '山西XX科贸有限公司', scoreId: '6', scoreMeaning: '评分要素2', score: '70' },
      { id: 17, company: '山西XX科贸有限公司', scoreId: '7', scoreMeaning: '评分要素3', score: '70' },
      { id: 18, company: '山西XX科贸有限公司', scoreId: '8', scoreMeaning: '技术总分（50%）', score: '70', showInHeader: 1 },
      { id: 19, company: '山西XX科贸有限公司', scoreId: '9', scoreMeaning: '总分', score: '70', showInHeader: 1 },
      { id: 20, company: '山西XX科贸有限公司', scoreId: '10', scoreMeaning: '推荐理由', score: '70', showInHeader: 1 },
      { id: 21, company: '上海XX商务有限公司', scoreId: '1', scoreMeaning: '评分要素1', score: '60' },
      { id: 22, company: '上海XX商务有限公司', scoreId: '2', scoreMeaning: '评分要素2', score: '60' },
      { id: 23, company: '上海XX商务有限公司', scoreId: '3', scoreMeaning: '评分要素3', score: '60' },
      { id: 24, company: '上海XX商务有限公司', scoreId: '4', scoreMeaning: '商务总分（50%）', score: '60', showInHeader: 1 },
      { id: 25, company: '上海XX商务有限公司', scoreId: '5', scoreMeaning: '评分要素1', score: '60' },
      { id: 26, company: '上海XX商务有限公司', scoreId: '6', scoreMeaning: '评分要素2', score: '60' },
      { id: 27, company: '上海XX商务有限公司', scoreId: '7', scoreMeaning: '评分要素3', score: '60' },
      { id: 28, company: '上海XX商务有限公司', scoreId: '8', scoreMeaning: '技术总分（50%）', score: '60', showInHeader: 1 },
      { id: 29, company: '上海XX商务有限公司', scoreId: '9', scoreMeaning: '总分', score: '60', showInHeader: 1 },
      { id: 30, company: '上海XX商务有限公司', scoreId: '10', scoreMeaning: '推荐理由', score: '60', showInHeader: 1 },
    ],
    fields: [
      {
        name: 'id',
        label: '编号',
      },
      {
        name: 'company',
        label: '公司',
      },
      {
        name: 'scoreId',
        label: '评分',
      },
    ],
  }), []);

  const itemColumns = React.useMemo(() => [
    { 
      header: ({ group, title }) => group ? (
        group.totalRecords.reduce((sum, record) => sum + (record.get('amount') || 0), 0)
      ) : title,
      renderer: ({ text, record, dataSet }) => record.getState('editing') ? (
        <Row>
          <Col span={12} style={{ cursor: 'pointer', borderRight: '1px solid #eee' }} onClick={() => record.isSelected ? dataSet.unSelect(record) : dataSet.select(record)}>
            {text}
          </Col>
          <Col span={12}>
            {record.isSelected ? <TextField record={record} name="quantity" /> : null}
          </Col>
        </Row>
      ) : text,
      aggregation: true,
      key: 'itemDetail',
      align: 'left',
      children: [
        { name: 'unitPrice' },
        { name: 'quantity' },
        { name: 'amount' },
        { name: 'tax', renderer: ({ value }) => `${value * 100}%` },
      ],
      defaultWidth: 300,
    },
  ], []);

  const scoreColumns = React.useMemo(() => [
    {
      name: 'score',
      title: '评分',
      titleEditable: false,
      header: ({ group, title }) => group ? (
        group.totalRecords.reduce((list, record) => {
          if (record.get('showInHeader')) {
            list.push(<div>{record.get('scoreMeaning')} {record.get('score')}</div>);
          }
          return list;
        }, [])
      ) : title,
      defaultWidth: 300,
    },
  ], []);

  const itemGroups = React.useMemo(() => [
    { 
      name: 'company',
      type: 'header',
      columnProps: {
        header: ({ dataSet }) => (
          <>
            <div>汇总</div>
            <div>共有3家供应商参与报价</div>
          </>
        ),
        renderer: ({ text, headerGroup, record, dataSet }) => {
          if (headerGroup) {
            const { totalRecords } = headerGroup;
            return (
              <>
                <div>{text} <CheckBox value checked={totalRecords.some(r => r.getState('editing'))} onChange={action((value) => totalRecords.forEach(r => r.setState('editing', value)))}/></div>
                <div>排名：{headerGroup.index + 1}</div>
              </>
            );
          }
          return text;
        },
        children: [
          { name: 'totalAmount' }
        ],
        style: { textAlign: 'left' },
        headerStyle: { textAlign: 'left' },
      },
    },
    { 
      name: 'itemCode',
      type: 'column',
      columnProps: {
        align: 'left',
        aggregation: true,
        children: [
          { name: 'itemSize' }
        ],
        renderer: ({ record, dataSet, text }) => {
          const handleClick = action(() => {
            const isEditing = !dataSet.getState('editing');
            dataSet.setState('editing', isEditing);
            dataSet.forEach((r) => r.setState('editing', isEditing));
          });
          return (
            <div style={{ cursor: 'pointer' }} onClick={handleClick}>
              {record.get('itemName')}
              <div style={{ fontWeight: 400 }}>
                {text}
              </div>
            </div>
          );
        },
        width: 200,
      },
    },
  ], []);

  const scoreGroups = React.useMemo(() => [
    { 
      name: 'company',
      type: 'header',
      hidden: true,
    },
    { 
      name: 'scoreId',
      type: 'column',
      columnProps: {
        renderer: ({ record }) => record.get('scoreMeaning'),
        width: 200,
      },
    },
  ], []);

  const group1Ref = React.useRef(null);
  const group2Ref = React.useRef(null);
  const handleGroup1ScrollLeft = React.useCallback((scrollLeft) => {
    const { current } = group2Ref;
    if (current) {
      current.setScrollLeft(scrollLeft);
    }
  }, []);
  const handleGroup2ScrollLeft = React.useCallback((scrollLeft) => {
    const { current } = group1Ref;
    if (current) {
      current.setScrollLeft(scrollLeft);
    }
  }, []);

  return (
    <>
      <Table
        customizable
        customizedCode="advanced-group"
        aggregation
        columnDraggable
        columnTitleEditable
        columnResizable={false}
        border
        dataSet={itemDs}
        columns={itemColumns}
        groups={itemGroups}
        headerRowHeight="auto"
        onScrollLeft={handleGroup1ScrollLeft}
        ref={group1Ref}
        style={{ height: 500 }}
        selectionMode="none"
        bodyExpandable
      />
      <Table
        customizable
        customizedCode="advanced-group2"
        columnDraggable
        columnTitleEditable
        columnResizable={false}
        border
        dataSet={scoreDs}
        columns={scoreColumns}
        groups={scoreGroups}
        headerRowHeight="auto"
        onScrollLeft={handleGroup2ScrollLeft}
        ref={group2Ref}
        selectionMode="none"
        bodyExpandable
        defaultBodyExpanded={false}
        style={{ height: 300 }}
      />
    </>
  );
};

ReactDOM.render(<App />, mountNode);
```
