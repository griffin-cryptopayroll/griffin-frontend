import MoneyDashboard from "../components/moneyDashboard";
import Profile from "../components/profile";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import "antd/dist/antd.css";

import {
  LaptopOutlined,
  NotificationOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Breadcrumb, Layout, Menu } from "antd";
import Navbar from "../components/navbar";
import { useRecoilState, useRecoilValue } from "recoil";
import { employerIdState, loginState } from "../lib/states";

const { Header, Content, Sider } = Layout;

const App = () => {
  const router = useRouter();
  const [employerId, setEmployerId] = useRecoilState(employerIdState);
  const loginStateNow = useRecoilValue(loginState);
  const items2 = [
    {
      key: `sub1`,
      icon: React.createElement(LaptopOutlined),
      label: `Dashboard`,
    },
    {
      key: `sub2`,
      icon: React.createElement(UserOutlined),
      label: `Employee`,
      onClick: () => router.push("/employee"),
    },
  ];
  useEffect(() => {
    if (!loginStateNow) {
      window.alert("You need to login before enter the Dashboard");
      router.push("/login");
    }
  }, [loginStateNow]);

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
              <>
                <Profile employerId={employerId} />
                <MoneyDashboard employerId={employerId} />
              </>
            </Content>
          </Layout>
        </Layout>
      </Layout>
    </>
  );
};

export default App;
