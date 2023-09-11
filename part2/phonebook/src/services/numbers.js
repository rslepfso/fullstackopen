import axios from "axios";

const baseUrl = "http://localhost:3001/persons";

const getAll = () => {
  const request = axios.get(baseUrl);
  return request;
};

const createNum = (newEntry) => {
  const request = axios.post(baseUrl, newEntry);
  return request;
};

const deleteNum = (id) => {
  console.log(id);
  const request = axios.delete(`${baseUrl}/${id}`);
  return request;
};

const editNum = (id, newEntry) => {
  const request = axios.put(`${baseUrl}/${id}`, newEntry);
  return request;
};

export default { getAll, createNum, deleteNum, editNum };
