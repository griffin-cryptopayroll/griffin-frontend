import { Column } from "@ant-design/plots";
import styles from "../styles/dashboard.module.css";

const TotalPayroll = (props) => {
  const data = [
    {
      type: "Aug 2021",
      value: 2000,
    },
    {
      type: "Sep 2021",
      value: 1500,
    }
  ];
  const config = {
    data,
    xField: "type",
    yField: "value",
    label: {
      // 可手动配置 label 数据标签位置
      position: "middle",
      // 'top', 'bottom', 'middle',
      // 配置样式
      style: {
        fill: "#FFFFFF",
        opacity: 0.6,
      },
    },
    xAxis: {
      label: {
        autoHide: true,
        autoRotate: false,
      },
    },
    meta: {
      type: {
        alias: "ee",
      },
      value: {
        alias: "ee",
      },
    },
  };
  return (
    <div className={styles.totalpayrollCont}>
      <h1>Total Payroll</h1>
      <Column {...config} />;
    </div>
  );
};

export default TotalPayroll;
