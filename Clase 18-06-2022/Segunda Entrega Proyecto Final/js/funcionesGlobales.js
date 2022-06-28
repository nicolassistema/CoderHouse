//init
//let listaEmpleados = [];
let listaEmpresas = [];

let listaEnvioMasivo = [];
const tabla = document.getElementById("tabla");
const tablaDos = document.getElementById("tablaDos");




function agregarFila() {
    //  debugger
    let fila = document.createElement("tr")
    fila.innerHTML = `
    <td class="td"> <input type="text" class="nombreEmpleado" placeholder="" title="Ingresar solo caracteres letras" > </td> 
    <td class="td"> <input type="text" class="apellidoEmpleado" placeholder="" title="Ingresar solo caracteres letras"> </td> 
    <td class="td"> <input type="text" class="ingresoNeto" placeholder="" title="Ingresar solo caracteres numeros positivos"> </td> 
    <td class="td"> <input type="checkbox" class="chkMontoPrestamo"> <p class="outPutMontoPP">$ 0</p> </td> 
    <td class="td"> <input type="checkbox" class="cc" > <p class="outPutCC">$ 0</p></td> 
    <td class="td"> <input type="checkbox" class="ca" > <p class="outPutCA">s/ Caja de Ahorro</p></td> 
    <td class="td"> <input type="checkbox" class="tv" > <p class="outPutTV">$ 0</p></td> 
    <td class="td"> <input type="checkbox" class="tm" ><p class="outPutTM">$ 0</p> </td> 
    <td class="td"> <button role="button"  class="rmvButton" >X</button> </td>
     `
    fila.getElementsByClassName("rmvButton")[0].addEventListener("click", () => {
        if (confirm("Esta seguro que desea eliminar el empleado?")) {
            fila.remove();
        }
    })

    fila.getElementsByClassName("ingresoNeto")[0].addEventListener("change", () => {
        //debugger
        const ingresoNetoIn = fila.getElementsByClassName("ingresoNeto")[0].value
        const prestamoOut = fila.getElementsByClassName("outPutMontoPP")[0]
        const cc = fila.getElementsByClassName("outPutCC")[0]
        const tv = fila.getElementsByClassName("outPutTV")[0]
        const tm = fila.getElementsByClassName("outPutTM")[0]

        if (validarNumeroPositivo(ingresoNetoIn) || ingresoNetoIn == "") {
            prestamoOut.innerText = "$ " + (!isNaN(calculoPrestamo(ingresoNetoIn)) ? calculoPrestamo(ingresoNetoIn) : '0');
            cc.innerText = "$ " + (!isNaN(calculoCuentaCorriente(ingresoNetoIn)) ? calculoCuentaCorriente(ingresoNetoIn) : "0");
            tv.innerText = "$ " + (!isNaN(calculoTarjeta(ingresoNetoIn)) ? calculoTarjeta(ingresoNetoIn) : "0");
            tm.innerText = "$ " + (!isNaN(calculoTarjeta(ingresoNetoIn)) ? calculoTarjeta(ingresoNetoIn) : "0");
        }
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
        const CuentaCorrienteIn = fila.getElementsByClassName("cc")[0]
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
    return (3 * ((ingresoNeto * PRESTAMO) / 100)).toFixed(2)
}


function calculoTarjeta(entradaIngresoNeto) {
    let ingresoNeto = parseInt(entradaIngresoNeto)
    return (3 * ((ingresoNeto * TARJETA) / 100)).toFixed(2)
}

function calculoCuentaCorriente(entradaIngresoNeto) {
    let ingresoNeto = parseInt(entradaIngresoNeto)
    return (((ingresoNeto * CC) / 100)).toFixed(2)
}



function enviarListaMasiva() {
   // debugger
   let listaEmpleados = [];
    const nombreEmpresa = document.getElementsByClassName("nombreEmpresa")[0].value
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


            const listaEmpresas = obtenerEmpresas()
            localStorage.removeItem("envioMasivo")
            //listaEnvioMasivo = []
            let envioMasivo = new EnvioMasivo(nombreEmpresa, listaEmpleados)
            listaEmpresas.push(envioMasivo)
            guardar(listaEmpresas)

            alert("La lista de empleados de genero exitosamente")
            alert(mostrarMensaje(listaEmpleados, nombreEmpresa))
            listaEmpleados = [];
            tabla.innerHTML = ""
            document.getElementsByClassName("nombreEmpresa")[0].value = ""

        } else {
            alert("Por favor cargar campos obligatorios")
        }
    } else {
        alert("No ingreso ningun registro. Por favor cargar por lo menos un Empleado")
    }
}


function validadorGeneral() {

    const listaValidaciones = []
    const listaNombre = document.getElementsByClassName("nombreEmpleado")
    const listaApellido = document.getElementsByClassName("apellidoEmpleado")
    const listaingresoNeto = document.getElementsByClassName("ingresoNeto")
    const nombreEmpresa = document.getElementsByClassName("nombreEmpresa")

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

    if (!validarNombreEmpresa()) {

        nombreEmpresa[0].style.borderColor = "red";
        listaValidaciones.push(false)
    } else {
        nombreEmpresa[0].style.borderColor = "black";
        listaValidaciones.push(true)
    }

    for (listaValid of listaValidaciones) {
        if (!listaValid) {
            return listaValid;
        }
    }
    return true
}


function guardar(envioMasivo) {
    let str = JSON.stringify(envioMasivo)
    localStorage.setItem("envioMasivo", str)
}



