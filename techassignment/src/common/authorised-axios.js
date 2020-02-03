import axios from "axios";

const AuthorisedClient = () => {
  const defaultOptions = {
    baseURL: "http://localhost:7071/api",
    method: "get",
    headers: {
      "Content-Type": "application/json"
      //   "X-API-KEY": process.env.GATSBY_RIGHTS_ISSUE_API_KEY
    }
  };

  // Create instance
  let instance = axios.create(defaultOptions);

  return instance;
};

export default AuthorisedClient();
