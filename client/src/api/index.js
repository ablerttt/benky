import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000/api",
});

export const insertStudySet = (title, cards) =>
  api.post(`/set`, { title: title, cards: cards });
export const getAllStudySets = () => api.get(`/setlist`);
export const getStudySetById = (id) => api.get(`/set/${id}`);

export const updateStudySetById = (id, payload) =>
  api.put(`/set/${id}`, payload);
export const deleteStudySetById = (id) => api.delete(`/set/${id}`);


const apis = {
  insertStudySet,
  getAllStudySets,
  updateStudySetById,
  deleteStudySetById,
  getStudySetById,
};

export default apis;
