/* 17- Realiza un script que muestre la posición de la primera vocal de un texto
 introducido por teclado.
 Ejemplo:
 Input: Hola mundo
 Output: la vocal ‘o’ está en la posición */
 const palabras = prompt("escribe una frase: ").toLowerCase();
const vocales = "aeiou";
let posiciónVocales = 0;

for (let i = 0; i < palabras.length; i++) {
  for (let j = 0; j < vocales.length; j++) {
    if (palabras[i] === vocales[j]) {
      posiciónVocales = i;
      break;
    }
  }
  if (posiciónVocales > 0) {
    break;
  }
}

document.write(
  `la vocal '${palabras[posiciónVocales]}' está en la posición ${posiciónVocales}`
);