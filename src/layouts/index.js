import React from "react";
import styles from "./index.css";
import { Layout, Breadcrumb, Button } from "antd";
import MenuLayouts from '../components/menu/menu';
import axios from 'axios'
const { Header, Content, Footer, Sider } = Layout;

export default class MianLayouts extends React.Component {
  state = {
    collapsed: false
  };

  onCollapse = collapsed => {
    this.setState({ collapsed });
  };

  render() {
    return (
      <div className={styles.normal}>
        <Layout style={{ minHeight: "100vh" }}>
          <Sider
            collapsible
            collapsed={this.state.collapsed}
            onCollapse={this.onCollapse}
          >
            <div className={styles.logo}>测试导航</div>
            <MenuLayouts />
          </Sider>
          <Layout>
            <Header style={{ background: "#fff", padding: 0 }} />
            <Content style={{ margin: "0 16px" }}>
              <Breadcrumb style={{ margin: "16px 0" }}>
                <Breadcrumb.Item>首页</Breadcrumb.Item>
                <Breadcrumb.Item></Breadcrumb.Item>
              </Breadcrumb>
              <div style={{ padding: 24, background: "#fff", minHeight: 360 }}>
                <Button onClick={ ()=>{ axios.get('/api/users') } }>get</Button>
                {this.props.children}
              </div>
            </Content>
            <Footer style={{ textAlign: "center" }}>
              LiuLiang ©2018 Created by BenBen
            </Footer>
          </Layout>
        </Layout>
      </div>
    );
  }
}
