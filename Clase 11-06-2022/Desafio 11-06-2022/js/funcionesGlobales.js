//init
const listaEmpleados = [];
const listaEnvioMasivo = [];
const tabla = document.getElementById("tabla");


function agregarFila() {
    //  debugger

    let fila = document.createElement("tr")
    fila.innerHTML = `<td class="td"> <input type="text" class="nombreEmpleado" placeholder="" > </td> 
<td class="td"> <input type="text" class="apellidoEmpleado" placeholder=""> </td> 
<td class="td"> <input type="text" class="ingresoNeto" placeholder=""> </td> 
<td class="td"> <input type="checkbox" class="chkMontoPrestamo"> <p class="outPutMontoPP">$ 0</p> </td> 
<td class="td"> <input type="checkbox" class="cc" > <p class="outPutCC">$ 0</p></td> 
<td class="td"> <input type="checkbox" class="ca" > <p class="outPutCA">s/ Caja de Ahorro</p></td> 
<td class="td"> <input type="checkbox" class="tv" > <p class="outPutTV">$ 0</p></td> 
<td class="td"> <input type="checkbox" class="tm" ><p class="outPutTM">$ 0</p> </td> 
<td class="td"> <button role="button"  class="rmvButton" >X</button> </td>`

    fila.getElementsByClassName("rmvButton")[0].addEventListener("click", () => {
        // if(confirm("Esta seguro que desea eliminar el empleado?")){
        fila.remove();
        // }
    })



    fila.getElementsByClassName("ingresoNeto")[0].addEventListener("change", () => {

        const ingresoNetoIn = fila.getElementsByClassName("ingresoNeto")[0].value
        const prestamoOut = fila.getElementsByClassName("outPutMontoPP")[0]
        const cc = fila.getElementsByClassName("outPutCC")[0]
        const tv = fila.getElementsByClassName("outPutTV")[0]
        const tm = fila.getElementsByClassName("outPutTM")[0]

        prestamoOut.innerText = "$ " + calculoPrestamo(ingresoNetoIn);
        cc.innerText = "$ " + calculoCuentaCorriente(ingresoNetoIn);
        tv.innerText = "$ " + calculoTarjeta(ingresoNetoIn);
        tm.innerText = "$ " + calculoTarjeta(ingresoNetoIn);

    })


    fila.getElementsByClassName("chkMontoPrestamo")[0].addEventListener("click", () => {

        const prestamoIn = fila.getElementsByClassName("chkMontoPrestamo")[0]
        if (prestamoIn.checked) {

            fila.getElementsByClassName("outPutMontoPP")[0].style.color = "black"
        } else {
            fila.getElementsByClassName("outPutMontoPP")[0].style.color = "#c8c4d1"
        }
    })

    fila.getElementsByClassName("tv")[0].addEventListener("click", () => {
        const tarjeVisaIn = fila.getElementsByClassName("tv")[0]
        if (tarjeVisaIn.checked) {
            fila.getElementsByClassName("outPutTV")[0].style.color = "black"
        } else {
            fila.getElementsByClassName("outPutTV")[0].style.color = "#c8c4d1"
        }
    })


    fila.getElementsByClassName("tm")[0].addEventListener("click", () => {
        const tarjeMasterIn = fila.getElementsByClassName("tm")[0]
        if (tarjeMasterIn.checked) {
            fila.getElementsByClassName("outPutTM")[0].style.color = "black"
        } else {
            fila.getElementsByClassName("outPutTM")[0].style.color = "#c8c4d1"
        }
    })

    fila.getElementsByClassName("cc")[0].addEventListener("click", () => {
        const ingresoNetoIn = fila.getElementsByClassName("ingresoNeto")[0].value
        const CuentaCorrienteIn = fila.getElementsByClassName("cc")[0]
        const CuentaCorrienteInOut = fila.getElementsByClassName("outPutCC")[0]
        if (CuentaCorrienteIn.checked) {
            fila.getElementsByClassName("outPutCC")[0].style.color = "black"
        } else {
            fila.getElementsByClassName("outPutCC")[0].style.color = "#c8c4d1"
        }
    })

    fila.getElementsByClassName("ca")[0].addEventListener("click", () => {
        const ca = fila.getElementsByClassName("ca")[0]
        const outPutCA = fila.getElementsByClassName("outPutCA")[0]
        if (ca.checked) {
            outPutCA.innerText = "c/Caja de Ahorro";
        } else {
            outPutCA.innerText = "s/Caja de Ahorro";
        }
    })
    tabla.append(fila)

}



