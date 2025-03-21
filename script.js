const preguntas = [
    {
        pregunta: "¿Cuál es el lenguaje que hace que una página web sea interactiva?",
        opciones: ["HTML", "CSS", "JavaScript", "Python"],
        respuesta: "JavaScript"
    },
    {
        pregunta: "¿Qué lenguaje se usa para estructurar una página web?",
        opciones: ["HTML", "CSS", "JavaScript", "Python"],
        respuesta: "HTML"
    },
    {
        pregunta: "¿Qué significa CSS?",
        opciones: ["Cascading Style Sheets", "Computer Style Sheets", "Creative Style Sheets", "Cascading Simple Styles"],
        respuesta: "Cascading Style Sheets"
    },
    {
        pregunta: "¿Qué es un framework?",
        opciones: ["Herramienta que facilita el desarrollo", "Lenguaje de programación", "Sistema operativo", "Conjunto de imágenes"],
        respuesta: "Herramienta que facilita el desarrollo"
    },
    {
        pregunta: "¿Qué es una API?",
        opciones: ["Interfaz para que programas se comuniquen", "Lenguaje de programación", "Aplicación para diseñar interfaces", "Herramienta de control de versiones"],
        respuesta: "Interfaz para que programas se comuniquen"
    }
];

let preguntaActual = 0;
const preguntaTexto = document.getElementById("pregunta");
const opcionesDiv = document.getElementById("opciones");
const mensaje = document.getElementById("mensaje");
const botonReiniciar = document.getElementById("reiniciar");

function cargarPregunta() {
    if (preguntaActual >= preguntas.length) {
        mensaje.textContent = "🎉 ¡Has completado la trivia!";
        mensaje.style.color = "blue";
        preguntaTexto.textContent = "";
        opcionesDiv.innerHTML = "";
        botonReiniciar.style.display = "block"; // Mostrar el botón de reinicio
        return;
    }

    const pregunta = preguntas[preguntaActual];
    preguntaTexto.textContent = pregunta.pregunta;
    opcionesDiv.innerHTML = "";
    mensaje.textContent = "";
    botonReiniciar.style.display = "none"; // Ocultar botón de reinicio hasta que termine el juego

    pregunta.opciones.forEach((opcion) => {
        const button = document.createElement("button");
        button.textContent = opcion;
        button.classList.add("opcion"); // Clase para el CSS
        button.onclick = function () {
            verificarRespuesta(button, opcion, pregunta.respuesta);
        };
        opcionesDiv.appendChild(button);
    });
}

function verificarRespuesta(boton, seleccion, respuestaCorrecta) {
    if (seleccion === respuestaCorrecta) {
        boton.classList.add("correcto");
        mensaje.textContent = "✅ ¡Respuesta correcta!";
        mensaje.style.color = "green";

        setTimeout(() => {
            preguntaActual++;
            cargarPregunta();
        }, 1000);
    } else {
        boton.classList.add("incorrecto");
        mensaje.textContent = "❌ Respuesta incorrecta. Inténtalo de nuevo.";
        mensaje.style.color = "red";
    }
}

function reiniciarTrivia() {
    preguntaActual = 0;
    cargarPregunta();
}

// Llamar la función después de definir todo
cargarPregunta();
