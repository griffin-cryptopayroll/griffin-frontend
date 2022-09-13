import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import "antd/dist/antd.css";
import { Button, Table, Modal, Form, Input, Menu, Radio } from "antd";
import {
  getEmployeeApi,
  postEmployeeApi,
  postPaymentApi,
} from "../api/employee.js";
import styles from "../styles/employee.module.css";

const Employee = () => {
  const router = useRouter();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showMode, setShowMode] = useState(0);
  const [employeeReList, setEmployeeReList] = useState([]);
  const [employeeNReList, setEmployeeNReList] = useState([]);
  const [totalEmplyeeList, setTotalEmployeeList] = useState([]);
  const [totalEmployee, setTotalEmployee] = useState();
  const { employerId } = router.query;
  const [postEmployee, setPostEmployee] = useState({
    name: "",
    email: "",
    position: "",
    account: "",
    payroll: "",
    curr: "ETH",
    employType: "free",
    key: "",
    date: "",
  });

  const getEmployee = async (employerId) => {
    console.log(employerId);
    const res = await getEmployeeApi(employerId);
    if (res.data.repeat_false) setEmployeeNReList(res.data.repeat_false);
    if (res.data.repeat_true) setEmployeeReList(res.data.repeat_true);
    setTotalEmployee(res.data.total_length);
    setTotalEmployeeList(res.data.repeat_true?.concat(res.data.repeat_false));
    console.log(
      res,
      res.data.repeat_false,
      res.data.repeat_true,
      res.data.repeat_true?.concat(res.data.repeat_false)
    );
  };

  const postEmployeeFunc = async (employerId, postEmployee) => {
    console.log(employerId, postEmployee);
    const res = await postEmployeeApi(employerId, postEmployee);

    console.log(res);
  };

  const onChange = (e) => {
    const { value, name } = e.target;
    console.log(value, name);
    const copy = { ...postEmployee };
    copy[name] = value;
    setPostEmployee(copy);
  };

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = async () => {
    const res = await postEmployeeFunc(employerId, postEmployee);
    console.log(res);
    setIsModalVisible(false);
    setPostEmployee({
      name: "",
      email: "",
      position: "",
      account: "",
      payroll: "",
      curr: "ETH",
      employType: "free",
      key: "",
      date: "",
    });
    await getEmployee(employerId);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
    },
    {
      title: "Email",
      dataIndex: "email",
    },
    {
      title: "Positioin",
      dataIndex: "position",
    },
    {
      title: "Wallet",
      dataIndex: "account",
    },
    {
      title: "Payroll",
      dataIndex: "payroll",
    },
    {
      title: "Currency",
      dataIndex: "curr",
    },
    {
      title: "Date",
      dataIndex: "date",
    },
  ];
  const start = () => {
    setLoading(true); // ajax request after empty completing

    setTimeout(() => {
      setSelectedRowKeys([]);
      setLoading(false);
    }, 1000);
  };

  const onSelectChange = (newSelectedRowKeys) => {
    console.log("selectedRowKeys changed: ", selectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const paynowPress = () => {
    //do transfer
    console.log(selectedRowKeys);
    selectedRowKeys.map(async (key) => {
      const selectedEmployee = totalEmplyeeList.find(
        (employee) => employee.key === key
      );

      const res = await postPaymentApi(
        employerId,
        selectedEmployee.name,
        selectedEmployee.payroll,
        selectedEmployee.curr
      );
      console.log(res);
    });
    window.alert("success fully paymented");
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };

  useEffect(() => {
    console.log(employerId);
    getEmployee(employerId);
  }, []);

  const hasSelected = selectedRowKeys.length > 0;
  return (
    <div>
      <div className={styles.btnCont}>
        <button onClick={() => setShowMode(0)}>Total</button>
        <button onClick={() => setShowMode(1)}>Full-Time</button>
        <button onClick={() => setShowMode(2)}>Contract</button>
      </div>
      <div className={styles.btnCont}>
        <button onClick={paynowPress}>pay now</button>
        <Button type="primary" onClick={showModal}>
          Add Employee
        </Button>
      </div>

      <Modal
        title="Basic Modal"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Form.Item
          label="name"
          name="name"
          rules={[
            {
              required: true,
              message: "Please input your username!",
            },
          ]}
        >
          <Input
            name="name"
            defaultValue={postEmployee.name}
            onChange={onChange}
          />
        </Form.Item>
        <Form.Item
          label="Email"
          name="email"
          rules={[
            {
              required: true,
              message: "Please input your username!",
            },
          ]}
        >
          <Input
            name="email"
            defaultValue={postEmployee.email}
            onChange={onChange}
          />
        </Form.Item>
        <Form.Item
          label="ID"
          name="key"
          rules={[
            {
              required: true,
              message: "Please input your username!",
            },
          ]}
        >
          <Input
            name="key"
            defaultValue={postEmployee.id}
            onChange={onChange}
          />
        </Form.Item>
        <Form.Item
          label="Position"
          name="position"
          rules={[
            {
              required: true,
              message: "Please input your username!",
            },
          ]}
        >
          <Input
            name="position"
            defaultValue={postEmployee.position}
            onChange={onChange}
          />
        </Form.Item>
        <Form.Item
          label="Wallet"
          name="address"
          rules={[
            {
              required: true,
              message: "Please input your username!",
            },
          ]}
        >
          <Input
            name="account"
            defaultValue={postEmployee.account}
            onChange={onChange}
          />
        </Form.Item>
        <Form.Item
          label="date"
          name="date"
          rules={[
            {
              required: true,
              message: "Please input your username!",
            },
          ]}
        >
          <Input
            name="date"
            defaultValue={postEmployee.date}
            onChange={onChange}
          />
        </Form.Item>
        <Form.Item
          label="Payroll"
          name="payroll"
          rules={[
            {
              required: true,
              message: "Please input your username!",
            },
          ]}
        >
          <Input
            name="payroll"
            defaultValue={postEmployee.payroll}
            onChange={onChange}
          />
        </Form.Item>
        <Form.Item
          label="Employ Type"
          name="employType"
          rules={[
            {
              required: true,
              message: "Please input your username!",
            },
          ]}
        >
          <Radio.Group
            name="employType"
            onChange={onChange}
            value={postEmployee.employType}
          >
            <Radio value="free">contract</Radio>
            <Radio value="perma">full-time</Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item
          label="Currency"
          name="currency"
          rules={[
            {
              required: true,
              message: "Please input your username!",
            },
          ]}
        >
          <Radio.Group
            name="curr"
            onChange={onChange}
            value={postEmployee.curr}
          >
            <Radio value="ETH">ETH</Radio>
            <Radio value="MATIC">MATIC</Radio>
            <Radio value="USDC">USDC</Radio>
          </Radio.Group>
        </Form.Item>
      </Modal>
      <div
        style={{
          marginBottom: 16,
        }}
      >
        <Button
          type="primary"
          onClick={start}
          disabled={!hasSelected}
          loading={loading}
        >
          Reload
        </Button>
        <span
          style={{
            marginLeft: 8,
          }}
        >
          {hasSelected ? `Selected ${selectedRowKeys.length} items` : ""}
        </span>
      </div>
      {showMode === 0 ? (
        <Table
          rowSelection={rowSelection}
          columns={columns}
          dataSource={totalEmplyeeList}
        />
      ) : showMode === 1 ? (
        <Table
          rowSelection={rowSelection}
          columns={columns}
          dataSource={employeeReList}
        />
      ) : (
        <Table
          rowSelection={rowSelection}
          columns={columns}
          dataSource={employeeNReList}
        />
      )}
    </div>
  );
};

export default Employee;
