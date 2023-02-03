import { STORE } from "../store.js";

function renderUsers() {
  const users = STORE.users;
  return `
    ${users.map(user => `
      <tr class="text-center">
        <td >${users.indexOf(user) + 1}</td>
        <td>${user.name.first}</td>
        <td>${user.name.last}</td>
        <td>${user.dob.age}</td>
        <td>${user.gender === "female" ? "F" : "M"}</td>
        <td>${user.email}</td>
        <td>${user.nat}</td>
        <td> <img class="image-icon" src=${user.picture.thumbnail} alt=${user.name.first}></td>
      </tr>`).join("")}
      `
}

function exportar (data, fileName) {
  const a = document.createElement("a");
  const contenido = data,
      csvFile = new Blob([contenido], {type: "text/csv"}),
      url = window.URL.createObjectURL(csvFile);
  a.href = url;
  a.download = fileName;
  a.click();
  window.URL.revokeObjectURL(url);
};

function lisstenExportCsv(){
  const buttonExport = document.getElementById("exportar");
  buttonExport.addEventListener("click",(event)=>{
    event.preventDefault();
    exportar(STORE.user_csv.join('\n'), "users.csv");
  });
}

function render() {
  return `
    <h2 class="title headin-lg flex justify-center mb-8">Tabla Informativa de Usuarios Jarvis S.A.C. </h2>
    <div class="flex justify-center mb-8">
      <button class="button" id="exportar">Descargar CSV</button>
    </div>
    <div class="container-table flex mb-8 content-lg">
      <table>
        <thead class="header-table">
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
    </div>
  `
}

const HomePage = {
  toString() {
    return render();
  },
  addListeners() {
    lisstenExportCsv();
  }
}

export default HomePage;
