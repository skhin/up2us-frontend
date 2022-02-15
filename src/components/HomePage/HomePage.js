import React from "react";
import "./HomePage.css";
import { useHistory } from "react-router-dom";
import home1 from "../../assets/images/home1.jpg";
import home2 from "../../assets/images/home2.jpg";
import home3 from "../../assets/images/home3.jpg";
import { Button } from "antd";

const HomePage = () => {
  const history = useHistory();
  return (
    <>
      <div className="home_top">
        <div className="description">
          <h1>UP2US</h1>
          <p>
            <strong>
              <em>Up2Us</em>
            </strong>
            , the app that helps you to decide where to dine with your loved
            ones
          </p>
        </div>
        <img src={home1} alt="home-1" />
      </div>
      <div className="home_bottom">
        <img src={home2} alt="home-2" />
        <div className="letsgo_desc">
          <h1>ARE YOU READY?</h1>
          <p>Click the button below to begin your culinary adventure</p>
          <Button
            className="home__btn"
            onClick={() => history.push("/dietrestriction")}
            size="large"
            type="primary"
          >
            LET'S GO
          </Button>
        </div>
        <img src={home3} alt="home-3" />
      </div>
    </>
  );
};

export default HomePage;
