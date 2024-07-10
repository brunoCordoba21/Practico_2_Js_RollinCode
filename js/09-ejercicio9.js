/*9-Creaunscript queescriba losnúmerosdel 1al 500, que indiquecuálesson
 múltiplos de 4 y de 9 y que cada 5 líneasmuestre una línea horizontal. Por
 ejemplo:
 1
 2
 3
 4(Múltiplode4)
 5
————————————————————
6
 7
 8(Múltiplode4)
 9(Múltiplode9)
 10
 */
let multiplo = 1;
for (let i = 1; i <= 30; i++) {
  if (i % 4 === 0 || i % 9 === 0) {
    if (i % 4 === 0) {
      document.write(`<p>${i} (Múltiplo de 4)</p>`);
    }
    if (i % 9 === 0) {
      document.write(`<p>${i} (Múltiplo de 9)</p>`);
    }
  } else {
    document.write(`<p>${i}</p>`);
  }
  if (multiplo === 5) {
    document.write(`<p>————————————————————</p>`);
    multiplo = 0;
  }
  multiplo++;
}