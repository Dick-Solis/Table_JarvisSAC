import apiFetch from "./api-fetch.js";

async function getUsers() {
  return await apiFetch();
}

export async function orderByUsers() {
  const users = await getUsers();
  const orderUsers = users.results.sort(function(a, b) {
    if (a.dob.age > b.dob.age) {
      return 1;
    }
    if (a.dob.age < b.dob.age) {
      return -1;
    }
    // a must be equal to b
    return 0;
  });;

  return orderUsers;
}
