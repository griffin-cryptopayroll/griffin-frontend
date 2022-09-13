import React, { useState } from "react";
import { useRouter } from "next/router";
import "antd/dist/antd.css";
import { Button, Checkbox, Form, Input } from "antd";
import styles from "../styles/signup.module.css";
import { loginApi } from "../api/employee";

const Login = () => {
  const router = useRouter();
  const [inputData, setInputData] = useState({
    employerId: "",
    employerPw: "",
  });
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  const loginFunc = async (inputData) => {
    const res = await loginApi(inputData.employerId, inputData.employerPw);
    console.log(res.username, res);
    router.push({
      pathname: "/",
      query: { employerId: res.data.employerId, tab: "Dashboard" },
    });
  };

  const onChange = (e) => {
    const { value, name } = e.target;
    console.log(value, name);
    const copy = { ...inputData };
    copy[name] = value;
    setInputData(copy);
  };
  return (
    <div className={styles.loginBox}>
      <div>
        <h1>Welcome to GRIFFIN!</h1>
      </div>
      <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        initialValues={{
          remember: true,
        }}
        autoComplete="off"
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[
            {
              required: true,
              message: "Please input your username!",
            },
          ]}
        >
          <Input
            name="employerId"
            defaultValue={inputData.employerId}
            onChange={onChange}
          />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <Input.Password
            name="employerPw"
            defaultValue={inputData.employerPw}
            onChange={onChange}
          />
        </Form.Item>

        <Form.Item
          name="remember"
          valuePropName="checked"
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button
            onClick={() => loginFunc(inputData)}
            type="primary"
            htmlType="submit"
          >
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Login;
