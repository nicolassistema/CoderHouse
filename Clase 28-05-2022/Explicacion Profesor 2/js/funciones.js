//funciones
function saludar(parametro) {
    console.log("Hola ", parametro);
 
}


//debugger

function saludoDirecto() {
    alert(nombreCompleto)
}



function cambiarNombre() {
    
    nombreCompleto = prompt("Ingrese un nuevo nombre: ")
}

function nuevoUsuario() {
    const nu = prompt("Ingrese el nombre del nuevoUsuario");
    return nu;
}

/*
function saludarUsuario() {

    alert(nu);   
}
*/

const saludarUsuario = (paramUno) => {

    let nombre = paramUno;
    console.log(nombre)
}

/*
function sumar(num1,num2) {
    return num1 + num2;
}
*/


const sumar = (num1,num2) =>{
    return  num1 + num2;
}

//arrow function
//sconst sumar = (num1,num2) => num1 + num2;