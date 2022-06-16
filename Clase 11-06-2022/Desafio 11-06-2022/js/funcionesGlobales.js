const listaEmpleados = [];
const listFila = [];


const tabla = document.getElementById("tabla")
let acum = 0

function agregarFila() {
    //  debugger
   
    let fila = ""
    fila += `<tr class="tr" id="tr${acum}">`
    fila += `<td class="td"> <input type="text" class="nombreEmpleado" placeholder="juan"> </td> `
    fila += `<td class="td"> <input type="text" class="apellidoEmpleado" placeholder="gomez"> </td> `
    fila += `<td class="td"> <input type="text" class="ingresoNeto" placeholder="100000"> </td> `
    fila += `<td class="td"> <input type="checkbox" class="chkMontoPrestamo" onclick="checkMontoPP()"> <p class="outPutMontoPP"></p> </td> `
    fila += `<td class="td"> <input type="checkbox" class="cc" > <p class="outPutCC"></p></td> `
    fila += `<td class="td"> <input type="checkbox" class="ca" > <p class="outPutCA"></p></td> `
    fila += `<td class="td"> <input type="checkbox" class="tv" > <p class="outPutTV"></p></td> `
    fila += `<td class="td"> <input type="checkbox" class="tm" ><p class="outPutTM"></p> </td> `
    fila += `<td class="td"> <button role="button" onclick='eliminarFila("tr${acum}")'  class="primary" >X</button> </td>` 
    fila += "</tr> "
    tabla.innerHTML += fila
    listFila.push(fila)
   // listaEmpleados.push(new Empleado("", "", 0, 0, 0, 0, 0, false))
    acum++
}


function eliminarFila(id) {
    let elemento = document.getElementById(id)
}





function checkMontoPP() {
    //debugger
    const chkMontoPrestamo = document.getElementById("chkMontoPrestamo")
    const outPutMontoPP = document.getElementById("outPutMontoPP")
    //let calcPrestamo = calculoPrestamo()
    if (chkMontoPrestamo.checked) {
        outPutMontoPP.innerText = "monto de ejempo " + calculoPrestamo();
    } else {
        outPutMontoPP.innerText = "";
    }
}


function calculoPrestamo() {
    let ingresoNeto = parseInt(document.getElementById("ingresoNeto").value)
    return ingresoNeto - ((ingresoNeto * PRESTAMO) / 100)
}


function listarTr() {
    return document.getElementsByClassName("tr");
}

function listarTd() {
    return document.getElementsByClassName("td");
}

function listar() {
    const lista = listarTr();

    for (const list of lista) {
        console.log(list)
    }

}

function enviarListaMasiva() {
    debugger
    const listaNombre = document.getElementsByClassName("nombreEmpleado")
    const listaApellido = document.getElementsByClassName("apellidoEmpleado")
    const listaingresoNeto = document.getElementsByClassName("ingresoNeto")
    const listaMontoPp = document.getElementsByClassName("outPutMontoPP")
    const listaMontoTv = document.getElementsByClassName("outPutTV")
    const listaMontoTm = document.getElementsByClassName("outPutTM")
    const listaMontoCc = document.getElementsByClassName("outPutCC")
    const listaCa = document.getElementsByClassName("ca")
    


    for (let i = 0; i < acum; i++) {
        
     console.log(listaNombre[i].value + listaApellido[i].value +listaingresoNeto[i].value + listaMontoPp[i].value + listaMontoTv[i].value + listaMontoTm[i].value + listaMontoCc[i].value + listaCa[i].value)

    }




   // const tr = listarTr()
   // return tr[0].getElementsByClassName("td")

    //const tr = listarTr()
  /*  for (let i = 0; i < listaEmpleados.length; i++) {
        listaEmpleados[i].nombre = tr[i].document.getElementById("nombreEmpleado").value
        listaEmpleados[i].apellido = tr[i].document.getElementById("apellidoEmpleado").value
        listaEmpleados[i].ingresoNeto = tr[i].document.getElementById("ingresoNeto").value
        listaEmpleados[i].montoPrestamo = tr[i].document.getElementById("outPutMontoPP").value
        listaEmpleados[i].montoVisa = tr[i].document.getElementById("tv").value
        listaEmpleados[i].montoMaster = tr[i].document.getElementById("tm").value
        listaEmpleados[i].montoCuentaCorriente = tr[i].document.getElementById("cc").value
        listaEmpleados[i].cajaAhorro = tr[i].document.getElementById("ca").value
    }
    */
}



