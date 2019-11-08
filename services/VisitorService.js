import axios from "axios";
import { AUTH_DOMAIN } from "~/settings/settings";

const client = axios.create({
  baseURL: AUTH_DOMAIN,
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  }
});

export default {
  clientRequest(data) {
    return client.post("/api/v2/ncd/visitors/gsheet/", data);
  },
  mailingRequest(data) {
    return client.post("/api/v2/ncd/visitors/mailing-list/", data);
  }
};
