import React, { useEffect, useState } from "react";
import Reservation from "../../components/Results/Reservation/Reservation";
import Result from "../../components/Results/Result/Result";
import restServ from "../../service/restaurant";
import Loader from "../../components/Loader/Loader";
import { useLocation } from "react-router-dom";

const ResultPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [restaurant, setRestaurant] = useState("");
  const [result, setResult] = useState(1);

  const occasion = new URLSearchParams(useLocation().search).get("occasion");
  const price = new URLSearchParams(useLocation().search).get("price");
  const totalPax = new URLSearchParams(useLocation().search).get("totalPax");
  const time = new URLSearchParams(useLocation().search).get("time");

  const quesAns = { occasion, price, totalPax, time };

  // MAKING API CALL TO FETCH RESTAURANT DATA
  useEffect(() => {
    const fetchRestaurant = async () => {
      try {
        const res = await restServ.getRestaurant();
        setRestaurant(res);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchRestaurant();
  }, []);

  return (
    <div>
      {result === 1 ? (
        isLoading ? (
          <Loader />
        ) : (
          <Result
            restaurant={restaurant}
            quesAns={quesAns}
            setResult={setResult}
          />
        )
      ) : result === 2 ? (
        <Reservation restaurant={restaurant} quesAns={quesAns} />
      ) : (
        ""
      )}
    </div>
  );
};

export default ResultPage;
