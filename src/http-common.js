import axios from "axios";

export default axios.create({
  baseURL: "https://recipessaitynai.herokuapp.com/api/",
  headers: {
    "Content-type": "application/json"
  }
});
