import React from "react";
import "./UserPage.css";
import { Row, Col } from "antd";
import historyImg from "../../assets/images/history.jpg";
import dietImg from "../../assets/images/diet.jpg";
import { useHistory } from "react-router-dom";

const UserPage = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const history = useHistory();

  return (
    <div className="container userPage">
      <div className="title">
        <h1 className="user__title">{user.userName} Profile Page</h1>
      </div>

      <Row justify="center" align="middle" className="userOption">
        <Col span={16}>
          <Row justify="space-between">
            <Col
              xs={2}
              sm={4}
              md={6}
              lg={11}
              xl={11}
              onClick={() => history.push("/dietpreference")}
              className="diet_preference"
            >
              <h1>Meal Preferences</h1>
              <img src={dietImg} alt="diet" />
            </Col>
            <Col
              xs={2}
              sm={4}
              md={6}
              lg={11}
              xl={11}
              onClick={() => history.push("/dininghistory")}
              className="diet_preference"
            >
              <h1>Dining History</h1>
              <img src={historyImg} alt="diet" />
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default UserPage;
