import axios from "axios";

export default axios.create({
  baseURL: "https://back-end-recipessite.herokuapp.com/api/",
  headers: {
    "Content-type": "application/json"
  }
});
