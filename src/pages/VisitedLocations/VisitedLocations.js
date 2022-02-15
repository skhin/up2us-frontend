import React, { useEffect, useState } from "react";
import "./VisitedLocations.css";
import { Input, Button, message } from "antd";
import historyServ from "../../service/userSetting";
import Loader from "../../components/Loader/Loader";
import { HeartFilled, CloseOutlined } from "@ant-design/icons";

const VisitedLocations = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const [userHistory, setUserHistory] = useState([]);
  const [review, setReview] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  // MAKING API CALL TO GET VISITED LOCATION HISTORY
  useEffect(() => {
    const fetchHistory = async () => {
      try {
        console.log("hello");
        console.log(user._id);
        const res = await historyServ.getHistory(user._id);
        console.log(res);
        setUserHistory(res);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchHistory();
  }, [user._id]);

  // MAKING API CALL TO SUBMIT REVIEW
  const submitReview = async (restId) => {
    if (!review) {
      message.success("Please enter your review!");
      return false;
    }
    try {
      await historyServ.addReview({
        restId,
        review,
      });
      message.success("Your review has been added");
    } catch (error) {
      console.log(error);
    }
  };

  // MAKING API CALL TO ADD TO FAV ESTABLISHMENT
  const addToFavLocation = async (item) => {
    try {
      await historyServ.favLocation({
        userId: user._id,
        favLoc: {
          loc: item.name,
          add: item.address,
        },
      });
      message.success("Added to Favourite Establishment");
    } catch (error) {
      console.log(error);
    }
  };

  // MAKING API CALL TO ADD TO BLACKLIST
  const addToBlacklist = async (item) => {
    try {
      await historyServ.blacklist({
        userId: user._id,
        favLoc: {
          loc: item.name,
          add: item.address,
        },
      });
      message.success("Added to Blacklist");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="user_setting container">
      <div className="title">
        <h1>{user.userName} Profile - Visited Locations</h1>
      </div>
      <div className="locationWrap">
        {isLoading ? (
          <Loader />
        ) : (
          userHistory.reverse().map((item) => (
            <div key={item.restId} className="location site-card-wrapper">
              <h1 className="rest_name">{item.name}</h1>
              <br />
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  fontSize: "35px",
                }}
                className="icons"
              >
                <div
                  style={{ color: "red", cursor: "pointer" }}
                  onClick={() => addToFavLocation(item)}
                >
                  <HeartFilled className="heart" />
                </div>
                <div
                  style={{ color: "black", cursor: "pointer" }}
                  onClick={() => addToBlacklist(item)}
                >
                  <CloseOutlined />
                </div>
              </div>
              <br />
              <Input.TextArea
                onChange={(e) => setReview(e.target.value)}
                placeholder="Add Review"
                className="review"
              />
              <br />
              <br />
              <Button
                type="primary"
                onClick={() => submitReview(item.restId)}
                className="submit_review"
              >
                Submit
              </Button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};
export default VisitedLocations;
