/*4- Realiza un script que pida números hasta que se pulse “cancelar”. Si no es un
 número deberá indicarse con un «alert» y seguir pidiendo números. Al salir con
 “cancelar” deberá indicarse la suma total de los números introducidos */
let numeros = []

do {
     
    
    numeros = parseInt(prompt("ingresar números"))
    numeros = numeros + numeros
    
} while (confirm(('desea ingresar mas numero')));

document.write('el numero ingresado es:'+ (numeros) )
if(numeros=NaN){
    alert('erróneo ingresar un numero')
}
