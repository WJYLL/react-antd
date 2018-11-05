import React from "react";
import { Table, Button } from "antd";
import "antd/dist/antd.css";
import delgray from '../../assets/delgray.svg';
import setTopIcon1 from '../../assets/setTopIcon1.svg';
const data_grp = [
  {
    lgc_sn: "aaa",
    no: 0,
    data_str: {
      key: "1",
      id: "aaa",
      a: "John Brown",
      b: "1",
      c: "New York No. 1 Lake Park",
      d: "21321424214",
      f: "egegsdg",
      e: "撒旦法",
      g: "egwegew发士大夫撒收到复试gewg",
      h: "十大三十多个粉丝是三个",
      i: "egwegewg该死的噶第三个第十大gasewg",
      j: "蒂固是 十大是撒是是wgewg",
      k: "十大歌手是是干撒as"
    }
  },
  {
    lgc_sn: "bbb",
    no: 0,
    data_str: {
      key: "2",
      id: "bbb",
      a: "John Brown",
      b: "2",
      c: "New York No. 1 Lake Park",
      d: "325325325345435",
      e: "撒",
      f: "peoiopgw",
      g: "egwegew发撒收到复试gewg",
      h: "十十多个粉丝是三个",
      i: "egwegewg该死的第四个都是噶三个十大gasewg",
      j: "egwege都是撒是是wgewg",
      k: "十大歌手是是干撒as"
    }
  },
  {
    lgc_sn: "ccc",
    no: 0,
    data_str: {
      key: "3",
      id: "ccc",
      a: "John Brown",
      b: "3",
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
  }
];
 
export default class SetTop extends React.Component {
  state = {
    data_grps: ""
  };
  // 置顶
  setTop = record => {
    let data_g = "";
    if (this.state.data_grps.length !== 0) {
      data_g = this.state.data_grps;
    } else {
      data_g = data_grp;
    }

    const indexValue = record.id;

    for (let i = 0; i < data_g.length; i += 1) {
      if (indexValue === data_g[i].lgc_sn) {
        const str = data_g.splice(i, 1);
        str[0].no = data_g[0].no + 1;
        data_g.unshift(str[0]);
      }
    }

    this.setState({
      data_grps: data_g
    });

    // console.log(this.state.data_grps)
  };

  save = () => {
    let data_grps1 = "";
    if (this.state.data_grps.length !== 0) {
      data_grps1 = this.state.data_grps;
    } else {
      data_grps1 = data_grp;
    }

    const result = data_grps1.filter(item => item.no !== 0);
    console.log(result);
  };

  render() {
    const columns = [
      {
        title: "置顶",
        dataIndex: "a",
        key: "a",
        fixed: "left",
        width: 100,
        render: (text, record, index) => (
          <a onClick={this.setTop.bind(null, record)}>
            <img style={{ width: '16px', cursor: 'pointer' }} src={delgray} alt="" />
            <img style={{ width: '20px', cursor: 'pointer' }} src={setTopIcon1} alt="" />
          </a>
        )
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

    const data = [];
    for (let i = 0; i < data_grp.length; i += 1) {
      data.push(data_grp[i].data_str);
    }

    return (
      <div>
        <Table columns={columns} dataSource={data} scroll={{ x: 3000 }} />
        <Button onClick={this.save}>保存</Button>
      </div>
    );
  }
}
