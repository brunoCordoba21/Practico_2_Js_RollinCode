/*16- Realiza un script que pida una cadena de texto y la devuelva al revés. Es decir,
 si tecleo “hola que tal” deberá mostrar “lat euq aloh” */
const palabras = prompt("escribe una frase: ");
let palabraInvertida = '';

for (let i = palabras.length; i > 0; i--) {
    palabraInvertida += palabras[i - 1]
}

document.write(palabraInvertida)