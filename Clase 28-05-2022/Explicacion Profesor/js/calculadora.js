//funciones

function calculadora() {
    debugger
    let primerNumero = prompt("Ingrese primer numero");
    let segundoNumero = prompt("Ingrese segundo numero");
    let operador = prompt("Selecciona la operacion:  ( + * - /)");

    console.log("Resultado : ", realizarCalculo(primerNumero,segundoNumero, operador));
}

function realizarCalculo(paramUno,paramDos, paramTres) {

    switch (paramTres) {
        case "+":
            return parseInt(paramUno) + parseInt(paramDos);
        break

        case "-":
            return parseInt(paramUno) - parseInt(paramDos);
        break

        case "*":
            return parseInt(paramUno) * parseInt(paramDos);
        break

        case "/":
            return parseInt(paramUno) / parseInt(paramDos);
            break
    
        default:
                return "Error en el operador aritmetico"
            break
    }

  //  let resultado = parseInt(paramUno) + parseInt(paramDos);
  //  console.log("Resultado", resultado);
}


//debugger
calculadora();

