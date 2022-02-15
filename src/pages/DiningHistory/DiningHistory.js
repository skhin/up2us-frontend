import React from "react";
import "./DiningHistory.css";
import { Row, Col } from "antd";

import visRest from "../../assets/images/visRest.jpg";
import thumbsUp from "../../assets/images/thumbsup.png";
import thumbsDown from "../../assets/images/thumbsdown.jpeg";
import { useHistory } from "react-router-dom";

const DiningHistory = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const history = useHistory();

  return (
    <div className="user_setting">
      <div className="title">
        <h1>{user.userName} Profile - Dining History</h1>
      </div>
      <Row justify="center" align="middle" className="userOptions">
        <Col span={16}>
          <Row justify="space-between">
            <Col
              xs={2}
              sm={4}
              md={6}
              lg={11}
              xl={13}
              onClick={() => history.push("/visitedlocation")}
              className="dining_history"
            >
              <h1>Visited Location</h1>
              <img src={visRest} alt="history" className="visRes" />
            </Col>

            <Col
              xs={2}
              sm={4}
              md={6}
              lg={11}
              xl={13}
              onClick={() => history.push("/favestab")}
              className="dining_history"
            >
              <h1>Favourite Establishment</h1>
              <img src={thumbsUp} alt="history" className="thumbsUp" />
            </Col>

            <Col
              xs={2}
              sm={4}
              md={6}
              lg={11}
              xl={13}
              onClick={() => history.push("/blacklist")}
              className="dining_history"
            >
              <h1>Blacklisted Establishment</h1>
              <img src={thumbsDown} alt="history" className="thumbsdown" />
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default DiningHistory;
