import axios from "./axios";

function addHistory(data) {
  return axios.post("history/addhistory", data);
}

function removeFromHistory(data) {
  return axios.post("history/removefromhistory", data);
}

function getHistory(id) {
  return axios.get(`history/gethistory/${id}`);
}

function addReview(data) {
  return axios.post("history/addreview", data);
}

function saveDietRest(data) {
  return axios.post("user/dietrestriction", data);
}

function getOption(id) {
  return axios.get(`user/getoption/${id}`);
}

function saveFavCuisine(data) {
  return axios.post("user/favcuisine", data);
}

function getFavCuisine(id) {
  return axios.get(`user/getfavcuisine/${id}`);
}

function saveNonFavCuisine(data) {
  return axios.post("user/nonfavcuisine", data);
}

function getNonFavCuisine(id) {
  return axios.get(`user/getnonfavcuisine/${id}`);
}

function favLocation(data) {
  return axios.post("user/favlocation", data);
}

function favEstab(id) {
  return axios.get(`user/favestab${id}`);
}

function blacklist(data) {
  return axios.post("user/blacklist", data);
}

function getBlacklist(id) {
  return axios.get(`user/getblacklist/${id}`);
}

const historyServ = {
  addHistory,
  removeFromHistory,
  getHistory,
  addReview,
  saveDietRest,
  getOption,
  saveFavCuisine,
  getFavCuisine,
  saveNonFavCuisine,
  getNonFavCuisine,
  favEstab,
  favLocation,
  blacklist,
  getBlacklist,
};

export default historyServ;
