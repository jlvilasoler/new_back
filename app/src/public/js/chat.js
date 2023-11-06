const socket = io();
console.log("hola");

let usuario = '';




const caja = document.getElementById("caja"); // Contenido campo escribir mensaje
const contenido = document.getElementById("contenido"); // Contenido chat
const btnSend = document.getElementById("btnSend"); // Botón de consola de escribir mensaje

btnSend.addEventListener("click", () => {
    const mensaje = caja.value.trim(); // Obtenemos el contenido del input y eliminamos espacios en blanco al principio y al final

    if (mensaje !== "") {
        socket.emit("mensaje", {
            user: usuario,
            mensaje: mensaje,
        });
        //console.log()"Mensaje enviado:", mensaje);
        caja.value = "";
    }
});

/*
caja.addEventListener("change", () => {
    const mensaje = caja.value.trim(); // Obtenemos el contenido del input y eliminamos espacios en blanco al principio y al final
    if (mensaje !== "") {
        socket.emit("mensaje", {
            user: usuario,
            mensaje: mensaje,
        });
        //console.log()"Mensaje enviado:", mensaje);
        caja.value = "";
    }
}); */



/////////////////////////////////////////////////

socket.on("nuevo-mensaje", async (mensajes) => {
    const mensajesMostrar = mensajes.map(({user, mensaje}) => {
        return `<p>${user} dijo: ${mensaje}</p>`;
    });
    contenido.innerHTML = mensajesMostrar.join('');
    console.log(mensajes)
});



Swal.fire({
    title: 'Insert your email:',
    input: 'text',
    inputAttributes: {
        autocapitalize: 'off'
    },
    confirmButtonText: 'ingresar',
    showLoaderOnConfirm: true,
}).then((result) => {usuario = result.value;
});