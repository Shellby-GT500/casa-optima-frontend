import api from "./api";

export const registerUser = (data) => api.post("/registration/register", data);
