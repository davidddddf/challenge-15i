// Obtener un número del usuario y mostrar en consola o por alerta si es par o impar

//Data collection / Obtencion de datos
let number = Number(prompt("Ingrese un numero para evaluar si es par o impar:"));
//Evaluate if it is even or odd / Evaluar si es par o impar
if(number%2 == 0) alert(`El numero ${number} es par.`);
else alert(`El numero ${number} es impar.`);

//Otra forma, mas extensa

// if(number%2 == 0){
//     alert(`El numero ${number} es par.`);
// }else{
//     alert(`El numero ${number} es impar.`);}