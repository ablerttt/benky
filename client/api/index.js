import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000/api",
});

export const insertStudySet = (payload) => api.post(`/set`, payload);
export const getAllStudySets = () => api.get(`/sets`);
export const updateStudySetById = (id, payload) =>
  api.put(`/set/${id}`, payload);
export const deleteStudySetById = (id) => api.delete(`/set/${id}`);
export const getStudySetById = (id) => api.get(`/set/${id}`);

const apis = {
  insertStudySet,
  getAllStudySets,
  updateStudySetById,
  deleteStudySetById,
  getStudySetById,
};

export default apis;
