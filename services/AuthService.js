import axios from "axios";
import { AUTH_DOMAIN } from "~/settings/settings";

const authClient = axios.create({
  baseURL: AUTH_DOMAIN,
  withCredentials: false,
  headers: {
    "Content-Type": "multipart/form-data"
  }
});

const authJSON = axios.create({
  baseURL: AUTH_DOMAIN,
  withCredentials: false,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json"
  }
});

export default {
  registerEmployer(data) {
    return authClient.post(
      AUTH_DOMAIN + "/api/v2/ncd/register/employer/",
      data
    );
  },
  authenticateEmployer(data) {
    return authJSON.post(
      AUTH_DOMAIN + "/api/v2/ncd/authenticate/employer/",
      data
    );
  },
  getUserInformation(id) {
    return axios.get(AUTH_DOMAIN + "/api/v2/ncd/get/user/information/" + id, {
      params: {},
      headers: { Authorization: localStorage.getItem("auth._token.local") }
    });
  },
  registerEmployee(data) {
    return authClient.post(
      AUTH_DOMAIN + "/api/v2/ncd/register/employee/",
      data
    )
  }
};
