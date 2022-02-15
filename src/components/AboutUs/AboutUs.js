import React from "react";
import "./AboutUs.css";
import Logo from "../../assets/images/logo.png";

const AboutUs = () => {
  return (
    <div className="container aboutus">
      <div className="wrapper">
        <div className="row">
          <div className="column">
            <div className="about-img">
              <img className="about-img" src={Logo} alt="about-logo" />
            </div>
          </div>
          <div className="column">
            <div className="about-desc">
              <div className="beginning">IN THE BEGINNING</div>
              <div className="about_desc">
                <p className="white">
                  Since the dawn of time, mankind has been plagued with one
                  question that has lasted till this very day...
                </p>
                <br />
                <p className="orange">WHAT DO YOU WANT TO EAT?</p> ​
                <br />
                <p className="white">
                  And most time, the annoying answer will be ....
                </p>
                <br />​<p className="orange">ANYTHING. UP TO YOU</p> ​
                <br />
                <p className="white">
                  Relationships have been strained and broken.
                  <br />
                  Friendship torn to tatters.
                  <br />A worldwide calamity. ​{" "}
                </p>
                <br />
                <p className="orange">
                  But what if we can help mankind answer this one question....
                </p>
              </div>
            </div>
            <div className="wrapper2">
              <p className="title-desc">
                Let us do the thinking for you.
                <br />
                Take the stress of deciding away and enjoy your meal
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