//<p id='outPutMontoPrestamo'></p><


// const listaProductosNueva = [];
// ingresarDatos();

// function ingresarDatos() {
//     let nombre = ingresarNombre()
//     let apellido = ingresarApellido()
//     let ingresoNeto = ingresarIngresoNeto();
//     let montoDisponiblePrestamo;
//     let montoDisponibleVisaTarje;
//     let montoDisponibleMasterTarje;
//     let montoDisponibleCC;
//     let mensaje = "";

//     do {

//     } while (seleccionarProducto());

//     mensaje += "Nombre: " + nombre
//     mensaje += "\nApellido: " + apellido
//     mensaje += "\nIngreso Neto: " + ingresoNeto

//     for (let i = 0; i < listaProductosNueva.length; i++) {
//         if (listaProductosNueva[i].nombre == "Prestamo") {
//             montoDisponiblePrestamo = ingresoNeto - ((ingresoNeto * listaProductosNueva[i].numeroCalculo) / 100)
//             mensaje += "\nMonto Disponible para prestamo: " + montoDisponiblePrestamo
//         }
//         if (listaProductosNueva[i].nombre == "Tarjeta Visa") {
//             montoDisponibleVisaTarje = ingresoNeto - ((ingresoNeto * listaProductosNueva[i].numeroCalculo) / 100)
//             mensaje += "\nMonto Disponible tarjeta Visa: " + montoDisponibleVisaTarje
//         }
//         if (listaProductosNueva[i].nombre == "Tarjeta Master") {
//             montoDisponibleMasterTarje = ingresoNeto - ((ingresoNeto * listaProductosNueva[i].numeroCalculo) / 100)
//             mensaje += "\nMonto Disponible tarjeta Master: " + montoDisponibleMasterTarje
//         }
//         if (listaProductosNueva[i].nombre == "Cuenta Corriente") {
//             montoDisponibleCC = ingresoNeto - ((ingresoNeto * listaProductosNueva[i].numeroCalculo) / 100)
//             mensaje += "\nMonto Disponible Cuenta Corriente: " + montoDisponibleCC
//         }
//         if (listaProductosNueva[i].nombre == "Caja de Ahorro") {
//             montoDisponibleCC = ingresoNeto - ((ingresoNeto * 10) / 100)
//             mensaje += "\nDisponible de una Caja de Ahorro Bonificada!!!!"
//         }
//     }
//     alert(mensaje);
//     if (confirm("Desea buscar sucursal cercana?")) {
//         let opcionBuscar = "";
//         do {
//             opcionBuscar = prompt(" Selecciones buscar por: \n (1) Buscar por barrio \n (2) Buscar por Sucursal \n")
//             switch (opcionBuscar) {
//                 case "1":
//                     alert(buscarPorBarrio())
//                     break;
//                 case "2":
//                     alert(buscarPorSucursal())
//                     break;
//                 default:
//                     alert("Opcion invalida.")
//                     break;
//             }
//         } while (opcionBuscar != "1" && opcionBuscar != "2");
//     }
//     alert("Gracias vuelvas prontos!");
// }


