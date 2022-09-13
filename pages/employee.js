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
import { useRecoilState } from "recoil";
import { employerIdState } from "../lib/states";
import EmployeeDashboard from "../components/employeeDashboard";

const { Header, Content, Sider } = Layout;

const Employee = () => {
  const router = useRouter();
  const [employerId, setEmployerId] = useRecoilState(employerIdState);
  const items2 = [
    {
      key: `sub1`,
      icon: React.createElement(LaptopOutlined),
      label: `Dashboard`,
      onClick: () => router.push("/"),
    },
    {
      key: `sub2`,
      icon: React.createElement(UserOutlined),
      label: `Employee`,
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
              <EmployeeDashboard employerId={employerId} />
            </Content>
          </Layout>
        </Layout>
      </Layout>
    </>
  );
};

export default Employee;
