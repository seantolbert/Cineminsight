import { sendRequest } from "./sendRequest";
const BASE_URL = "/api/insights";

export function getAll() {
  return sendRequest(`${BASE_URL}`);
}

export function create(insight) {
  return sendRequest(`${BASE_URL}`, "POST", insight);
}

export function update(insight) {
  return sendRequest(`${BASE_URL}/${insight._id}`, "PUT", insight);
}

export function deleteOne(insightId) {
  return sendRequest(`${BASE_URL}/${insightId}`, "DELETE");
}
