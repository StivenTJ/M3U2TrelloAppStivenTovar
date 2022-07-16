let formularioTarea = document.getElementById("formularioTarea");
let botonCrearTarea = document.getElementById("nuevaTarea");
let span = document.getElementsByClassName("close")[0];
botonCrearTarea.onclick = function() {
    formularioTarea.style.display = "block";
}

span.onclick = function() {
    formularioTarea.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == formularioTarea) {
        formularioTarea.style.display = "none";
    }
}