import axios from "axios";

const AuthorisedClient = () => {
  const defaultOptions = {
    baseURL: "http://localhost:7071/api",
    method: "get, post",

    headers: {
      "Access-Control-Allow-Origin":
        "*, http://localhost:7071, http://localhost:7071/api",
      "Content-Type": "application/json",
      "Access-Control-Allow-Methods": "GET, POST, PATCH, PUT, DELETE, OPTIONS",
      "Access-Control-Allow-Headers":
        "Origin, Content-Type, X-Auth-Token, X-Requested-With, Accept, Authorization"

      //   "X-API-KEY": process.env.GATSBY_RIGHTS_ISSUE_API_KEY
    }
  };

  // Create instance
  let instance = axios.create(defaultOptions);

  return instance;
};

export default AuthorisedClient();
