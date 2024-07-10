
const palabras = prompt("escribe una frase: ").toLowerCase();
const vocales = "aeiou";
let cantVocal = 0;

for (let i = 0; i < palabras.length; i++) {
  for (let j = 0; j < vocales.length; j++) {
    if (palabras[i] === vocales[j]) {
      cantVocal++;
    }
  }
}

document.write(`su frase tiene ${cantVocal} vocales`);