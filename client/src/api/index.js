import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000/api",
});

export const insertStudySet = (title, cards) =>
  api.post(`/set`, { title: title, cards: cards });
export const getAllStudySets = () => api.get(`/setlist`);
export const getStudySetById = (id) => api.get(`/set/${id}`);
export const checkValidId = (id) => api.get(`/validset/${id}`);
export const updateStudySetById = (id, title, cards) =>
  api.put(`/set/${id}`, { title, cards });
export const deleteStudySetById = (id) => api.delete(`/set/${id}`);
export const checkTitleExists = (title) =>
  api.get(`/existingset`, { params: { title: title } });

const apis = {
  insertStudySet,
  getAllStudySets,
  updateStudySetById,
  deleteStudySetById,
  getStudySetById,
  checkValidId,
  checkTitleExists,
};

export default apis;
