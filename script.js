
let intentos = 6;
let diccionario = [
    "APPLE", "HAPPY", "SMILE", "LEMON", "MOUSE"];
const palabra = diccionario[Math.floor(Math.random() * diccionario.length)];

const BUTTON = document.getElementById("guess-button");
BUTTON.addEventListener("click", intentar);

function intentar() {
    const intento = leerIntento();
    if (intento === palabra) {
        terminar("<h1>¡GANASTE! 😀</h1>");
        return;//para que no se siga ejecutando el programa
    }

    const GRID = document.getElementById("grid");
    const ROW = document.createElement("div");
    ROW.className = "row";

    for (let i in palabra) {
        const SPAN = document.createElement("span");
        SPAN.className = "letter";

        if (intento[i] === palabra[i]) { 
            SPAN.innerHTML = intento[i];
            SPAN.style.backgroundColor = "#79b851";
        } else if (palabra.includes(intento[i])) {
            SPAN.innerHTML = intento[i];
            SPAN.style.backgroundColor = "#f3c237";
        } else { 
            SPAN.innerHTML = intento[i];
            SPAN.style.backgroundColor = "#a4aec4";
        }
        ROW.appendChild(SPAN);
    }

    GRID.appendChild(ROW);

    intentos--;

    if (intentos === 0) {
        terminar("<h1>¡PERDISTE! 😖</h1>");//h1 estamos pasando un html a traves de innerHTML
    }
}

function leerIntento() {
    const VALOR = document.getElementById("guess-input").value.toUpperCase();
    return VALOR;
}

function terminar(mensaje) {
    const INPUT = document.getElementById("guess-input");
    const BOTON = document.getElementById("guess-button");
    INPUT.disabled = true; //desabilitamos
    BOTON.disabled = true;
    let contenedor = document.getElementById("guesses");
    contenedor.innerHTML = mensaje;
}
