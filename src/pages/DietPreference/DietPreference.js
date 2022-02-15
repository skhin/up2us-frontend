import React from "react";
import "./DietPreference.css";
import { Row, Col, Button } from "antd";
import { useHistory } from "react-router-dom";
import Restriction from "../../assets/images/restriction.jpeg";
import Delicious from "../../assets/images/delicious.jpg";
import noEat from "../../assets/images/noeat.png";

const DietPreference = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const history = useHistory();

  return (
    <div className="dietPref container">
      <div className="title">
        <h1>{user.userName} Profile - DIETARY RESTRICTIONS & PREFERENCES</h1>
      </div>

      <Row justify="center" className="diet__row">
        <Col xs={8} sm={16} md={24} lg={32} className="diet_card">
          <img
            src={Restriction}
            className="img_restriction"
            alt="restriction"
          />
          <h1>
            Dietary <br /> Restriction
          </h1>
          <Button
            className="diet_btn"
            onClick={() => history.push("/dietrestriction")}
          >
            Get Started
          </Button>
        </Col>

        <Col xs={8} sm={16} md={24} lg={32} className="diet_card">
          <img src={Delicious} className="img_delicious" alt="Delicious" />
          <h1>
            Favourite <br /> Cuisine
          </h1>
          <Button
            className="diet_btn"
            onClick={() => history.push("/favcuisine")}
          >
            Get Started
          </Button>
        </Col>

        <Col xs={8} sm={16} md={24} lg={32} className="diet_card">
          <img src={noEat} className="img_noEat" alt="noEat" />
          <h1>
            Non-Favourite <br /> Cuisine
          </h1>
          <Button
            className="diet_btn"
            onClick={() => history.push("/nonfavcuisine")}
          >
            Get Started
          </Button>
        </Col>
      </Row>
    </div>
  );
};

export default DietPreference;
