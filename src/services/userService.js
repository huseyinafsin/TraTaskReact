import axios from "axios";
const API_URL = "https://localhost:5001/api/profile/";
const getProfile = () => {
  return axios.get(API_URL);
};

const UserService = {
  getProfile
}
export default UserService;