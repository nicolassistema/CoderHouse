const listaProductosNueva = [];
ingresarDatos();

function ingresarDatos() {
   let nombre = ingresarNombre()
   let apellido = ingresarApellido()
   let ingresoNeto = ingresarIngresoNeto();
   let montoDisponiblePrestamo;
   let montoDisponibleVisaTarje;
   let montoDisponibleMasterTarje;
   let montoDisponibleCC;
   let mensaje = "";
     
  do {
      
  } while (seleccionarProducto());

  mensaje += "Nombre: " + nombre
  mensaje += "\nApellido: " + apellido
  mensaje += "\nIngreso Neto: " + ingresoNeto

    for (let i = 0; i < listaProductosNueva.length; i++) {
        if(listaProductosNueva[i].nombre  == "Prestamo"){
            montoDisponiblePrestamo =  ingresoNeto - ((ingresoNeto * listaProductosNueva[i].numeroCalculo)/100)
            mensaje += "\nMonto Disponible para prestamo: " + montoDisponiblePrestamo
        }
        if(listaProductosNueva[i].nombre  == "Tarjeta Visa"){
            montoDisponibleVisaTarje =  ingresoNeto - ((ingresoNeto * listaProductosNueva[i].numeroCalculo)/100)
            mensaje += "\nMonto Disponible tarjeta Visa: " + montoDisponibleVisaTarje
        }
        if(listaProductosNueva[i].nombre  == "Tarjeta Master"){
            montoDisponibleMasterTarje =  ingresoNeto - ((ingresoNeto * listaProductosNueva[i].numeroCalculo)/100)
            mensaje += "\nMonto Disponible tarjeta Master: " + montoDisponibleMasterTarje
        }
        if(listaProductosNueva[i].nombre  == "Cuenta Corriente"){
            montoDisponibleCC =  ingresoNeto - ((ingresoNeto * listaProductosNueva[i].numeroCalculo)/100)
            mensaje += "\nMonto Disponible Cuenta Corriente: " + montoDisponibleCC
        }
        if(listaProductosNueva[i].nombre == "Caja de Ahorro"){
            montoDisponibleCC =  ingresoNeto - ((ingresoNeto * 10)/100)
            mensaje += "\nDisponible de una Caja de Ahorro Bonificada!!!!"
        }
    }
   alert(mensaje);
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
    //debugger
    const listaAux = listaProductosDisponibles.slice()//copia la lista y la guarda en otra lista
    //Recorre la lista de prodcutos disponibles y va sumando al mensaje
    if(listaProductosDisponibles.length > 0){
        for (let i = 0; i < listaProductosDisponibles.length; i++) {
            mensaje += "\n ("+(i+1)+") " + listaProductosDisponibles[i].nombre;
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


