import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID 6e8i3hy42Bv8eiiSzL8OMwQnU1V3ijXjgs1RPOMM0ew",
  },
});
