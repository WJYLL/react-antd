import React from "react";
import { Table } from "antd";
// import { connect } from "dva";
import "antd/dist/antd.css";
import delgray from '../../assets/delgray.svg';
import setTopIcon1 from '../../assets/setTopIcon1.svg';
const aa = [
  {
    title: "姓名",
    dataIndex: "a",
    key: "a",
    fixed: "left",
    width: 100
  },
  {
    title: "年龄",
    dataIndex: "b",
    key: "b"
  },
  {
    title: "水电费是个啥蛋糕",
    dataIndex: "c",
    key: "c"
  },
  {
    title: "十多个",
    dataIndex: "d",
    key: "d"
  },
  {
    title: "十多个",
    dataIndex: "e",
    key: "e"
  },
  {
    title: "沙发斯蒂芬",
    dataIndex: "f",
    key: "f"
  },
  {
    title: "地方",
    dataIndex: "g",
    key: "g"
  },
  {
    title: "二分法",
    dataIndex: "h",
    key: "h"
  },
  {
    title: "儿童",
    dataIndex: "i",
    key: "i"
  },
  {
    title: "温热无若翁",
    dataIndex: "j",
    key: "j"
  }
];

export default class Feed extends React.Component {
  state = {
    columns: [],
    data: [],
    hh: ""
  };
  UNSAFE_componentWillMount() {
    // 头
    const columns = [];
    columns.push({
      title: "置顶1123123213",
        dataIndex: "a",
        key: "a",
        fixed: "left",
        width: 100,
        render: (text, record, index) => (
          <a>
            <img style={{ width: '16px', cursor: 'pointer' }} src={delgray} alt="" />
            <img style={{ width: '20px', cursor: 'pointer' }} src={setTopIcon1} alt="" />
          </a>
        )
    });
    
    for (let i = 0; i < aa.length; i += 1) {
      columns.push({
        title: aa[i].title,
        dataIndex: aa[i].dataIndex,
        key: aa[i].key
      });
    }

    const data = [
      {
        key: "1",
        a: "g就了",
        b: "32",
        c: "New York No. 1 Lake Park",
        d: "21321424214",
        f: "egegsdg",
        e: "撒旦法",
        g: "egwegew发士大夫撒收到复试gewg",
        h: "十大三十多个粉丝是三个",
        i: "egwegewg该死的噶第三个第十大gasewg",
        j: "蒂固是 十大是撒是是wgewg",
        k: "十大歌手是是干撒as"
      },
      {
        key: "2",
        a: "John Brown",
        b: "32",
        c: "New York No. 1 Lake Park",
        d: "325325325345435",
        e: "撒",
        f: "peoiopgw",
        g: "egwegew发撒收到复试gewg",
        h: "十十多个粉丝是三个",
        i: "egwegewg该死的第四个都是噶三个十大gasewg",
        j: "egwege都是撒是是wgewg",
        k: "十大歌手是是干撒as"
      },
      {
        key: "3",
        a: "John Brown",
        b: "32",
        c: "New York No. 1 Lake Park",
        d: "4334634643634",
        e: "撒旦法",
        f: "gewgew",
        g: "egw到复试gewg",
        h: "十大三三个",
        i: "egwegewg该死的噶第三个第四个都asewg",
        j: "egwege都wg",
        k: "十大歌干撒as"
      }
    ];
    console.log(columns);
    // 宽度设置
    const ii = [];
    for (let i = 0; i < columns.length; i += 1) {
      for (let k = 0; k < data.length; k += 1) {
        ii.push(data[k][columns[i].key]);
      }
      ii.push(columns[i].title);
    }
    console.log(ii);

    const bb = [];
    for (let i = 0; i < ii.length; i += 1) {
      let len = 0;
      for (let y = 0; y < ii[i].length; y += 1) {
        if (ii[i].charCodeAt(y) > 127 || ii[i].charCodeAt(y) === 94) {
          len += 2;
        } else {
          len += 1;
        }
      }
      bb.push(len);
    }
    console.log(bb);

    const newArr = [];
    const oo = data.length+1
    const s = bb.length / oo;
    let n = 0;
    for (let i = 1; i <= s; i += 1) {
      const star = (i - 1) * oo;
      newArr[n++] = bb.slice(star, star + oo);
    }
    const y = bb.length - s * oo;
    if (y > 0) {
      newArr[n++] = bb.slice(s * oo);
    }
    console.log(newArr);

    const cc = [];
    for (var i = 0; i <= newArr.length - 1; i++) {
      cc.push(Math.max.apply(null, newArr[i]));
    }
    console.log(cc);
    console.log(columns)
    let hh = 0;
    for (let i = 0; i < cc.length; i += 1) {
      console.log(columns[i])
      columns[i].width = cc[i] * 14;
      hh += Number(cc[i] * 14);
      console.log(columns[i])
    }
    console.log(hh);

    this.setState({
      columns,
      data,
      hh
    });
  }

  render() {
    return (
      <div>
        <Table
          columns={this.state.columns}
          dataSource={this.state.data}
          scroll={{ x: this.state.hh }}
          bordered
        />
      </div>
    );
  }
}
