/*1- Escribir un programa que solicite la edad y si es mayor de 18 años mostrar un mensaje que ya puede conducir,
 si la edad ingresada no es un número válido indicarlo en un mensaje.
 */
 const edad = parseInt(prompt("ingresar numero"))
 if(edad >=18){
     document.write("Si usted es mayor, puede conducir")
 }else{
 if(edad<=18){
     document.write("Usted es menor, no puede conducir")
 }
 }
 