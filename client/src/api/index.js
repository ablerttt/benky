import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000/api",
});

// study set api functions
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

// test result api functions
export const insertTestResult = (id, title, date, questionSet) =>
  api.post(`/test`, {
    setId: id,
    title: title,
    dateTaken: date,
    questionSet: questionSet,
  });
export const getTestResults = () => api.get(`/testresults`);
export const getTestResultById = (id) => api.get(`/test/:${id}`);

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
};

export default apis;