function harcodEmpresas() {
    if (obtenerEmpresas() == false) {
        // const listaEmpresasHarcod = []
        let listaEmpleadosHarcod = []
        listaEmpleadosHarcod.push(new Empleado("pedro", "gomez", "150000", "180000.00", "112500.00", "112500.00", "15000.00", "c/Caja de Ahorro"))
        listaEmpleadosHarcod.push(new Empleado("juan", "fernandez", "150000", "180000.00", "112500.00", "112500.00", "15000.00", "c/Caja de Ahorro"))
        listaEnvioMasivo.push(new EnvioMasivo("Empersa1", listaEmpleadosHarcod))
        listaEmpleadosHarcod = []
        listaEmpleadosHarcod.push(new Empleado("pepe", "lopez", "150000", "180000.00", "112500.00", "112500.00", "15000.00", "c/Caja de Ahorro"))
        listaEmpleadosHarcod.push(new Empleado("jose", "garcia", "150000", "180000.00", "112500.00", "112500.00", "15000.00", "c/Caja de Ahorro"))
        listaEnvioMasivo.push(new EnvioMasivo("Empersa2", listaEmpleadosHarcod))
        let str = JSON.stringify(listaEnvioMasivo)
        localStorage.setItem("envioMasivo", str)
    }
}

harcodEmpresas()

function obtenerEmpresas() {
    const listaDeCargaMasiva = JSON.parse(localStorage.getItem("envioMasivo"))
    if (!!listaDeCargaMasiva) {
        return listaDeCargaMasiva
    }
    return false
}

function obtenerCargaMasiva(nombreEmpresa) {
    const listaDeCargaMasiva = JSON.parse(localStorage.getItem("envioMasivo"))
    for (item of listaDeCargaMasiva) {
        if (nombreEmpresa == item.nombreEmpresa) {
            return item
        }
    }
    return false
}


function obtenerCargasMasivaTodas() {
    console.log("entro a la funcion")
    const listaDeCargaMasiva = JSON.parse(localStorage.getItem("envioMasivo"))
    if (!!listaDeCargaMasiva) {
        return listaDeCargaMasiva
    }
    return false
}


function eliminarCargaMasivaXNombreEmpresa(nombreEmpresa) {
    // debugger
    let empresa
    let listaDeCargaMasiva = JSON.parse(localStorage.getItem("envioMasivo"))
    for (item of listaDeCargaMasiva) {
        if (nombreEmpresa == item.nombreEmpresa) {
            if (listaDeCargaMasiva.length > 1) {
                empresa = item.nombreEmpresa
                listaDeCargaMasiva = listaDeCargaMasiva.filter(item => item.nombreEmpresa !== empresa)
                localStorage.removeItem("envioMasivo")
                guardar(listaDeCargaMasiva)
                return empresa
            } else {
                empresa = item.nombreEmpresa
                localStorage.removeItem("envioMasivo")
                return empresa
            }
        }
    }
    return false
}


function cargaTablaEmpresas() {
    let listaEmpresas = obtenerCargasMasivaTodas()
    let mensaje = "";
    tablaDos.innerHTML = ""
    console.log(listaEmpresas)
    for (let item of listaEmpresas) {
        let filaEmpresas = document.createElement("tr")
        let mensaje = detalleEmpresa(item.listaEmpleados)
        let columna = document.createElement("td")
        let boton = document.createElement("button")
        boton.innerText = `Detalle`
        boton.className = "detailButton"
        boton.addEventListener("click", () => {
            mostrarDetalle(mensaje)
        })
        columna.append(boton)
        columna.className = "td"
        filaEmpresas.innerHTML = `
        <td class="td"> <p> ${item.nombreEmpresa}</p> </td> 
        <td class="td"> <p> ${item.listaEmpleados.length}</p> </td> 
         `
        filaEmpresas.append(columna)
        tablaDos.append(filaEmpresas)
    }
}


function mostrarDetalle(item) {
    alert("mensaje: " + item)
}


function detalleEmpresa(lista) {
    let mensaje = ""
    for (let item of lista) {
        mensaje += visualizarDetalle(item)
    }
    return mensaje
}


function visualizarDetalle(item) {
      if(!!item){
        let mensaje = "";
        mensaje += "Nombre: " + item.nombre + "\n"
        mensaje += "Apellido: " + item.apellido + "\n"
        mensaje += "Ingreso Neto: " + item.ingresoNeto + "\n"
        mensaje += "Monto de Prestamo: " + item.montoPrestamo + "\n"
        mensaje += "Monto de Tarjeta Visa: " + item.montoVisa + "\n"
        mensaje += "Monto de Tarjeta Master: " + item.montoMaster + "\n"
        mensaje += "Monto de Tarjeta Master: " + item.montoCuentaCorriente + "\n"
        mensaje += "Monto de Tarjeta Master: " + item.cajaAhorro + "\n"
        return mensaje
    }
}


cargaTablaEmpresas()

function refrescarListaEmpresas() {
    tablaDos.innerHTML = ""
    cargaTablaEmpresas()
}


function mostrarMensaje(listaEmpleados, nombreEmpresa) {
    let mensaje = `Los siguientes empleados de la empresa ${nombreEmpresa} se dieron de alta en el banco: \n`
    for (item of listaEmpleados) {
        mensaje += "Nombre: " + item.nombre
        mensaje += "    Apellido: " + item.apellido + "\n"
    }
    return mensaje;
}


function validarNombreEmpresa() {
    if (document.getElementsByClassName("nombreEmpresa")[0].value == "") {
        return false
    }
    return true
}


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


