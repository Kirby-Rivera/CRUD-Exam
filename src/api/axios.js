import axios from "axios";

const BASE_URL = "https://react-testing-server.onrender.com/api/v1";

export default axios.create({
  baseURL: BASE_URL,
});
