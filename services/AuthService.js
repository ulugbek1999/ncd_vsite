import axios from "axios";
import { AUTH_DOMAIN } from "~/settings/settings";
import { eventBus } from "~/services/EventBus";

const authClient = axios.create({
  baseURL: AUTH_DOMAIN,
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  }
});

export default {
  registerPartner(data) {
    authClient
      .post(AUTH_DOMAIN + "/api/employers/register/", data)
      .then(response => {
        if (response.status == 201) {
          console.log("success");
        }
      })
      .catch(error => {
        console.log(error);
      })
      .finally(() => {
        eventBus.$emit("loading", false);
      });
  }
};
