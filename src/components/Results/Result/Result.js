import React, { useEffect, useState } from "react";
import "./Result.css";
import { Button } from "antd";
import historyServ from "../../../service/userSetting";
import { useHistory } from "react-router-dom";
import { restaurent } from "../../../restaurant/restaurant";

const Result = ({ restaurant, setResult, quesAns }) => {
  const [restaurantDetail, setRestaurantDetail] = useState([]);
  const history = useHistory();

  const fetchOption = async () => {
    const user = JSON.parse(localStorage.getItem("user"));
    try {
      const favCuisine = await historyServ.getFavCuisine(user._id);
      // const dietRest = await historyServ.getOption(user._id);
      // const nonFavCuisine = await historyServ.getNonFavCuisine(user._id);

      // FILTER RESULTS BASED ON USER SELECTION IN THE DIETARY PREFERENCES

      // if (dietRest.length === 0) {
      //   // console.log('no diet restriction);
      //   console.log(dietRest);
      const filterbyDietRest = restaurent.filter(
        (item) => item.dietaryRestrictions.length === 0
      );
      const filterByFavCuisine = filterbyDietRest.filter((item) =>
        item.cuisine.some((data) =>
          favCuisine.some((favC) => favC.favCuisine === data)
        )
      );

      const filterByOcc = filterByFavCuisine.filter((item) =>
        item.occasion.some((occ) => occ === quesAns.occasion)
      );
      console.log(filterByOcc);

      const filterByPrice = filterByOcc.filter(
        (item) => item.price === quesAns.price
      );
      console.log(filterByPrice);
      setRestaurantDetail(filterByPrice);
      // } else if (dietRest.length > 0) {
      //   console.log("have diet restiction");
      //   const filterbyDietRest = restaurent.filter((item) =>
      //     item.dietaryRestrictions.some((data) =>
      //       dietRest.some((favC) => favC.dietName === data)
      //     )
      //   );
      //   const filterByFavCuisine = filterbyDietRest.filter((item) =>
      //     item.cuisine.some((data) =>
      //       favCuisine.some((favC) => favC.favCuisine === data)
      //     )
      //   );

      //   const filterByOcc = filterByFavCuisine.filter((item) =>
      //     item.occasion.some((occ) => occ === quesAns.occasion)
      //   );
      //   // console.log(filterByOcc);

      //   const filterByPrice = filterByOcc.filter(
      //     (item) => item.price === quesAns.price
      //   );
      //   // console.log(filterByPrice);

      //   setRestaurantDetail(filterByPrice);
      // }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchOption();
  }, []);

  // MAKING API CALL TO ESTABLISH RESTAURANT
  const handleEstablishment = async () => {
    const user = JSON.parse(localStorage.getItem("user"));
    try {
      await historyServ.addHistory({
        userId: user._id,
        restaurants: {
          restId: restaurantDetail[0]?.id,
          name: restaurantDetail[0]?.name,
          address: restaurantDetail[0]?.address,
        },
      });
    } catch (error) {
      console.log(error);
    } finally {
      setResult(2);
    }
  };

  return (
    <div className="result_page container">
      <div className="heading">
        <h1>Your Result</h1>
        <div className="review">
          <p> Reviews from Visitors</p>
          <span>
            {restaurant.review ? restaurant.review : "No reviews at the moment"}
          </span>
        </div>
      </div>

      <div className="result_title">
        <h1>Result</h1>
      </div>

      {restaurantDetail.length === 0 ? (
        <p style={{ textAlign: "center" }}>
          Sorry. No establishment found. Please refine your selection!{" "}
          <a className="try" onClick={() => history.push("/question")}>
            Try again?
          </a>
        </p>
      ) : (
        <div className="res_container">
          <div>
            <p className="detail">{restaurantDetail[0]?.name}</p>
            <p className="detail">{restaurantDetail[0]?.address}</p>
            <p>
              <strong>Time: </strong>{" "}
              <span className="time">{quesAns.time}</span>
            </p>
            <p>
              <strong>Total pax: </strong>{" "}
              <span className="time">{quesAns.totalPax}</span>
            </p>
          </div>

          <div className="res_btn">
            <Button
              className="res_pri"
              onClick={handleEstablishment}
              type="primary"
              size="large"
            >
              Select this <br /> establishment
            </Button>
            <Button
              className="res_pri"
              onClick={() => history.push("/question")}
              type="primary"
              size="large"
            >
              Restart to find a new <br /> establishment
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};
export default Result;
