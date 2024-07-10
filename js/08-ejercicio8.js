/* 8-Creascriptparagenerarpirámidesiguientecon losnúmerosdel 1al número
 queindiqueelusuario(nomayorde50)
 1
 12
 123
 1234
 12345
 123456
 */
const numeroPiramide = parseInt(prompt('ingrese el numero para su pirámide(no mas de 50): '))

if(numeroPiramide <= 50){
    for (let i = 0; i < numeroPiramide; i++) {
        for (let c = 0; c < i; c++) {
            document.write(`<span>${(j + 1)}</span>`)
        }
        document.write('<br>')
    }
}