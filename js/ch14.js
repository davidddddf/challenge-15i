// Necesito que segun la edad del usuario se muestre por consola un tema destacado de la edad que tiene
// Ejemplo:
// Tengo 26 años --> Tema de rata blanca
// Tengo 15 años --> tema de bad bunny --> respuesta 'El tema para tu edad es me porto bonito'
// Tengo 66 --> Tema de gardel

//Data collection / Obtencion de datos con verificacion de que sea un numero no negativo
let edad = -1;
while(edad<0 || isNaN(edad)){    
    edad = prompt("Ingrese la edad en años:");
    if(edad < 0 || isNaN(edad)) alert("El valor ingresado es invalido.");
}
//Switch 
switch(true){
    case edad < 10:
        alert("Pongase los auriculares, suena La vaca lola");
        break;
    case edad <20:
        alert("Pongase los auriculares, suena Duki");
        break;
    case edad <30:
        alert("Pongase los auriculares, suena Bad Bunny");
        break;
    case edad <40:
    alert("Pongase los auriculares, suena Ed Sheeran");
    break;
    case edad <50:
    alert("Pongase los auriculares, suena Sabina");
    break;
    case edad <60:
    alert("Pongase los auriculares, suena Los chalchaleros");
    break;
    case edad >= 60:
    alert("Pongase los auriculares, suena Carlos Gardel");
    break;
}