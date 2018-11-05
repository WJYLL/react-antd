import React from 'react';
import { Button, Popconfirm, Modal, Badge, Table } from 'antd';
// import { connect } from 'dva';
import { Link } from 'react-router-dom';
// import { routerRedux } from 'dva/router';
import Clipboard from 'simple-react-clipboard';
import task from '../../assets/task.svg';
import stop from '../../assets/stop.svg';
import fabu1 from '../../assets/fabu1.svg';
import delBlue from '../../assets/delBlue.svg';
import editBlue from '../../assets/editBlue.svg';
import editsBlue from '../../assets/editsBlue.svg';
import remindBlack from '../../assets/remindBlack.svg';
import remindWhite from '../../assets/remindWhite.svg';
import 'antd/dist/antd.css'
import styles from './Styles.less';

export default class IndexPage extends React.Component {
  state = {
    filteredInfo: null,
    visible: false,
    rgon_grp: [],
  };

  handleChange = (pagination, filters, sorter) => {
    console.log('Various parameters', pagination, filters, sorter);
    this.setState({
      filteredInfo: filters,
      sortedInfo: sorter,
    });
  }

  clearFilters = () => {
    this.setState({ filteredInfo: null });
  }

  checkArea = (record) => {
    console.log(record);
    this.setState({
      visible: true,
      rgon_grp: record.rgon_scope,
    })
  }

  handleCancel = () => {
    this.setState({
      visible: false,
     
    })
  }

