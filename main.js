// Ejercicio N°1

let a = 10;
let b = 15;

let esMayorQue = a > b

console.log(`a es mayor que b: ${esMayorQue}`)



//-----------barra espaciadora de bajo presupuesto---------------------//

// Ejercicio N°2

let sonIguales = a == b;
console.log(`a y b son iguales ${sonIguales}`)


//-----------barra espaciadora de bajo presupuesto---------------------//

// Ejercicio N°4

let x = 20;
let y = 20;

if (x > y) {
    console.log(x)
} else if ( y > x) {
    console.log(y)
} else{
    console.log(`son iguales`)
}


let c = 6;
let d = 7;
let e = 5;

if (c < d && c < e) {
    console.log(`c es el mas chico`)
} else if ( d < c && d < e) {
    console.log(`d es el mas chico`)
} else if(e < c && e < d) {
    console.log(`e es el mas chico`)
}



//-----------barra espaciadora de bajo presupuesto---------------------//

// Ejercicio N°5

let persona1 = {
    nombre: "Mauricio",
    edad: 27,
    altura: 185
};

let persona2 = {
    nombre: "Nicolas",
    edad: 28,
    altura: 174
}

if (persona1.altura > persona2.altura){
    console.log(`persona1 es la mas alta`)
} else {
    console.log(`persona2 es la mas alta`)
}

if (persona1.edad > persona2.edad){
    console.log(`persona1 es mayor`)
} else {
    console.log(`persona2 es mayor`)
}



//-----------barra espaciadora de bajo presupuesto---------------------//

// Ejercicio N°6

// let nombreConductor = prompt("por favor ingrese su nombre");
// let edadConductor = Number(prompt("ingrese su edad"));
// let altura = Number(prompt("ingreee su altura"));
// let vision = Number(prompt("ingrese su visión del 1 al 10"));

// console.log(nombreConductor);
// console.log(edadConductor);
// console.log(altura);
// console.log(vision);

// if (edadConductor >= 18 && altura >= 150 && vision >= 8){
//     console.log(`${nombreConductor} puedes manejar`)
// } else {
//     console.log(`${nombreConductor} no puedes manejar`)
// }



//-----------barra espaciadora de bajo presupuesto---------------------//

// Ejercicio N°7

// let miNombre = "Mauricio"

// let nombre = prompt("ingrese su nombre");
// let pase = prompt("ingrese su tipo de pase");
// let tieneEntrada = prompt("posee entrada?")
// let usarEntrada = prompt("desea utilizarla?")

// if (miNombre === nombre || pase == "vip") {
//     console.log(`${nombre} bienvenide`)
// }

// if (tieneEntrada == "si" && usarEntrada == "si") {
//     console.log(`${nombre} bienvenide`)
// } 

// if (usarEntrada == "si"){
//     console.log(`${nombre} bienvenide`)
// }
//     let comprarEntrada = prompt("desea comprar entrada?")
//     let dineroDisponible = prompt("ingrese dinero disponible")

//     if (comprarEntrada = "si" && dineroDisponible >= 1000){
//         console.log(`Bienvenido`)
//     } else{
//         console.log( `hasta luego`)
//     }



    //-----------barra espaciadora de bajo presupuesto---------------------//
    
    // Ejercicio N°8

//     let numeroIncognita = 7;

//     let numeroIngresado = prompt("ingrese un numero del 1 al 10")
//     if(numeroIngresado < numeroIncognita) {
//         console.log("el numero ingresado es menor, vuelve a intentarlo")
//     } else if (numeroIngresado > numeroIncognita) {
//         console.log(`el numero ingresado es mayor, vuelve a intentarlo`)
//     } else if (numeroIngresado == numeroIncognita) {
//         console.log(`felicitaciones, ganaste`)
//     }

//     let numeroIngresado2 = prompt("ingrese un numero del 1 al 10")
//      if (numeroIngresado2 < numeroIncognita) {
//         console.log(`el numero ingresado es menor, vuelve a intentarlo`)
//     } else if (numeroIngresado2 > numeroIncognita) {
//         console.log(`el numero ingresado es mayor, vuelve a intentarlo`)
//     } else if (numeroIngresado2 == numeroIncognita) {
//         console.log(`felicitaciones, ganaste`)
//     }

//     let numeroIngresado3 = prompt("ingrese un numero del 1 al 10")
//     if (numeroIngresado3 < numeroIncognita) {
//        console.log(`el numero ingresado es menor, vuelve a intentarlo`)
//    } else if (numeroIngresado3 > numeroIncognita) {
//        console.log(`el numero ingresado es mayor, vuelve a intentarlo`)
//    } else if (numeroIngresado3 == numeroIncognita) {
//        console.log(`felicitaciones, ganaste`)
//    }



   //-----------barra espaciadora de bajo presupuesto---------------------//
   
   // Ejercicio N°9

//    let edad = Number(prompt("ingrese su edad"))

