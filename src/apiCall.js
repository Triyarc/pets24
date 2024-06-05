import axios from "axios";
import { getCookieValue } from "./cokkies";
import { local_host } from "./env";

const authToken = getCookieValue("auth_token");

const header = {
  headers: {
    Authorization: "Bearer " + authToken,
  },
};

export default function apiCall({ method, apiUrl, payload, id }) {
  return new Promise(async (resolve, reject) => {
    try {
      let response;
      switch (method) {
        case "GET":
          response = await axios.get(apiUrl);
          break;
        case "POST":
          if (authToken) {
            response = await axios.post(apiUrl, payload, header);
          } else {
            response = await axios.post(apiUrl, payload);
          }
          break;
        case "PUT":
          response = await axios.put(`${apiUrl}/${id}`, payload);
          break;
        case "DELETE":
          response = await axios.delete(`${apiUrl}/${id}`);
          break;
        default:
          throw new Error("Invalid method");
      }
      resolve(response.data);
    } catch (error) {
      reject(error);
    }
  });
}
