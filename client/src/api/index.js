import axios from "axios";
const api = axios.create({
  // baseURL: "https://benkyapi.herokuapp.com/api",
  baseURL: "http://localhost:3000/api",
});

export const insertStudySet = (params) => api.post(`/set`, params);
export const getAllStudySets = (params) => api.get(`/setlist`, params);
export const checkTitleExists = (params) => api.get(`/existingset`, params);
export const getStudySetById = (id, params) => api.get(`/set/${id}`, params);

export const checkValidId = (id, params) => api.get(`/validset/${id}`, params);
export const updateStudySetById = (id, params) => api.put(`/set/${id}`, params);
export const deleteStudySetById = (id, params) =>
  api.delete(`/set/${id}`, params);

// test result api functions
export const insertTestResult = (params) => api.post(`/test`, params);
export const getTestResults = (params) => api.get(`/testresults`, params);
export const getTestResultById = (id, params) => api.get(`/test/${id}`, params);
export const getTestResultTitles = (params) => api.get(`/testtitles`, params);

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