// function buscarPorBarrio() {
//     debugger
//     let mensaje = "";
//     let nombreBarrio = prompt("ingrese barrio")
//     const lista = listaSucursales.filter((el) => { ////retorna array filtrado //array vacio
//         return el.nombreBarrio == nombreBarrio
//     })
//     for (const barrio of lista) {
//         mensaje += barrio.nombreSucursal + " \n";
//     }
//     if (mensaje == "") {
//         mensaje = "No hay sucursal para el barrio que eligio"
//     }
//     return mensaje;
// }


// function buscarPorSucursal() {
//     let nombreSucursal = prompt("Ingresar nombre sucursal")
//     let mensaje = "";
//     const lista = listaSucursales.find((el) => { ////retorna el elemento del array
//         return el.nombreSucursal == nombreSucursal
//     })

//     if (lista != undefined) {
//         mensaje = lista.nombreBarrio + " \n";
//     }


//     if (mensaje == "") {
//         mensaje = "No hay barrio para la sucursal que eligio"
//     }
//     return mensaje;
// }


// function restarProductos(opcion) {
//     opcion = opcion - 1
//     for (let i = 0; i < listaProductosDisponibles.length; i++) {
//         if (opcion == i) {
//             listaProductosDisponibles.splice(opcion, 1);
//             return i;
//         }
//     }
//     return "n";
// }


// function ingresarNombre() {
//     let nombre = prompt("Ingresar Nombre")
//     while (!validarNombre(nombre)) {
//         nombre = prompt("Lo ingresado no es correcto. Por favor ingresar el nombre ")
//     }
//     return nombre;
// }


// function ingresarApellido() {
//     let apellido = prompt("Ingresar apellido")
//     while (!validarNombre(apellido)) {
//         apellido = prompt("Lo ingresado no es correcto. Por favor ingresar el apellido ")
//     }
//     return apellido;
// }


// function ingresarIngresoNeto() {
//     let numero;
//     numero = parseInt(prompt("Por favor ingresar ingreso neto "))
//     while (!validarNumeroPositivo(numero)) {
//         numero = parseInt(prompt("Lo ingresado no es correcto. Por favor ingresar ingreso neto "))
//     }
//     return numero;
// }

// function seleccionarProducto() {
//     let opcion;
//     let mensaje = "";
//     debugger
//     const listaAux = listaProductosDisponibles.slice()//copia la lista y la guarda en otra lista
//     Recorre la lista de prodcutos disponibles y va sumando al mensaje
//     if (listaProductosDisponibles.length > 0) {
//         for (let i = 0; i < listaProductosDisponibles.length; i++) {
//             mensaje += "\n (" + (i + 1) + ") " + listaProductosDisponibles[i].nombre;
//         }
//         mensaje += "\n ::::Pulsar s para finalizar::::";
//         opcion = prompt("Por favor ingresar alguna de las siguientes opciones en numero: " + mensaje)
//         if (opcion.toLocaleLowerCase() == "s") {
//             return false;
//         } else {
//             opcion = restarProductos(parseInt(opcion))
//             while (!validarNumeroPositivo(opcion + 1)) {
//                 opcion = prompt("La opcion no es incorrecto. Por favor ingresar alguna de las siguientes opciones en numero: " + mensaje)

//                 if (opcion.toLocaleLowerCase() == "s") {
//                     return false;
//                 } else {
//                     opcion = restarProductos(parseInt(opcion))
//                 }
//             }
//             agregarProducto(listaProductosNueva, listaAux[opcion])
//             return true;
//         }
//     } else {
//         return false;
//     }
// }


// function agregarProducto(listaProducto, producto) {
//     listaProducto.push(producto);
// }


// function validarNumeroPositivo(numero) {
//     let flag = false;
//     if (!isNaN(numero)) {
//         if (numero > 0) {
//             flag = true;
//         }
//     }
//     return flag;
// }

// function validarNombre(nombre) {
//     let flag = false;
//     if (isNaN(nombre)) {
//         flag = true;
//     }
//     return flag;
// }


