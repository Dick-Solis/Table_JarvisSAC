import { STORE } from "../store.js";

function render() {
  console.log(STORE.users);
  return `
    <h2>Hola Mundo</h2>
  `
}

const HomePage = {
  toString() {
    return render();
  },
  addListeners() {

  }
}

export default HomePage;
