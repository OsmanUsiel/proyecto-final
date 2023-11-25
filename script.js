// Simulación de datos
const facultades = ["Ciencias", "Humanidades", "Ingeniería"];
const docentes = [
    { nombre: "Juan Pérez", facultad: "Ciencias" },
    { nombre: "María García", facultad: "Humanidades" },
    { nombre: "Carlos Rodríguez", facultad: "Ingeniería" }
];

const clases = [
    { nombre: "Matemáticas", docente: "Juan Pérez" },
    { nombre: "Historia", docente: "María García" },
    { nombre: "Informática", docente: "Carlos Rodríguez" }
];


// Función para cargar opciones de docentes según la facultad seleccionada
function cargarDocentes() {
    const facultadSeleccionada = document.getElementById("facultad").value;
    const docenteSelect = document.getElementById("docente");

    // Limpiar opciones anteriores
    docenteSelect.innerHTML = "";

    // Filtrar docentes por facultad
    const docentesFacultad = docentes.filter(docente => docente.facultad === facultadSeleccionada);

    docentesFacultad.forEach(docente => {
        const option = document.createElement("option");
        option.value = docente.nombre;
        option.text = docente.nombre;
        docenteSelect.appendChild(option);
    });
}

// Función para cargar opciones de clases según la facultad seleccionada
function cargarClases() {
    const facultadSeleccionada = document.getElementById("facultad").value;
    const claseSelect = document.getElementById("clase");

    // Limpiar opciones anteriores
    claseSelect.innerHTML = "";

    // Filtrar clases por facultad
    const clasesFacultad = clases.filter(clase => {
        const docente = docentes.find(doc => doc.nombre === clase.docente);
        return docente.facultad === facultadSeleccionada;
    });

    clasesFacultad.forEach(clase => {
        const option = document.createElement("option");
        option.value = clase.nombre;
        option.text = clase.nombre;
        claseSelect.appendChild(option);
    });
}

// Función para agregar un reporte
function agregarReporte() {
    const facultadSeleccionada = document.getElementById("facultad").value;
    const docenteSeleccionado = document.getElementById("docente").value;
    const claseSeleccionada = document.getElementById("clase").value;
    const reporteTexto = document.getElementById("reporte").value;

    // Crear un nuevo elemento li para el reporte
    const listItem = document.createElement("li");
    listItem.innerHTML = `<strong>${facultadSeleccionada} - ${docenteSeleccionado} - ${claseSeleccionada}:</strong> ${reporteTexto} <button onclick="eliminarReporte(this)">Eliminar</button>`;

    // Agregar el nuevo reporte a la lista
    const listaReportes = document.getElementById("lista-reportes");
    listaReportes.appendChild(listItem);

    // Limpiar el formulario después de agregar el reporte
    document.getElementById("reporte").value = "";
}

function eliminarReporte(button) {
    const listItem = button.parentNode;
    const listaReportes = document.getElementById("lista-reportes");

    // Eliminar el reporte de la lista
    listaReportes.removeChild(listItem);
}

// Cargar clases al cargar la página
window.onload = function () {
    cargarClases();
};
