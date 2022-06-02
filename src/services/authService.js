import axios from "axios";
const API_URL = "https://localhost:5001/api/auth/";

const login = (username, password) => {

  localStorage.removeItem("user")
  localStorage.removeItem("token")
  return axios
    .post(API_URL + "login", {
      username,
      password
    })
    .then((response) => {
      if (response.data.user) {

        localStorage.setItem("user", JSON.stringify(response.data.user));
        localStorage.setItem("token", JSON.stringify(response.data.accessToken.token));
        localStorage.setItem("isLoggedIn", true);
        return response.data;
      }
      return response.data;
    });
};
const logout = () => {
  localStorage.removeItem("user");
  localStorage.removeItem("token");
  return axios.post(API_URL + "logout").then((response) => {
    return response.data;
  });
};
const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};
const AuthService = {
  login,
  logout,
  getCurrentUser,
}
export default AuthService;