import apiFetch from "./api-fetch.js";

export async function getUsers() {
  return await apiFetch();
}
