import { STORE } from "../store.js";

function renderUsers() {
  const users = STORE.users;
  return `
    ${users.map(user => `
      <tr>
        <td>${users.indexOf(user) + 1}</td>
        <td>${user.name.first}</td>
        <td>${user.name.last}</td>
        <td>${user.dob.age}</td>
        <td>${user.gender === "female" ? "F" : "M"}</td>
        <td>${user.email}</td>
        <td>${user.nat}</td>
        <td> <img src=${user.picture.thumbnail} alt=${user.name.first}></td>
      </tr>`)}
      `
}

function render() {

  return `
    <h2>Tabla Informativa de Usuarios Jarvis SAC</h2>
    <table class="table">
      <thead>
        <tr>
          <th>Nº</th>
          <th>Nombre</th>
          <th>Apellido</th>
          <th>Edad</th>
          <th>Género</th>
          <th>Email</th>
          <th>Nacionalidad</th>
          <th>Foto</th>
        </tr>
      </thead>
      <tbody>
        ${renderUsers()}
      </tbody>
    </table>
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
