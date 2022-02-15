import React, { useState, useEffect } from "react";
import "./NonFavCuisine.css";
import { Checkbox, message, Button } from "antd";
import historyServ from "../../service/userSetting";
import pic1 from "../../assets/images/nfc/pic1.jpg";
import pic2 from "../../assets/images/nfc/pic2.jpg";
import pic3 from "../../assets/images/nfc/pic3.jpg";
import pic4 from "../../assets/images/nfc/pic4.jpg";
import pic5 from "../../assets/images/nfc/pic5.jpg";
import pic6 from "../../assets/images/nfc/pic6.jpg";
import pic7 from "../../assets/images/nfc/pic7.jpg";
import pic8 from "../../assets/images/nfc/pic8.jpg";
import pic9 from "../../assets/images/nfc/pic9.jpg";
import pic10 from "../../assets/images/nfc/pic10.jpg";
import pic11 from "../../assets/images/nfc/pic11.jpg";
import pic12 from "../../assets/images/nfc/pic12.jpg";
import pic13 from "../../assets/images/nfc/pic13.jpg";
import pic14 from "../../assets/images/nfc/pic14.jpg";
import pic15 from "../../assets/images/nfc/pic15.jpg";
import pic16 from "../../assets/images/nfc/pic16.jpg";
import pic17 from "../../assets/images/nfc/pic17.jpg";
import pic18 from "../../assets/images/nfc/pic18.jpg";
import pic19 from "../../assets/images/nfc/pic19.jpg";
import pic20 from "../../assets/images/nfc/pic20.jpg";
import pic21 from "../../assets/images/nfc/pic21.jpg";
import pic22 from "../../assets/images/nfc/pic22.jpg";
import pic23 from "../../assets/images/nfc/pic23.jpg";
import pic24 from "../../assets/images/nfc/pic24.jpg";
import { useHistory } from "react-router-dom";

const nonFavCuisineData = [
  {
    id: "1",
    name: "CARRIBEAN",
    img: pic1,
  },
  {
    id: "2",
    name: "BRITISH",
    img: pic2,
  },
  {
    id: "3",
    name: "FUSION",
    img: pic3,
  },
  {
    id: "4",
    name: "LATIN",
    img: pic5,
  },
  {
    id: "5",
    name: "THAI",
    img: pic4,
  },
  {
    id: "6",
    name: "INDIAN",
    img: pic6,
  },
  {
    id: "7",
    name: "AMERICAN",
    img: pic7,
  },
  {
    id: "8",
    name: "ASIAN",
    img: pic8,
  },
  {
    id: "9",
    name: "BRAZILIAN",
    img: pic9,
  },
  {
    id: "10",
    name: "CHINESE",
    img: pic10,
  },
  {
    id: "11",
    name: "EUROPEAN",
    img: pic11,
  },
  {
    id: "12",
    name: "FILIPINO",
    img: pic12,
  },
  {
    id: "13",
    name: "FRENCH",
    img: pic13,
  },
  {
    id: "14",
    name: "GREEK",
    img: pic14,
  },
  {
    id: "15",
    name: "INDONESIAN",
    img: pic15,
  },
  {
    id: "16",
    name: "ITALIAN",
    img: pic16,
  },
  {
    id: "17",
    name: "JAPANESE",
    img: pic17,
  },
  {
    id: "18",
    name: "KOREAN",
    img: pic18,
  },
  {
    id: "19",
    name: "LOCAL",
    img: pic19,
  },
  {
    id: "20",
    name: "MALAY",
    img: pic20,
  },
  {
    id: "21",
    name: "MEXICAN",
    img: pic21,
  },
  {
    id: "22",
    name: "MIDDLE EASTERN",
    img: pic22,
  },
  {
    id: "23",
    name: "PERANAKAN",
    img: pic23,
  },
  {
    id: "24",
    name: "SOUTH EAST ASIAN",
    img: pic24,
  },
];

const NonFavCuisine = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const [option, setOption] = useState([]);
  const [itemOption, setItemOption] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [loading, setLoading] = useState(true);
  const history = useHistory();

  const onChange = (e) => {
    const id = e.target.value;
    if (e.target.checked) {
      const cuisine = nonFavCuisineData.filter((item) => item.id === id);
      setOption((prev) => {
        return [
          ...prev,
          {
            itemId: id,
            nonFav: cuisine.length == 1 ? cuisine[0].name : null,
          },
        ];
      });
    } else {
      setOption((prev) => {
        return prev.filter((item) => item.itemId !== id);
      });
    }
  };

  const handleSave = async () => {
    console.log(option);
    if (option.length === 0) {
      message.warning("Please select at least one option");
      return false;
    }

    const ids = option.map((o) => o.itemId);
    const filtered = option.filter(
      ({ itemId }, index) => !ids.includes(itemId, index + 1)
    );

    setIsLoading(true);

    try {
      await historyServ.saveNonFavCuisine({
        userId: user._id,
        option: filtered,
      });
      setTimeout(() => history.push("/question"), 1000);
    } catch (error) {
      console.log(error);
    } finally {
      fetchOption();
      message.success("Your Non Favourite Option/s has been saved");
    }
  };

  const fetchOption = async () => {
    try {
      const res = await historyServ.getNonFavCuisine(user._id);

      res.map((item) =>
        setOption((prevail) => {
          return [
            ...prevail,
            { itemId: item.itemId, nonFavCuisine: item.nonFavCuisine },
          ];
        })
      );

      let merged = [];
      for (let i = 0; i < nonFavCuisineData.length; i++) {
        merged.push({
          ...nonFavCuisineData[i],
          ...res.find(
            (itemInner) => itemInner.itemId === nonFavCuisineData[i].id
          ),
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
        <h1>{user.userName} Profile - Non-Favourite Cuisines </h1>
      </div>

      <div className="dietHeader">
        <h1>NON-FAVOURITE CUISINES</h1>
        <p>
          Select from the options below your list of NON-FAVOURITE CUISINES.
        </p>
      </div>

      <div className="dietList">
        {itemOption.map((item) => (
          <div key={item.id} className="prefCard">
            <img src={item.img} alt="pic1" />
            <h1>
              <Checkbox
                defaultChecked={item?.itemId ? true : false}
                onChange={onChange}
                value={item.id}
                className="checkbox"
              >
                {item.name}
              </Checkbox>
            </h1>
          </div>
        ))}
      </div>
      <div style={{ textAlign: "center" }}>
        <Button
          size="large"
          type="primary"
          loading={isLoading}
          onClick={handleSave}
          className="cuis_btn"
        >
          Next
        </Button>
      </div>
    </div>
  );
};

export default NonFavCuisine;
