import { BASE_URI } from "../config.js";

export default async function apiFetch({ method, headers, body } = {}) {
  const config = {
    method: method || "GET",
    headers: headers,
    body: body ? JSON.stringify(body) : null,
  };

  const response = await fetch(BASE_URI, config);
  let data;
  try {
    data = await response.json();
  } catch (error) {
    data = response.statusText;
  }
  return data;
};
