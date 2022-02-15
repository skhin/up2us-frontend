import React, { useEffect, useState } from "react";
import "./Blacklist.css";
import historyServ from "../../service/userSetting";
import Loader from "../../components/Loader/Loader";

const Blacklist = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const [isLoading, setIsLoading] = useState(true);
  const [favEstab, setFavEstab] = useState([]);

  // MAKING API CALL TO FETCH BLACKLIST ESTABLISHMENTS
  const fetchBlacklist = async () => {
    try {
      const res = await historyServ.getBlacklist(user._id);
      setFavEstab(res);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchBlacklist();
  }, []);

  return (
    <div className="user_setting container">
      <div className="title">
        <h1>{user.userName} Profile - Blacklist Establishment</h1>
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
                ADDRESS: <span className="add">{item.add}</span>
              </p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Blacklist;
