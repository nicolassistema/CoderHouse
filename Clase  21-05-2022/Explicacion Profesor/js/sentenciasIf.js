//let nombreCompleto = "Fernando Moon"
//let respuesta = (1 == 1)

// debugger
/*let username = prompt("Ingrese su nombre:")

 if (username == "Coderhouse") {
     console.log("Bienvenido", username)
} else {
     console.warn("No se reconoce el usuario ingresado.")
}
*/
//CONDICIONES ANIDADAS o ENCADENADAS
// debugger
// let miOferta = prompt("Ingrese su oferta económica:")

// miOferta = parseInt(miOferta)

// if (miOferta < 20) {
//     console.error("No way! Ni por cerca el precio que esperamos.")
// } else if (miOferta < 40) {
//     console.warn("Estírate un poco más.")
// } else if (miOferta < 50) {
//     console.warn("Ya casi. Vamos un poco más arriba.")
// } else if (miOferta < 80) {
//     console.log("Tu oferta nos interesa ;)")
// }

// debugger

// let respuesta = confirm("¿Está seguro de formatear el disco?")

// if (respuesta == true) {
//     console.warn("El disco se está formateando...")
// } else {
//     console.log("Sus archivos siguen intactos.")
// }


//debugger
/*
let username = prompt("Ingrese su nombre de usuario:")
let password = prompt("Ingrese su contraseña:")
let fingerprint = false

if ((username == "Coderhouse" && password == "123456") || fingerprint === true) {
    console.log("Bienvenido a BankApp", username)
} else {
    console.warn("No se reconoce el usuario ingresado.")
}

*/

//Ciclos
//debugger
/*let limite = parseInt(prompt("Ingrese un numero"));

for (let i = 0; i <limite; i++) {
   console.log("Conteo: ", i);
    
}
*/

/*
let limite = parseInt(prompt("Ingrese un numero"));

for (let i = 0; i <limite; i++) {

    if(i === 1000){
        break;
    }
   alert(i);
    
}
*/
/*
let limite = parseInt(prompt("Ingrese un numero"));

for (let i = 0; i <limite; i++) {

    if(i === 7){
        continue;
    }
    console.log("Conteo: ", i);
}
*/


let seguimos = true

while (seguimos) {
    console.log("Una nueva iteracion");
    seguimos = confirm("Desea continuar?");
}


