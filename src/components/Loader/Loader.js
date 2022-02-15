import React from "react";
import "./Loader.css";
import { Spin } from "antd";

const Loader = () => {
  return (
    <div className="loader">
      <Spin />
    </div>
  );
};

export default Loader;
