//validacion de numeros

let numero;
let numeroDos;

debugger
        numero = parseInt(prompt("Por favor ingrese un numero entre 10 y 50 ")) 
        while (isNaN(numero)) {
            numero = parseInt(prompt("Lo ingresado no es correcto. Por favor reingrese un numero entre 10 y 50 "))
        }

        numeroDos = parseInt(prompt("Por favor ingrese el siguente numero entre 10 y 50 ")) 
        while (isNaN(numero)) {
            numeroDos = parseInt(prompt("Lo ingresado no es correcto. Por favor ingrese el siguente numero entre 10 y 50 "))
        }


