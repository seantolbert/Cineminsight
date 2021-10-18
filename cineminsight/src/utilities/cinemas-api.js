import { sendRequest } from "./sendRequest";
const BASE_URL = "/api/cinemas";

export function getAll() {
  return sendRequest(BASE_URL);
}

export function create(cinema) {
  return sendRequest(BASE_URL, "POST", cinema);
}

export function update(cinema) {
  return sendRequest(`${BASE_URL}/${cinema._id}`, "PUT", cinema);
}

export function deleteOne(id) {
  return sendRequest(`${BASE_URL}/${id}`, "DELETE");
}
