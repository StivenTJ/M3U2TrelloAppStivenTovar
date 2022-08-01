import { tareas } from "./tareas.js";
/* Ventana Modal */
let formularioTarea = document.getElementById("formularioTarea");
let botonCrearTarea = document.getElementById("nuevaTarea");
let span = document.getElementsByClassName("close")[0];
let cancelar = document.getElementById("cancelar");
botonCrearTarea.onclick = function() {
    formularioTarea.style.display = "block";
}
span.onclick = function() {
    formularioTarea.style.display = "none";
}
cancelar.onclick = function() {
    formularioTarea.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == formularioTarea) {
        formularioTarea.style.display = "none";
    }
}

/* End Ventana Modal */


/* Traer Tareas */
const tareasHTML = document.getElementById("todoTask");
const obtenerTareas = (id) => {
    return new Promise((resolve, reject) => {
        let tarea = tareas[id]
        if (tarea == undefined) reject("La tarea no se encontro");
        else resolve(tarea)
    })
}

let botonGuardarTarea = document.getElementById("guardarTarea");
botonGuardarTarea.onclick = function() {
    let tituloTarea = document.getElementById("tituloTarea").value;
    let descripcionTarea = document.getElementById("descripcionTarea").value;
    let responsable = document.getElementById("responsable").value;
    let fechaEntrega = document.getElementById("fechaEntrega").value;
    tareas.push({ id: tareas.length + 1, titulo: tituloTarea, descripcion: descripcionTarea, responsable: responsable, fechaEntrega: fechaEntrega });
    alert("Tarea Creada Exitosamente");
    let formularioTarea = document.getElementById("formularioTarea");
    formularioTarea.style.display = "none";
    devolverTareas();
}

const devolverTareas = async() => {
    let tarea = [];
    for (let i = 0; i < tareas.length; i++) {
        tarea[i] = await obtenerTareas(i);
        if (tarea[i].titulo === "" || tarea[i].titulo == null) {} else {
            let newHTMLCode = `
            <div class="tareaNueva" id="${tarea[i].id}">
                <table class="tabla-tareas">
                    <tr>
                        <td colspan="2">
                            <center><h4>Título: ${tarea[i].titulo}</h4></center>
                        </td>
                    </tr>
                    <tr>
                        <td>Descripción:</td>
                        <td>${tarea[i].descripcion}</td>
                    </tr>
                    <tr>
                        <td>Responsable:</td>
                        <td>${tarea[i].responsable}</td>
                    </tr>
                    <tr>
                        <td>Fecha Entrega:</td>
                        <td>${tarea[i].fechaEntrega}</td>
                    </tr>
                    <tr>
                        <td><br></td>
                    </tr>
                </table>
                <div class="div-eliminar">
                    <button class="button-eliminar" onclick="eliminarTarea(${tarea[i].id})">
                        <img class="icon-eliminar" src="imagenes/eliminar.png">
                    </button>
                </div>
            </div>
        `;
            tareasHTML.innerHTML += newHTMLCode;
        }
    }
}
devolverTareas();
/* End Traer Tareas */