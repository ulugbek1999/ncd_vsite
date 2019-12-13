import axios from "axios";
import { AUTH_DOMAIN } from "~/settings/settings";
// import auth from "@nuxtjs/auth";

const emprClient = axios.create({
  baseURL: AUTH_DOMAIN,
  withCredentials: false,
  headers: {
    "Content-Type": "application/json"
  }
});

export default {
  getEmployees() {
    return emprClient.get("/api/v2/employees/list");
  },
  updateEmployerInformation(data, id) {
    return emprClient.put(`/api/v2/admin/employer/update/${id}`, data);
  }
};
