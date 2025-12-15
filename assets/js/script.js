/* Para validar los datos del formulario */
const formulario = document.getElementById("formulario");
const respuesta = document.getElementById("respuesta");

formulario.addEventListener("submit", function (event) {
    event.preventDefault();

    const nombre = document.getElementById("nombre").value.trim();
    const correo = document.getElementById("email").value.trim();
    const mensaje = document.getElementById("mensajeTexto").value.trim();

    if (nombre === "" || correo === "" || mensaje === "") {
        mostrarMensaje("Todos los campos son obligatorios.", "error");
        return;
    }

    mostrarMensaje("¡Formulario enviado correctamente!", "exito");
});

function mostrarMensaje(texto, tipo) {
    respuesta.innerText = texto;

    if (tipo === "error") {
        respuesta.style.background = "#ffb3b3";
        respuesta.style.color = "#a10000";
    } else {
        respuesta.style.background = "#c6ffb3";
        respuesta.style.color = "#005c00";
    }
}


/* Para cambiar el fondo a claro o oscuro */
document.getElementById("temaBtn").addEventListener("click", () => {
    document.body.classList.toggle("light");
});



/* Para cambiar el color del boton */
const colorBtn = document.getElementById("btn-change");
let colorCambiado = false;

colorBtn.addEventListener("click", () => {
    if (!colorCambiado) {
        colorBtn.style.color = "#00ffcc"; // nuevo color de letra
        colorCambiado = true;
    } else {
        colorBtn.style.color = ""; // vuelve al color original
        colorCambiado = false;
    }
});
