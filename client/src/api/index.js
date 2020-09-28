import axios from "axios";
const api = axios.create({
  // baseURL: "https://benkyapi.herokuapp.com/api",
  baseURL: "http://localhost:3000/api",
});

export const insertStudySet = (params) => api.post(`/set`, params);
export const getAllStudySets = (params) => api.get(`/setlist`, params);
export const getStudySetById = (id) => api.get(`/set/${id}`);
export const checkValidId = (id, uid) =>
  api.get(`/validset/${id}`, { uid: uid });
export const updateStudySetById = (id, title, cards) =>
  api.put(`/set/${id}`, { title, cards });
export const deleteStudySetById = (id) => api.delete(`/set/${id}`);
export const checkTitleExists = (params) => api.get(`/existingset`, params);

// test result api functions
export const insertTestResult = (id, title, date, questionSet) =>
  api.post(`/test`, {
    setId: id,
    title: title,
    dateTaken: date,
    questionSet: questionSet,
  });
export const getTestResults = () => api.get(`/testresults`);
export const getTestResultById = (id) => api.get(`/test/${id}`);
export const getTestResultTitles = () => api.get(`/testtitles`);

const apis = {
  insertStudySet,
  getAllStudySets,
  updateStudySetById,
  deleteStudySetById,
  getStudySetById,
  checkValidId,
  checkTitleExists,

  insertTestResult,
  getTestResults,
  getTestResultById,
  getTestResultTitles,
};

export default apis;
