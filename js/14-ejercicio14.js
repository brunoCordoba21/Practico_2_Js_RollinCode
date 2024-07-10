/*14- Realiza un script que pida una cadena de texto y lo muestre poniendo el signo– entre cada carácter sin usar el método replace. Por ejemplo, si tecleo “hola qué
 tal”, deberá salir “h-o-l-a--q-u-e--t-a-l”. */

 const textoUsuario = prompt('ingrese un texto: ')
 let Text = '';
 for (let i = 0; i < textoUsuario.length; i++) {
     Text += i + 1 === textoUsuario.length ? textoUsuario.charAt(i) : textoUsuario.charAt(i) + '-';
 }
 
 document.write(`cadena modificada: ${Text}`)