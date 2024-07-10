// 6- Realiza un script que escriba una pirámide del 1 al 30 de la siguiente forma :
for (let i = 0; i <= 30; i++) {
    for (let e = 0; e < i; e++) {
        if(i < 10){
            document.write(`<span>0${i}</span>`)
        }else{
            document.write(`<span>${i}</span>`)
        }
    }
    document.write('<br>')
}