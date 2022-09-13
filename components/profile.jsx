import styles from "../styles/profile.module.css";
import { Descriptions } from "antd";
import "antd/dist/antd.css";

export default function Profile() {
  const data = {
    name: "GRIFFIN",
    description: "make crypto payroll private",
    email: "griffinpay2022@gmail.com",
    wallet: "0xagw2332aawegew32r",
    id: "2020170365",
  };

  return (
    <div className={styles.profileBox}>
      <Descriptions title="Company Profile">
        <Descriptions.Item label="Name">{data.name}</Descriptions.Item>
        <Descriptions.Item label="Description">
          {data.description}
        </Descriptions.Item>
        <Descriptions.Item label="Email">{data.email}</Descriptions.Item>
        <Descriptions.Item label="ID">{data.id}</Descriptions.Item>
        <Descriptions.Item label="Wallet">{data.wallet}</Descriptions.Item>
      </Descriptions>
    </div>
  );
}
