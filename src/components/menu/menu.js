import React from "react";
import { Menu, Icon } from "antd";
import { Link } from 'react-router-dom';
const SubMenu = Menu.SubMenu;

export default class MenuLayouts extends React.Component {
  render() {
    return (
      <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
        {/* 首页 */}
        <Menu.Item key="home">
          <Link to='/'>
            <Icon type="pie-chart" />
            <span>首页</span>
          </Link> 
        </Menu.Item>
        {/* 智能表单 */}
        <SubMenu
          key="znbd"
          title={
            <span>
              <Icon type="user" />
              <span>智能表单测试</span>
            </span>
          }
        >
          <Menu.Item key="znbd1"><Link to='/znbd/feed'>反馈列表</Link></Menu.Item>
          <Menu.Item key="znbd2"><Link to='/znbd/setTop'>置顶操作</Link></Menu.Item>
          <Menu.Item key="znbd3"><Link to='/znbd/task'>任务列表</Link></Menu.Item>
        </SubMenu>
        {/* antd */}
        <SubMenu
          key="antd"
          title={
            <span>
              <Icon type="user" />
              <span>Antd</span>
            </span>
          }
        >
          <Menu.Item key="antd1"><Link to='/antd/tree'>树形结构</Link></Menu.Item>
        </SubMenu>
      </Menu>
    );
  }
}