//    if (edad >= 0 && edad <= 12) {
//     console.log(`eres un infante`)
//    } else if (edad >= 13 && edad <= 18){
//     console.log(`eres un adolescente`)
//    } else if (edad >= 19 && edad <= 45) {
//     console.log(`eres un adulto joven`)
//    } else if (edad >= 45 && edad < 100) {
//     console.log(`eres un anciano`)
//    } else if (edad >= 100) {
//     console.log(`realmente tienes esa edad?`)
//    }



   //-----------barra espaciadora de bajo presupuesto---------------------//
   
   // Ejercicio N°10

//    let jugador1 = prompt("ingrese piedra, papel o tijera");
//    let jugador2 = prompt("ingrese piedra, papel o tijeras");

//    if (jugador1 == "piedra" && jugador2 == "papel"){
//     console.log(`ha ganado el jugador 2`)
//    } else if(jugador1 == "piedra" && jugador2 == `tijera`){
//     console.log(`ha ganado el jugador 1`)
//    } else if (jugador1 == "piedra" && jugador2 == `piedra`){
//     console.log(`hubo empate`)
//    } else if (jugador1 == "papel" && jugador2 == `piedra`){
//     console.log(`ha ganado el jugador 1`)
//    } else if (jugador1 == "papel" && jugador2 == "tijera"){
//     console.log(`ha ganado el jugador 2`)
//    }  else if (jugador1 == "papel" && jugador2 == `papel`){
//     console.log(`hubo empate`)
//    } else if (jugador1 == "piedra" && jugador2 == "tijera"){
//     console.log(`ha ganado el jugador 1`)
//    } else if (jugador1 == "tijera" && jugador2 == "piedra"){
//     console.log(`ha ganado el jugador 2`)
//    } else if (jugador1 == "tijera" && jugador2 == "papel"){
//     console.log(`ha ganado el jugador 1`)
//    } else if (jugador1 == "tijera" && jugador2 == "tijera"){
//     console.log(`hubo empate`)
//    } else {
//     console.log(`hubo trampa`)
//    }



   //-----------barra espaciadora de bajo presupuesto---------------------//
   
   // Ejercicio N°11

//    let color = prompt("ingresa un color");

//    switch (color) {
//     case "blanco":
//         console.log("falta color")
//       break;
//     case "negro":        
//         console.log("falta color")
//       break;
//     case "verde":
//         console.log("el color de la naturaleza")
//       break;
//     case "azul":
//         console.log("el color del agua")
//         break;
//     case "amarillo":
//         console.log("el color del sol")
//         break;
//     case "rojo":
//         console.log("el color del fuego")
//         break;
//     case "marron":
//         console.log("el color de la tierra")
//         break;
//     default:
//       console.log("excelente elección, no lo habíamos pensado")
//   }



  //-----------barra espaciadora de bajo presupuesto---------------------//
  
  // Ejercicio N°12

//   primerNumero = Number(prompt("ingrese el primer numero"));
//   segundoNumero = Number(prompt("ingrese el segundo numero"));
//   operación = prompt("ingrese una operación, suma, resta, multiplicacion o division");

//   if (operación == "suma") {
//     let resultadoSuma = primerNumero + segundoNumero
//     console.log(`el resultado de la suma es:${resultadoSuma}`)
//   } else if (operación == "resta") {
//     let resultadoResta = primerNumero  - segundoNumero
//     console.log(`el resultado de la resta es:${resultadoResta}`)
//   } else if (operación == "multiplicacion") {
//     let resultadoMultiplicacion = primerNumero  * segundoNumero
//     console.log(`el resultado de la multiplicacion es:${resultadoMultiplicacion}`)
//   }  else if( operación == "division" && segundoNumero > primerNumero || segundoNumero == 0) {
//     console.log("error")
//   } else if (operación == "division") {
//     let resultadoDivision = primerNumero / segundoNumero
//     console.log(`el resultado de la division es:${resultadoDivision}`)
//   }



  //-----------barra espaciadora de bajo presupuesto---------------------//
  
  // Ejercicio N°13

  let apellido = prompt("ingrese su apellido");
  let nombre = prompt("ingrese su nombre");
  let sexo = prompt("ingrese su sexo");
  let nacionalidad = prompt("ingrese su nacionalidad");
  let fechaNacimiento = prompt ("ingrese su fecha de nacimiento");
  let numeroDni = prompt("ingrese su numero de DNI");

  const dni ={
    }

  let datosCorrectos = prompt(`Apellido :${apellido}, Nombre: ${nombre}, Sexo:${sexo}, Nacionalidad: ${nacionalidad}, Fecha de nacimiento: ${fechaNacimiento}, Numero de DNI: ${numeroDni} son correctos estos datos?`)

  if (datosCorrectos == "si"){
    dni["apellido"] = apellido
    dni["nombre"] = nombre
    dni["sexo"] = sexo
    dni["nacionalidad"] = nacionalidad
    dni["fechaNacimiento"] = fechaNacimiento
    dni["numeroDni"] = numeroDni
    console.table(dni)
    console.log(`registro existoso`)
  } else {
    console.log(`vuelva a intentarlo en un mes`)
  }
