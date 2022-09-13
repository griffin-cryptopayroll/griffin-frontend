import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import "antd/dist/antd.css";
import { Table } from "antd";
import styles from "../styles/dashboard.module.css";
import { getPaymentApi } from "../api/employee";

const columns = [
  {
    title: "Name",
    dataIndex: "name",
  },
  {
    title: "Payroll",
    dataIndex: "payroll",
  },
  {
    title: "Date",
    dataIndex: "time",
  },
];
const data = [];

for (let i = 0; i < 46; i++) {
  data.push({
    key: i,
    name: `Edward King ${i}`,
    age: 32,
    address: `London, Park Lane no. ${i}`,
  });
}

const RecentPayrollActivity = () => {
  const [data, setData] = useState([]);
  const router = useRouter();
  const { employerId } = router.query;
  const getPayrollActivity = async (employerId) => {
    const res = await getPaymentApi(employerId);
    setData(res.data.reverse());
  };

  useEffect(() => {
    getPayrollActivity(employerId);
  }, []);

  return (
    <div className={styles.recentPayrollCont}>
      <h1>Recent Payroll Activity</h1>
      <Table columns={columns} dataSource={data} />;
    </div>
  );
};

export default RecentPayrollActivity;
