import axios from "axios";

export default function apiCall({ method, apiUrl, payload, id }) {
  return new Promise(async (resolve, reject) => {
    try {
      let response;
      switch (method) {
        case "GET":
          response = await axios.get(apiUrl);
          break;
        case "POST":
          response = await axios.post(apiUrl, payload);
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
