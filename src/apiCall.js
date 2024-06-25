import axios from "axios";
import { getCookieValue } from "./cokkies";
import { local_host } from "./env";

// Function to handle 401 errors (e.g., redirect to login page)
function handle401Error() {
  // Implement your logic here, such as redirecting to a login page
  window.location.href = "/";
}

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
          response = await axios.get(apiUrl, header);
          break;
        case "POST":
          response = await axios.post(apiUrl, payload, authToken ? header : {});
          break;
        case "PUT":
          response = await axios.put(`${apiUrl}/${id}`, payload, header);
          break;
        case "DELETE":
          response = await axios.delete(`${apiUrl}/${id}`, header);
          break;
        default:
          throw new Error("Invalid method");
      }
      resolve(response.data);
    } catch (error) {
      // Extract status code and error message
      const status = error.response ? error.response.status : null;
      const message = error.response ? error.response.data : error.message;

      // Handle 401 Unauthorized error specifically
      if (status === 401) {
        handle401Error();
      }

      // Reject with an object containing status and message
      reject({ status, message });
    }
  });
}
