import axios from "./axios";

function getRestaurant() {
  return axios.get("restaurant/getrestaurant");
}

const restServ = {
  getRestaurant,
};

export default restServ;
