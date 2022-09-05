// Obtener la base y la altura de un triángulo, y el radio de un circulo. Mostrar en consola el área del triangulo y del círculo.

// Pista:
// - Área del triángulo: (base x altura) / 2
// - Área del círculo: pi x radio^2

// Data collection / Obtencion de datos
let triangleBase = Number(prompt(`Bienvenido a la calculadora de superficies \nIngrese el valor de la base del triangulo (B):`));
let triangleHigh = Number(prompt(`Ingrese el valor de la altura del triangulo (H):`));
let circleRadius = Number(prompt(`Ingrese el valor del radio del circulo (R2):`));
// Calculation of areas? / Calculo de superficies
let triangleArea = (triangleBase*triangleHigh/2).toFixed(1);
let circleArea = (Math.PI*(Math.pow(circleRadius,2))).toFixed(2)
// Show results / Mostrar resultados
alert(`Calculadora de superficies\n Superficie del triangulo: ${triangleArea}\n Superficie del circulo: ${circleArea}`)
