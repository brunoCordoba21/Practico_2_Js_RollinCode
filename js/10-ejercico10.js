
/*10- Realiza un script que pida número de filas y columnas y escriba una tabla.
 Dentro de cada una de las celdas deberá escribirse un número consecutivo en
 orden descendente. Si, por ejemplo, la tabla es de 7×5 los números irán del 35 al 1. */

 const filas = parseInt(prompt('Ingresar umeros de filas'))
 const columnas = parseInt (prompt('ingresar numeros de columnas'))
 totalCeldas = filas * columnas;
 document.write(` <tbody> <table>`)
 for(indiceFilas = 1;indiceFilas<=filas; indiceFilas++){
    document.write(`<tr>`)
    for(let indiceColumnas = 1;indiceColumnas <=columnas;indiceColumnas++){
        document.write(`<td>${totalCeldas}</td>`)
        totalCeldas--
   }

 document.write(`<tr>`)

 }
 
 

 document.write(` </tbr>`)
 document.write(` </tbody> </table>`)