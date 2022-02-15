import React, { useState } from "react";
import "./Time.css";
import { Button, message } from "antd";
import moment from "moment";

const Time = ({ setQNumber, setEstablishment, establishment }) => {
  const [activeTime, setActiveTime] = useState();
  const [time, setTime] = useState("");

  // MOVE TO NEXT QUESTION
  const handleNextQuestion = () => {
    console.log(activeTime);
    if (activeTime === 1) {
      setQNumber(4);
      setEstablishment({
        ...establishment,
        time: moment().add(1, "hours").format("DD MM YYYY, h:mm:ss a"),
      });
    } else if (activeTime === 2 && time) {
      setQNumber(4);
    } else {
      message.warning("Please select time to procceed!");
    }
  };

  //SELECT TIME OPTION
  const handleOnchange = (e) => {
    setTime(e.target.value);
    setEstablishment({
      ...establishment,
      time: moment(e.target.value).format("Do MMM YYYY, h:mm:ss a"),
    });
  };

  return (
    <div className="qus_time container">
      <h1>Question 3 : Time</h1>

      <div className="quesTime_bx">
        <h1>Do you want to eat now or later ?</h1>

        <div className="time_bx">
          <div className="now" onClick={() => setActiveTime(1)}>
            <h1
              style={{
                fontSize: `${activeTime === 1 ? "22px" : "30px"}`,
                color: `${activeTime === 1 ? "#2ecc71" : ""}`,
              }}
            >
              Now
            </h1>
          </div>

          <div>
            <div className="later" onClick={() => setActiveTime(2)}>
              <h1
                style={{
                  fontSize: `${activeTime === 2 ? "65px" : "45px"}`,
                  color: `${activeTime === 2 ? "#2ecc71" : ""}`,
                }}
              >
                Later
              </h1>
            </div>
            {activeTime === 2 ? (
              <form>
                <br />
                <h2>Select Date / Time </h2>
                <input
                  type="datetime-local"
                  onChange={handleOnchange}
                  id="latertime"
                  name="latertime"
                  min="<?= date('Y-m-d'); ?>"
                />
              </form>
            ) : (
              ""
            )}
          </div>
        </div>

        <br />
        <div className="price_btn">
          <Button
            className="time_pri"
            onClick={() => setQNumber(2)}
            type="primary"
            size="large"
          >
            Back
          </Button>
          <Button
            className="time_pri"
            onClick={handleNextQuestion}
            type="primary"
            size="large"
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Time;
