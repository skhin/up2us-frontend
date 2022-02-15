import axios from "./axios";

function signup(signupInfo) {
  return axios.post("user/signup", signupInfo);
}

function signin(signinInfo) {
  return axios.post("user/signin", signinInfo);
}

const authServ = {
  signup,
  signin,
};

export default authServ;
