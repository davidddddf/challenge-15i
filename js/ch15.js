//Crear un algoritmo por el cual se simule el lanzamiento de dos dados
// Funcion que devuelve numero aleatorio entre 1 y 6
const dice = () => {
    result = (Math.floor(Math.random() * 6)) + 1
    return result
}
const rollDices = function (){
    num1 = dice();
    num2 = dice();
    console.log(`Los resultados son: \nPrimer dado: ${num1}\nSegundo dado: ${num2}`);
}