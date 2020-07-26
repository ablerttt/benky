import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000/api",
});

export const insertStudySet = (title, cards) => {
  return api
    .post(`/set`, { title: title, cards: cards })
    .then((res) => {
      console.log(res);
      window.alert(`response received: ${res}`);
    })
    .catch((err) => {
      console.error(err);
      window.alert(`error received: ${err}`);
    });
};

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
