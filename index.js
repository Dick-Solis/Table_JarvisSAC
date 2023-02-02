import DOMHandler from "./scripts/dom-handler.js";
import HomePage from "./scripts/pages/home-page.js";
import { getUsers } from "./scripts/services/users.js";
import { STORE } from "./scripts/store.js";


async function init() {
  try {
    // prueba de la data que trae apifecth
    const users = await getUsers();
    STORE.users = users.results;
    DOMHandler.load(HomePage);
  } catch (error) {
    console.error(error);
  }
}
init();
