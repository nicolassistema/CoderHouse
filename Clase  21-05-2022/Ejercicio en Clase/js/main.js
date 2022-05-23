debugger
let numero;
        numero = parseInt(prompt("Por favor ingrese un numero entre 10 y 50 ")) 
        while (isNaN(numero)) {
            numero = parseInt(prompt("Lo ingresado no es correcto. Por favor reingrese un numero entre 10 y 50 "))
        }
        
        if (numero >= 10 && numero <= 50) {
            alert("El numero "+numero+" se encuentra entre 10 y 50");
        }

     




