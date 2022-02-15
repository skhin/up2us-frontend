import React, { useState } from "react";
import "./Occasion.css";
import { Button, message } from "antd";
import occ1 from "../../../assets/images/occ1.png";
import occ2 from "../../../assets/images/occ2.png";
import occ3 from "../../../assets/images/occ3.png";
import occ4 from "../../../assets/images/occ4.png";

// OCCASION DATA
const occasionData = [
  {
    id: 1,
    img: occ1,
    title: "Family / Kid-Friendly",
    val: "Family",
  },
  {
    id: 2,
    img: occ2,
    title: "Friendly Get-Together",
    val: "Friends",
  },
  {
    id: 3,
    img: occ3,
    title: "Romantic / Date Night",
    val: "Romantic",
  },
  {
    id: 4,
    img: occ4,
    title: "Work / Colleagues",
    val: "Work",
  },
];

const Occasion = ({ setQNumber, establishment, setEstablishment }) => {
  const [activeItem, setActiveItem] = useState();

  // SELECTING OCCASION OPTIONS
  const handleOption = (item) => {
    setActiveItem(item.id);
    setEstablishment({ ...establishment, occasion: item.val });
  };

  // MOVE TO NEXT QUESTION
  const handleNextQuestion = () => {
    console.log(activeItem);
    if (activeItem) {
      setQNumber(2);
    } else {
      message.warning("Please select an occasion to proceed!");
    }
  };

  return (
    <div className="question_one container">
      <h1> Question 1: OCCASION</h1>

      <div className="occasion_bx">
        <h1>What's the Occasion?</h1>

        {occasionData.map((item) => (
          <div
            key={item.id}
            className="occasion"
            onClick={() => handleOption(item)}
            style={{
              width: `${activeItem === item.id ? "590px" : "600px"}`,
              color: `${activeItem === item.id ? "#2ecc71" : ""}`,
            }}
          >
            <img
              width={`${activeItem === item.id ? "390px" : "217px"}`}
              height="100px"
              src={item.img}
              alt="occ1"
            />
            <div>
              <h2>{item.title}</h2>
              <br />
              <h4>Read More</h4>
            </div>
          </div>
        ))}
        <br />
        <Button
          className="occ_btn"
          onClick={handleNextQuestion}
          type="primary"
          size="large"
        >
          Next
        </Button>
      </div>
    </div>
  );
};
export default Occasion;
