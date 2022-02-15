import React, { useEffect, useState } from "react";
import "./DietRestriction.css";
import pic1 from "../../assets/images/dp/pic1.jpg";
import pic2 from "../../assets/images/dp/pic2.jpg";
import pic3 from "../../assets/images/dp/pic3.jpg";
import pic4 from "../../assets/images/dp/pic4.jpg";
import pic5 from "../../assets/images/dp/pic5.jpg";
import pic6 from "../../assets/images/dp/pic6.jpg";
import historyServ from "../../service/userSetting";
import Loader from "../../components/Loader/Loader";
import { Button, Checkbox, message } from "antd";
import { useHistory } from "react-router-dom";

const dietaryList = [
  {
    id: "1",
    name: "ORGANIC",
    img: pic6,
  },
  {
    id: "2",
    name: "SEAFOOD",
    img: pic5,
  },
  {
    id: "3",
    name: "KOSHER",
    img: pic3,
  },
  {
    id: "4",
    name: "HALAL",
    img: pic1,
  },
  {
    id: "5",
    name: "VEGETARIAN",
    img: pic2,
  },
  {
    id: "6",
    name: "GLUTEN FREE",
    img: pic4,
  },
];

const DietRestriction = () => {
  const [option, setOption] = useState([]);
  const [itemOption, setItemOption] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [loading, setLoading] = useState(true);
  const history = useHistory();
  const user = JSON.parse(localStorage.getItem("user"));

  const onChange = (e) => {
    if (e.target.checked) {
      setOption((prevail) => {
        return [
          ...prevail,
          {
            itemId: e.target.value,
            dietName: dietaryList.find((item) => item.id === e.target.value)
              .name,
          },
        ];
      });
    } else {
      setOption([...option.filter((item) => item.itemId !== e.target.value)]);
    }
  };

  const handleSave = async () => {
    const ids = option.map((o) => o.itemId);
    const filtered = option.filter(
      ({ itemId }, index) => !ids.includes(itemId, index + 1)
    );
    setIsLoading(true);

    try {
      await historyServ.saveDietRest({ userId: user._id, option: filtered });
      setTimeout(() => history.push("/favcuisine"), 1000);
    } catch (error) {
      console.log(error);
    } finally {
      fetchOption();
      message.success("Your Dietary Options have been saved");
    }
  };

  const fetchOption = async () => {
    try {
      const userData = JSON.parse(localStorage.getItem("user"));
      const res = await historyServ.getOption(userData._id);
      res.map((item) =>
        setOption((prevail) => {
          return [...prevail, { itemId: item.itemId, dietName: item.dietName }];
        })
      );

      let merged = [];
      for (let i = 0; i < dietaryList.length; i++) {
        merged.push({
          ...dietaryList[i],
          ...res.find((itemInner) => itemInner.itemId === dietaryList[i].id),
        });
      }
      setItemOption(merged);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchOption();
  }, []);

  return (
    <div className="dietaryRestriction">
      <div className="title">
        <h1>{user.userName} Profile - DIETARY Restriction </h1>
      </div>

      <div className="dietHeader">
        <h1>Dietary Preference</h1>
        <p>Select from the options below your list of dietary preferences</p>
      </div>

      {loading ? (
        <Loader />
      ) : (
        <>
          <div className="dietList">
            {itemOption.map((item) => (
              <div key={item.id} className="prefCard">
                <img src={item.img} alt="pic1" />
                <h1>
                  <Checkbox
                    defaultChecked={item?.itemId ? true : false}
                    onChange={onChange}
                    value={item.id}
                  >
                    {item.name}
                  </Checkbox>
                </h1>
              </div>
            ))}
          </div>
          <div style={{ textAlign: "center" }}>
            <Button
              className="diet_btn"
              size="large"
              type="primary"
              loading={isLoading}
              onClick={handleSave}
            >
              Next
            </Button>
          </div>
        </>
      )}
    </div>
  );
};

export default DietRestriction;
