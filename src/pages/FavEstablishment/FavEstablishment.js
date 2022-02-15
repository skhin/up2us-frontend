import React, { useEffect, useState } from "react";
import "./FavEstablishment.css";
import historyServ from "../../service/userSetting";
import Loader from "../../components/Loader/Loader";

const FavEstablishment = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const [isLoading, setIsLoading] = useState(true);
  const [favEstab, setFavEstab] = useState([]);

  // MAKING API CALL TO FETCH FAV ESTABLISHMENT
  const fetchFavEstab = async () => {
    try {
      const res = await historyServ.favEstab(user._id);
      setFavEstab(res);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchFavEstab();
  }, []);

  return (
    <div className="user_setting container">
      <div className="title">
        <h1>{user.userName} Profile - Favourite Establishment</h1>
      </div>
      <div className="locationWrap">
        {isLoading ? (
          <Loader />
        ) : (
          favEstab.map((item) => (
            <div
              key={1}
              xs={2}
              sm={4}
              md={6}
              lg={11}
              xl={4}
              className="location"
            >
              <h1>{item.loc}</h1>
              <p>
                ADDRESS: <span>{item.add}</span>
              </p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default FavEstablishment;