function calculoPrestamo(entradaIngresoNeto) {
    let ingresoNeto = parseInt(entradaIngresoNeto)
    return 3 * ((ingresoNeto * PRESTAMO) / 100)
}


function calculoTarjeta(entradaIngresoNeto) {
    let ingresoNeto = parseInt(entradaIngresoNeto)
    return 3 * ((ingresoNeto * TARJETA) / 100)
}


function calculoCuentaCorriente(entradaIngresoNeto) {
    let ingresoNeto = parseInt(entradaIngresoNeto)
    return ((ingresoNeto * CC) / 100)
}


function enviarListaMasiva() {
    // debugger
    const listaNombre = document.getElementsByClassName("nombreEmpleado")
    const listaApellido = document.getElementsByClassName("apellidoEmpleado")
    const listaingresoNeto = document.getElementsByClassName("ingresoNeto")
    const listaMontoPp = document.getElementsByClassName("outPutMontoPP")
    const listaMontoTv = document.getElementsByClassName("outPutTV")
    const listaMontoTm = document.getElementsByClassName("outPutTM")
    const listaMontoCc = document.getElementsByClassName("outPutCC")
    const listaCa = document.getElementsByClassName("outPutCA")


    if (listaNombre.length > 0) {
        if (validadorGeneral()) {

            for (let i = 0; i < listaNombre.length; i++) {
                listaEmpleados.push(new Empleado(listaNombre[i].value,
                    listaApellido[i].value,
                    listaingresoNeto[i].value,
                    listaMontoPp[i].innerText.slice(2),
                    listaMontoTv[i].innerText.slice(2),
                    listaMontoTm[i].innerText.slice(2),
                    listaMontoCc[i].innerText.slice(2),
                    listaCa[i].innerText))

            }
            listaEnvioMasivo.push(new EnvioMasivo("pepe", listaEmpleados))
            alert("La lista de empleados de genero exitosamente")
        } else {

            alert("Por favor cargar campos obligatorios")
        }
    }else{
        alert("No ingreso ningun registro. Por favor cargar por lo menos un Empleado")
    }


}


function validadorGeneral() {

    const listaValidaciones = []
    const listaNombre = document.getElementsByClassName("nombreEmpleado")
    const listaApellido = document.getElementsByClassName("apellidoEmpleado")
    const listaingresoNeto = document.getElementsByClassName("ingresoNeto")

    for (let i = 0; i < listaNombre.length; i++) {
        if (!validarNombre(listaNombre[i].value)) {


            listaNombre[i].style.borderColor = "red";
            listaValidaciones.push(false)


        } else {
            listaNombre[i].style.borderColor = "black";
            listaValidaciones.push(true)
        }

        if (!validarNombre(listaApellido[i].value)) {
            listaApellido[i].style.borderColor = "red";
            listaValidaciones.push(false)
        } else {

            listaApellido[i].style.borderColor = "black";
            listaValidaciones.push(true)
        }

        if (!validarNumeroPositivo(listaingresoNeto[i].value)) {
            listaingresoNeto[i].style.borderColor = "red";
            listaValidaciones.push(false)
        } else {

            listaingresoNeto[i].style.borderColor = "black";
            listaValidaciones.push(true)
        }

    }
    for (listaValid of listaValidaciones) {
        if (!listaValid) {
            return listaValid;
        }
    }

    return true
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


function validarNumeroPositivo(numero) {
    let flag = false;
    if (!isNaN(numero)) {
        if (numero > 0) {
            flag = true;
        }
    }
    return flag;
}

function validarNombre(nombre) {
    let flag = false;
    if (isNaN(nombre)) {
        flag = true;
    }
    return flag;
}


