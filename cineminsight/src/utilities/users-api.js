import { sendRequest } from "./sendRequest";
const BASE_URL = "/api/user";

export const signUp = async (userData) => {
  return sendRequest(BASE_URL, "POST", userData);
};

export const login = async (credentials) => {
  return sendRequest(`${BASE_URL}/login`, "POST", credentials);
};

export function checkToken() {
  return sendRequest(`${BASE_URL}/check-token`);
}
