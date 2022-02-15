import React from "react";
import "./ContactUs.css";
import { Form, Row, Input, Button, Col } from "antd";

const ContactUs = () => {
  // HANDLE USER LOGIN
  const onFinish = async (loginInfo) => {};

  return (
    <Row className="contact_us">
      <Col xs={24} sm={24} md={12} lg={12} xl={12}>
        <Form
          name="contact-us"
          onFinish={onFinish}
          autoComplete="off"
          layout="vertical"
        >
          <h1>Contact Us</h1>
          <Row gutter={[16, 16]}>
            <Col xs={24} sm={24} md={10} lg={10} xl={12}>
              <Form.Item
                name="name"
                rules={[{ required: true, message: "Please enter your name!" }]}
              >
                <Input placeholder="Your Name" />
              </Form.Item>
            </Col>

            <Col xs={24} sm={24} md={10} lg={10} xl={12}>
              <Form.Item
                name="email"
                rules={[
                  { type: "email", message: "The input is not valid E-mail!" },
                  { required: true, message: "Please input your E-mail!" },
                ]}
              >
                <Input placeholder="Your Email" />
              </Form.Item>
            </Col>

            <Col xs={24} sm={24} md={10} lg={24} xl={24}>
              <Form.Item
                name="subject"
                rules={[
                  { required: true, message: "Please enter your subject!" },
                ]}
              >
                <Input placeholder="Subject" />
              </Form.Item>
            </Col>

            <Col xs={24} sm={24} md={10} lg={24} xl={24}>
              <Form.Item
                name="message"
                rules={[
                  { required: true, message: "Please enter your message!" },
                ]}
              >
                <Input.TextArea rows={8} placeholder="Your Message" />
              </Form.Item>
            </Col>

            <Col xs={24} sm={24} md={10} lg={24} xl={24}>
              <Form.Item>
                <Button
                  size="large"
                  type="primary"
                  htmlType="submit"
                  className="submit"
                >
                  Submit
                </Button>
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Col>
    </Row>
  );
};

export default ContactUs;
