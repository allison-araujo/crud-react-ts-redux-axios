import axios from "axios";

export default axios.create({
  baseURL: "https://localhost:3001/users",
  headers: {
    "Content-type": "application/json",
  },
});
