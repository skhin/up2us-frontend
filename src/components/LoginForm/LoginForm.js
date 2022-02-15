import React, { useState } from "react";
import "./LoginForm.css";
import { Form, Input, Button, Col, Row, message } from "antd";
import { Link, useHistory } from "react-router-dom";
import authServ from "../../service/auth";

const LoginForm = () => {
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  // MAKING API CALL FOR USER LOGIN
  const handleLogin = async (userInfo) => {
    setLoading(true);
    try {
      const res = await authServ.signin(userInfo);
      const { user, token } = res;
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));
      history.push("/");
    } catch (err) {
      message.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Row className="loginForm">
      <Col xs={24} sm={24} md={15} lg={10} xl={9} className="loginBox">
        <Form
          name="login"
          onFinish={handleLogin}
          autoComplete="off"
          layout="vertical"
        >
          <h1>LOGIN</h1>

          <Form.Item
            name="email"
            className="email"
            label="Email"
            rules={[
              { type: "email", message: "Please enter valid E-mail" },
              { required: true, message: "Please enter your Email" },
            ]}
          >
            <Input placeholder="Email" />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please enter your password" }]}
          >
            <Input.Password placeholder="Password" />
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-button"
              loading={loading}
            >
              LOGIN
            </Button>
          </Form.Item>
          <p>
            Do not have an account yet? What are you waiting for?{" "}
            <Link to={"/register"}>REGISTER NOW</Link>
          </p>
        </Form>
      </Col>
    </Row>
  );
};

export default LoginForm;
