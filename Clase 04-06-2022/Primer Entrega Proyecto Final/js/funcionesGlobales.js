
const listaProductosNueva = [];
ingresarDatos();

function ingresarDatos() {
   
  // let nombre = ingresarNombre()
  // let apellido = ingresarApellido()
  // let ingresoNeto = ingresarIngresoNeto();

  //ingrese producto


  do {
      
  } while (seleccionarProducto());

   
   
   /* let capitalEntrada;
    let plazoEntrada;
   
    capitalEntrada = ingresarCapital();
    plazoEntrada = ingresarPlazo()

        if(capitalEntrada != null && plazoEntrada != null){
            const plazo6 = new PlazoFijo(capitalEntrada,TNA,plazoEntrada);
            alert("Capital igresado: $"+plazo6.capital+"\nAl final del plazo fijo, recibís \n" +"$"+plazo6.interesMensualPorCantMesesMasCapital() + "\n Interes Ganado \n" +"$"+ plazo6.interesMensualPorCantMeses()+"\nTNA %: "+TNA);
        }

        */
}


function ingresarCapital () {
    let numero;
    numero = parseFloat(prompt("Por favor ingrese el capital mayor a 0"));
    console.log("s********** " + typeof(numero))
    while (!validarNumeroPositivo(numero)) {
        numero = parseFloat(prompt("Lo ingresado no es correcto. Por favor ingrese el capital mayor a 0 "))
    }
    return numero;
}

function ingresarPlazo () {
    let numero;
    numero = conversorPlazo(parseInt(prompt("Por favor ingresar alguno de los siguientes plazos disponibles en dias: \n 30 \n 60 \n 90 \n 120 \n 150 \n 180 \n 210 \n 240  \n 270 \n 300 \n 330 \n 360 ")))
    while (!validarNumeroPositivo(numero)) {
        numero = conversorPlazo(parseInt(prompt("Lo ingresado no es correcto. Por favor ingresar alguno de los siguientes plazos disponibles en dias: \n 30 \n 60 \n 90 \n 120 \n 150 \n 180 \n 210 \n 240  \n 270 \n 300 \n 330 \n 360 ")))
    }
    return numero;
}


function conversorPlazo(opcion) {
    switch (opcion) {
        case 30:
            return 1;
            break;
        case 60:
            return 2;
            break;
        case 90:
            return 3;
            break;
        case 120:
            return 4;
            break;
        case 150:
            return 5;
            break;
        case 180:
            return 6;
            break;
        case 210:
            return 7;
            break;
        case 240:
            return 8;
            break;
        case 270:
            return 9;
            break;
        case 300:
            return 10;
            break;
        case 330:
            return 11;
            break;
        case 360:
            return 12;
            break;
        default:
            return "n";
            break;
    }
}

function restarProductos(opcion) {
       opcion = opcion-1

    for (let i = 0; i < listaProductosDisponibles.length; i++) {
       if(opcion == i ){
        listaProductosDisponibles.splice(opcion , 1);
            return i;
            break;
       }
    }
    return "n";
}

function ingresarNombre() {
    let nombre  =  prompt("Ingresar Nombre")
    while (!validarNombre(nombre)) {
        nombre = prompt("Lo ingresado no es correcto. Por favor ingresar el nombre ")
    }
    return nombre;
}

function ingresarApellido() {
    let apellido  =  prompt("Ingresar apellido")
    while (!validarNombre(apellido)) {
        apellido = prompt("Lo ingresado no es correcto. Por favor ingresar el apellido ")
    }
    return apellido;
}

function ingresarIngresoNeto() {
    let numero;
    numero = parseInt(prompt("Por favor ingresar ingreso neto "))
    while (!validarNumeroPositivo(numero)) {
        numero = parseInt(prompt("Lo ingresado no es correcto. Por favor ingresar ingreso neto "))
    }
    return numero;  
}


function seleccionarProducto() {
    let opcion;
    let mensaje;
   // debugger
    const listaAux = listaProductosDisponibles.slice()//copia la lista y la guarda en otra lista
    //Recorre la lista de prodcutos disponibles y va sumando al mensaje
    if(listaProductosDisponibles.length > 0){
        for (let i = 0; i < listaProductosDisponibles.length; i++) {
            mensaje += "\n ("+(i+1)+") " + listaProductosDisponibles[i];
        }
         mensaje += "\n ::::Pulsar s para finalizar::::";
        opcion = prompt("Por favor ingresar los alguna de las siguientes opciones en numero: " + mensaje)
        if(opcion.toLocaleLowerCase() == "s"){
            return false;
        }else{
            opcion =  restarProductos(parseInt(opcion))
       

            while (!validarNumeroPositivo(opcion +1 )) {
                opcion = prompt("La opcion no es incorrecto. Por favor ingresar los alguna de las siguientes opciones en numero: " + mensaje)

               if(opcion.toLocaleLowerCase() == "s"){
                    return false;
                }else{

                    opcion =  restarProductos(parseInt(opcion))
                }
            }
            agregarProducto(listaProductosNueva,listaAux[opcion])
            return true;
        }
    }else{
        return false;
    }
}


function agregarProducto(listaProducto,producto) {
    //ARREGLAR POR QUE CUANDO SE AGREGA NO ESA UNA NUEVA LISTA DE PRODUCTOS, SI NO HAY QUE AGREGAR AL OBJETO PRODUCTO
    listaProducto.push(producto);
}


function validarNumeroPositivo(numero) {
    let flag = false;
    if(!isNaN(numero)){
        if (numero > 0) {
            flag = true;
        }
    }
    return flag;
}

function validarNombre(nombre) {
    let flag = false;
    if(isNaN(nombre)){
            flag = true;
    }
    return flag;
}


