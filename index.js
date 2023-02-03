import DOMHandler from "./scripts/dom-handler.js";
import { jsonToCsv } from "./scripts/parser_csv.js";
import HomePage from "./scripts/pages/home-page.js";
import { dataJsonOrdered } from "./scripts/services/conver_json_ordered.js";
import { orderByUsers } from "./scripts/services/users.js";
import { STORE } from "./scripts/store.js";

async function init() {
  try {
    STORE.users = await orderByUsers();
    DOMHandler.load(HomePage);
    STORE.user_json = await dataJsonOrdered();
    STORE.user_csv = jsonToCsv(STORE.user_json);
  } catch (error) {
    console.error(error);
  }
}
init();