  render(){
    console.log(this.state.rgon_grp)
    let { filteredInfo } = this.state;
    filteredInfo = filteredInfo || {};


    const data = [
      {
        "lgc_sn": "803d8a9e-b07d-4361-8fc2-c01092347623",
        "prov_cd": null,
        "city_cd": null,
        "zon_cd": null,
        "str_cd": null,
        "templ_nm": "ioluilui",
        "templ_discp": "iuluiliul",
        "status": "1",
        "rgon_scope": "黑蓝",
        "templ_str": [
          {
            "i": "6cf7df49-9f41-46c1-b62c-eb0a6cb9179c",
            "type": "input",
            "x": 0,
            "y": 0,
            "isResizable": false,
            "w": 12,
            "h": 4,
            "properties": {
              "title": "单行文本",
              "describe": "",
              "required": false
            },
            "moved": false,
            "static": false
          },
          {
            "i": "2df2fdd9-d5d4-4dad-ba0f-909d0fccc40e",
            "type": "number",
            "x": 0,
            "y": 4,
            "isResizable": false,
            "w": 12,
            "h": 4,
            "properties": {
              "title": "数字框",
              "describe": "",
              "required": false,
              "unit": ""
            },
            "moved": false,
            "static": false
          },
          {
            "i": "ffc767ca-070d-4e9c-b089-5777093610b7",
            "type": "select",
            "x": 0,
            "y": 8,
            "isResizable": false,
            "w": 12,
            "h": 4,
            "properties": {
              "title": "下拉框",
              "options": [],
              "keys": [0],
              "describe": "",
              "required": false
            },
            "moved": false,
            "static": false
          },
          {
            "i": "052bc5ea-bf0f-4fd5-a8e9-5deea69f3bab",
            "type": "radio",
            "x": 0,
            "y": 12,
            "isResizable": false,
            "w": 12,
            "h": 4,
            "properties": {
              "qtype": "1",
              "title": "选择框",
              "options": ["选项1", "选项2"],
              "keys": [0, 1],
              "describe": "",
              "required": false,
              "column_count": "1"
            },
            "moved": false,
            "static": false
          },
          {
            "i": "0bc94def-2ce5-4227-b6fb-a8dfbc9dea10",
            "type": "textarea",
            "x": 0,
            "y": 16,
            "isResizable": false,
            "w": 12,
            "h": 4,
            "properties": {
              "title": "多行文本",
              "describe": "",
              "required": false
            },
            "moved": false,
            "static": false
          },
          {
            "i": "ab7e0f4d-7efa-40f1-a5d8-800bf0b1e2a8",
            "type": "input",
            "x": 0,
            "y": 20,
            "isResizable": false,
            "w": 12,
            "h": 4,
            "properties": {
              "title": "姓名",
              "describe": "",
              "required": false
            },
            "moved": false,
            "static": false
          },
          {
            "i": "93475187-ce95-4315-8905-d2b80af160fe",
            "type": "radio",
            "x": 0,
            "y": 24,
            "isResizable": false,
            "w": 12,
            "h": 4,
            "properties": {
              "qtype": "1",
              "title": "性别",
              "describe": "",
              "keys": [0, 1],
              "options": ["男", "女"],
              "required": false
            },
            "moved": false,
            "static": false
          },
          {
            "i": "45eb6b7d-5afc-4d80-b3a0-bbb0452694b2",
            "type": "input",
            "x": 0,
            "y": 28,
            "isResizable": false,
            "w": 12,
            "h": 4,
            "properties": {
              "title": "移动电话",
              "describe": "",
              "required": false
            },
            "moved": false,
            "static": false
          },
          {
            "i": "2ff6eaf9-0696-47ca-8a28-708a8586484f",
            "type": "textarea",
            "x": 0,
            "y": 32,
            "isResizable": false,
            "w": 12,
            "h": 4,
            "properties": {
              "title": "单位",
              "describe": "",
              "required": false
            },
            "moved": false,
            "static": false
          },
          {
            "i": "f95842fd-6b9b-4555-9d1c-0fa088bdab80",
            "type": "input",
            "x": 0,
            "y": 36,
            "isResizable": false,
            "w": 12,
            "h": 4,
            "properties": {
              "title": "职务",
              "describe": "",
              "required": false
            },
            "moved": false,
            "static": false
          },
          {
            "i": "2e29d58c-7952-4e60-9ae0-d41080205723",
            "type": "textarea",
            "x": 0,
            "y": 40,
            "isResizable": false,
            "w": 12,
            "h": 4,
            "properties": {
              "title": "备注",
              "describe": "",
              "required": false
            },
            "moved": false,
            "static": false
          },
          {
            "i": "b461a08a-2ab3-49ef-9596-4209370fec3f",
            "type": "textarea",
            "x": 0,
            "y": 44,
            "isResizable": false,
            "w": 12,
            "h": 4,
            "properties": {
              "title": "多行文本",
              "describe": "",
              "required": false
            },
            "moved": false,
            "static": false
          }
        ],
        "last_udt_dt": "20181016 15:21:42",
        "last_udt_usr": "15000000001",
        "fedbak_num": 5,
        "last_fed_dt_tm": "20181016 15:22:31",
        "url": "http://ras.dev.jh:8087/#/CF/pageView-add/803d8a9e-b07d-4361-8fc2-c01092347623"
      },
      {
        "lgc_sn": "ff6f7ea8-b126-490a-b4fc-d3f0b5ad12b9",
        "prov_cd": null,
        "city_cd": null,
        "zon_cd": null,
        "str_cd": null,
        "templ_nm": "测试小普[复制][复制]",
        "templ_discp": "测试小普",
        "status": "3",
        "rgon_scope": "露露",
        "templ_str": [
          {
            "i": "d408f3cf-9ec3-40f0-be70-82770b710807",
            "type": "input",
            "x": 0,
            "y": 0,
            "isResizable": false,
            "w": 12,
            "h": 4,
            "properties": {
              "title": "单行文本",
              "describe": "",
              "required": false
            },
            "moved": false,
            "static": false
          },
          {
            "i": "c801e1af-bff3-4001-8fe5-c11d1cc6042b",
            "type": "number",
            "x": 0,
            "y": 4,
            "isResizable": false,
            "w": 12,
            "h": 4,
            "properties": {
              "title": "数字框",
              "describe": "",
              "required": false,
              "unit": ""
            },
            "moved": false,
            "static": false
          },
          {
            "i": "5f362316-a489-4503-936b-6e045c239d0d",
            "type": "date",
            "x": 0,
            "y": 8,
            "isResizable": false,
            "w": 12,
            "h": 4,
            "properties": {
              "title": "日期框",
              "describe": "",
              "required": false
            },
            "moved": false,
            "static": false
          },
          {
            "i": "61ee9af2-9530-438b-a358-51e05c142e79",
            "type": "select",
            "x": 0,
            "y": 12,
            "isResizable": false,
            "w": 12,
            "h": 4,
            "properties": {
              "title": "下拉框",
              "options": ["小普", "老铺"],
              "keys": [0, 1],
              "describe": "",
              "required": false
            },
            "moved": false,
            "static": false
          },
          {
            "i": "f4241069-3218-4a28-909c-cf653b3db540",
            "type": "radio",
            "x": 0,
            "y": 16,
            "isResizable": false,
            "w": 12,
            "h": 4,
            "properties": {
              "qtype": "2",
              "title": "选择框",
              "options": ["选项1", "选项1", "kjh"],
              "keys": [0, 1, 2],
              "describe": "",
              "required": false,
              "column_count": "4"
            },
            "moved": false,
            "static": false
          },
          {
            "i": "463aac32-ab0d-4d94-abe0-51cfd518b9d0",
            "type": "textarea",
            "x": 0,
            "y": 20,
            "isResizable": false,
            "w": 12,
            "h": 4,
            "properties": {
              "title": "多行文本",
              "describe": "",
              "required": false
            },
            "moved": false,
            "static": false
          },
          {
            "i": "93396a58-6636-4db8-a6ad-0f67f0a0c632",
            "type": "input",
            "x": 0,
            "y": 24,
            "isResizable": false,
            "w": 12,
            "h": 4,
            "properties": {
              "title": "姓名",
              "describe": "",
              "required": false
            },
            "moved": false,
            "static": false
          }
        ],
        "last_udt_dt": "20181016 11:18:56",
        "last_udt_usr": "15000000001",
        "fedbak_num": 0,
        "last_fed_dt_tm": "",
        "url": "http://ras.dev.jh:8087/#/CF/pageView-add/ff6f7ea8-b126-490a-b4fc-d3f0b5ad12b9"
      }, 
    ]
    const columns = [{
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: (text,record) => (
        <div>
          <img style={{ float: 'left', marginRight: '8px' }} src={task} alt="" />
          <div className={styles.renwu1}>
            <h2>{record.templ_nm}</h2>
            <Clipboard
              text={record.url}
              render={({ copy }) => <p title="点击左键跳转，右键复制网址" className={styles.url} onMouseDown={(e) => { this.copyRight(e, copy, record.url, record); }}>{record.status === '0' ? '' : record.url}</p>}
            />     
          </div>
        </div>
      ),
    }, {
      title: '填报范围',
      dataIndex: 'ragin',
      key: 'ragin',
      render: (text,record) => (
        <div>
          {
            record.rgon_scope === '' ? '—' : <a onClick={() => { this.checkArea(record); }}>查看</a>
          }      
          <a style={{ marginLeft: '12px' }}><img style={{ width: '14px', marginTop: '-4px' }} src={editsBlue} alt="" /></a>
        </div>
      ),
    }, {
      title: '状态',
      dataIndex: 'status',
      key: 'status',
      filters: [
        { text: '未发布', value: '0' },
        { text: '收集中', value: '1' },
        { text: '暂停中', value: '3' },
      ],
      filteredValue: filteredInfo.status || null,
      onFilter: (value, record) => record.status.includes(value),
      render: (text,record) => (
        <div>
          {record.status === '1' ? (
            <span style={{ color: '#63b874' }}>
              <div className={styles.status} style={{ background: '#63b874' }} />收集中
            </span>) : record.status === '0' ? (
              <span style={{ color: '#999999' }}>
                <div className={styles.status} style={{ background: '#999999' }} />未发布
              </span>) : (
                <span style={{ color: '#333333' }}>
                  <div className={styles.status} style={{ background: '#333333' }} />停止中
                </span>)}
        </div>
      ),
    }, {
      title: '反馈数',
      dataIndex: 'fedback',
      key: 'fedback',
      render: (text,record) => (
        <div>
          {record.status === '0' ? '—' : <Badge count={record.alert === '0' ? '0' : record.count}><Button style={{ marginLeft: '10px' }}><Link to={`/ZNBD/fedBack/${record.lgc_sn}`}>查看<span style={{ color: '#2e6cc3', marginLeft: '6px' }}>{record.fedbak_num}</span></Link></Button></Badge>}
        </div>
      ),
    }, {
      title: '最新反馈时间',
      dataIndex: 'fedbackTime',
      key: 'fedbackTime',
      render: (text,record) => (
        <div>
          <span style={{ width: '80px', display: 'block' }}>{record.last_fed_dt_tm === '' ? '—' : `${record.last_fed_dt_tm.substring(0, 4)}-${record.last_fed_dt_tm.substring(4, 6)}-${record.last_fed_dt_tm.substring(6, 8)}${record.last_fed_dt_tm.substring(8)}`}</span>
        </div>
      ),
    }, {
      title: '创建日期',
      dataIndex: 'creatTime',
      key: 'creatTime',
      render: (text,record) => (
        <div>
          <span style={{ width: '80px', display: 'block' }}>{`${record.last_udt_dt.substring(0, 4)}-${record.last_udt_dt.substring(4, 6)}-${record.last_udt_dt.substring(6, 8)}${record.last_udt_dt.substring(8)}`}</span>
        </div>
      ),
    }, {
      title: '操作',
      dataIndex: 'option',
      key: 'option',
      render: (text,record) => (
        <div>
          <span>
            <Button onClick={() => { this.handleEdit(record); }}><img style={{ width: '14px', marginTop: '-4px', marginRight: '6px' }} src={editBlue} alt="" />编辑</Button>
            <Button className={styles.stop} style={{ margin: '0 6px', color: record.status === '0' ? '#50b165' : record.status === '1' ? '#993232' : '#50b165' }} onClick={() => { this.toggleStop(record); }}>{record.status === '0' ? <img style={{ width: '14px', marginTop: '-4px' }} src={fabu1} alt="" /> : record.status === '1' ? <img style={{ width: '14px', marginTop: '-4px' }} src={stop} alt="" /> : <img style={{ width: '14px', marginTop: '-4px' }} src={fabu1} alt="" />}</Button>
            <Popconfirm title="确定删除吗？" okText="是" cancelText="否" onConfirm={() => { this.handleDel(record); }}>
              <Button><img style={{ width: '14px', marginTop: '-4px' }} src={delBlue} alt="" /></Button>
            </Popconfirm>
            {
              <Button disabled={record.status !== '1' ? 'disabled' : ''} onClick={() => { this.toggleAlert(record); }} className={record.alert === '0' ? styles.remindBlack : styles.remindWhite}><img style={{ width: '14px', marginTop: '-4px', marginRight: '6px' }} src={record.alert === '0' ? remindBlack : remindWhite} alt="" />提醒</Button>
            }
            
          </span>
        </div>
      ),
    },
    ];
    return (
      <div>
        <Modal
          title={<span><img style={{ width: '14px', marginTop: '-4px', marginRight: '6px' }} src={editBlue} alt="" />编辑</span>}
          visible={this.state.visible}
          onCancel={this.handleCancel}
          footer={[
            <Button key="Cancel" onClick={this.handleCancel}>取消</Button>,
            <Button key="fabu" onClick={this.fabu}>不选择直接发布</Button>,
            <Button key="range" type="primary" onClick={this.handleRange}>选择填报范围</Button>,
          ]}
        >
          <p>{this.state.rgon_grp}1</p>
        </Modal>

        <Table
          className={styles.formList}
          columns={columns}
          dataSource={data}
          pagination={false}
          onChange={this.handleChange}
          rowKey={record => record.lgc_sn}
        />
      </div>
    )
  }
}
