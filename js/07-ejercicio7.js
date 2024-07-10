const cantidadPiramide = parseInt(prompt('ingrese el numero para su pirámide(no mas de 50): '))

if(cantidadPiramide <= 50){
    for (let i = cantidadPiramide; i > 0; i--) {
        for (let c = 0; c < i; c++) {
            if(i < 10){
                document.write(`<span>0${i}</span>`)
            }else{
                document.write(`<span>${i}</span>`)
            }
        }
        document.write('<br>')
    }
}