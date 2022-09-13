import DemoColumn from "../components/totalpayroll";
import Employee from "../components/employee";
import MoneyDashboard from "../components/moneyDashboard";
import Profile from "../components/profile";
import { useRouter } from "next/router";
import React, { useState } from "react";
import "antd/dist/antd.css";

import {
  LaptopOutlined,
  NotificationOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Breadcrumb, Layout, Menu } from "antd";
import Navbar from "../components/navbar";

const { Header, Content, Sider } = Layout;

const App = () => {
  const router = useRouter();
  const { pathname, query } = router;
  const { employerId, tab } = query;
  console.log("query", query, pathname);
  const items2 = [
    {
      key: `sub1`,
      icon: React.createElement(LaptopOutlined),
      label: `Dashboard`,
      onClick: () =>
        router.push({
          pathname: "/",
          query: { employerId: employerId, tab: "Dashboard" },
        }),
    },
    {
      key: `sub2`,
      icon: React.createElement(UserOutlined),
      label: `Employee`,
      onClick: () =>
        router.push({
          pathname: "/",
          query: { employerId: employerId, tab: "Employee" },
        }),
    },
  ];
  return (
    <>
      <Navbar />
      <Layout>
        <Layout>
          <Sider width={200} className="site-layout-background">
            <Menu
              mode="inline"
              defaultSelectedKeys={["1"]}
              defaultOpenKeys={["sub1"]}
              style={{
                height: "100%",
                borderRight: 0,
              }}
              items={items2}
            />
          </Sider>
          <Layout
            style={{
              padding: "0 24px 24px",
            }}
          >
            <Content
              className="site-layout-background"
              style={{
                padding: 24,
                margin: 0,
                minHeight: 280,
              }}
            >
              {tab === "Dashboard" ? (
                <>
                  <Profile />
                  <MoneyDashboard />
                </>
              ) : tab === "Employee" ? (
                <Employee />
              ) : (
                <p>nothing to show</p>
              )}
            </Content>
          </Layout>
        </Layout>
      </Layout>
    </>
  );
};

export default App;
