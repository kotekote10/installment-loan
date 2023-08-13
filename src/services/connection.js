import axios from "axios";
const baseUrl = "/api/data";

const getAll = () => {
  const request = axios.get(baseUrl);
  return request.then((response) => response.data);
};

const submitData = (newObject) => {
  const request = axios.post(baseUrl, newObject);
  return request.then((response) => response.data);
};

export default { getAll, submitData };
