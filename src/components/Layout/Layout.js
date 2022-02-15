import React from "react";
import "./Layout.css";
import { withRouter } from "react-router-dom";
import { Layout } from "antd";
import Header from "../Header/Header";

const { Content } = Layout;

const MainLayout = ({ children }) => {
  return (
    <Layout>
      <Header />
      <Content>{children}</Content>
    </Layout>
  );
};

export default withRouter(MainLayout);
