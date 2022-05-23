debugger
let numero;
let resultado = 0;
let mensaje;

do {
    mensaje = null;
    mensaje = "";
    numero = parseInt(prompt("Por favor ingresar un numero "))
    while (isNaN(numero)) {
        numero = parseInt(prompt("Lo ingresado no es correcto. Por favor ingresar un numero "))
    }
    mensaje += "Suma del resultado anterior " + resultado + " + el numero ingresado " + numero + " es : " + (resultado += numero);

    if ((resultado % 2) == 0) {
        mensaje += " y es par"
    } else {
        mensaje += " y es impar"
    }
    alert(mensaje);
} while (confirm("Desea seguir con la suma?"));





