const formulario = document.getElementById("formulario");
const mensaje = document.getElementById("mensaje");


formulario.addEventListener("submit", function (event) {
    event.preventDefault();

    const nombre = document.getElementById("nombre").value.trim();
    const correo = document.getElementById("correo").value.trim();
    const mensaje = document.getElementById("mensaje").value.trim();


    if (nombre === "" || correo === "" || mensaje === "") {
        mostrarMensaje("Todos los campos son obligatorios.", "error");
        return;
    }
    mostrarMensaje("¡Formulario enviado correctamente!", "exito");
});

function mostrarMensaje(texto, tipo) {
    mensaje.innerText = texto;

    if (tipo === "error") {
        mensaje.style.background = "#ffb3b3";
        mensaje.style.color = "#a10000";
    } else {
        mensaje.style.background = "#c6ffb3";
        mensaje.style.color = "#005c00";
    }
}
