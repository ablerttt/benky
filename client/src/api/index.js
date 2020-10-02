import axios from "axios";
const api = axios.create({
  // baseURL: "https://benkyapi.herokuapp.com/api",
  baseURL: "http://localhost:3000/api",
});

export const insertStudySet = (params) => api.post(`/set`, params);
export const getAllStudySets = (params) => api.get(`/setlist`, params);
export const checkTitleExists = (params) => api.get(`/existingset`, params);
export const getStudySetById = (id, params) => api.get(`/set/${id}`, params);

// export const checkValidId = (id, uid) =>
//   api.get(`/validset/${id}`, { uid: uid });
export const updateStudySetById = (id, params) => api.put(`/set/${id}`, params);
export const deleteStudySetById = (id, params) => api.delete(`/set/${id}`, params);

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
  // checkValidId,
  checkTitleExists,

  insertTestResult,
  getTestResults,
  getTestResultById,
  getTestResultTitles,
};

export default apis;
