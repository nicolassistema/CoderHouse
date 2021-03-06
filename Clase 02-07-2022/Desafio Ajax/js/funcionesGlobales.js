//init
//let listaEmpleados = [];
let listaEmpresas = [];

let listaEnvioMasivo = [];
const tabla = document.getElementById("tabla");
const tablaDos = document.getElementById("tablaDos");

harcodEmpresas()


const lista = document.querySelector("#listado")

console.log(fetch('https://jsonplaceholder.typicode.com/posts') 
    .then ((resp)=>resp.json())
    .then ((data)=>{
        data.forEach((post) => {
            const li = document.createElement('li')
            li.innerHTML=`
            <h4>${post.title}</h4>
            <p>${post.body}</p>
            `
            lista.append(li)
        });
     
    }) 
)
   



// const eventoFuturo = (res) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             res ? resolve('Promesa resuelta') : reject('Promesa rechazada')
//         }, 2000)

//     })
// }
/*

const DB = [
{id:1 , nombre:'producto1', precio: 5000},
{id:2 , nombre:'producto2', precio: 6000},
{id:3 , nombre:'producto3', precio: 7000},
]



const pedirProducto=()=>{

    return new Promise ((resolve,reject)=>{
        setTimeout(()=>{
            resolve(DB)
        },3000)
    })

}

let productos = []
 const renderProductos  = (arr) =>{
    for (let item of arr) {
        console.log(item)
    }
 }


 pedirProducto()
    .then((res)=>{
        productos = res
        renderProductos(productos)   
     })

*/
// eventoFuturo(true)
//     .then((response) => {
//         console.log(response)
//     })
//     .catch((error) => {
//         console.log(error)
//     })
//     .finally(()=>{
//         console.log("Fin del proceso")
//     })



// eventoFuturo(false)
//     .then((response) => {
//         console.log(response)
//     })
//     .catch((error) => {
//         console.log(error)
//     })









//Arma en HTML la fila y luego restartea los controles de la misma y deja disponible los onClick de sus botones
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
        // if (confirm("Esta seguro que desea eliminar el empleado?")) {
        //     fila.remove();
        // }

        Swal.fire({
            title: 'Esta seguro de Eliminar al empleado?',
            text: "Luego de eliminar al empleado no podra recuperarlo",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'ACEPTAR'
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire(
                    'Borrado',
                    'El empleado se borro.',
                    'success'
                )
                fila.remove()
            }
        })
    })


    const prestamoIn = fila.getElementsByClassName("chkMontoPrestamo")[0]
    const tarjeVisaIn = fila.getElementsByClassName("tv")[0]
    const tarjeMasterIn = fila.getElementsByClassName("tm")[0]
    const CuentaCorrienteIn = fila.getElementsByClassName("cc")[0]
    const cajaAhorroIn = fila.getElementsByClassName("ca")[0]

    prestamoIn.disabled = true
    tarjeVisaIn.disabled = true
    tarjeMasterIn.disabled = true
    CuentaCorrienteIn.disabled = true
    cajaAhorroIn.disabled = true

    fila.getElementsByClassName("ingresoNeto")[0].addEventListener("mousemove", () => {
        //debugger
        let ingresoNetoIn = fila.getElementsByClassName("ingresoNeto")[0].value
        let prestamoOut = fila.getElementsByClassName("outPutMontoPP")[0]
        let cc = fila.getElementsByClassName("outPutCC")[0]
        let tv = fila.getElementsByClassName("outPutTV")[0]
        let tm = fila.getElementsByClassName("outPutTM")[0]
        let cajaAhorro = fila.getElementsByClassName("outPutCA")[0]


        if (!validarNumeroPositivo(ingresoNetoIn) || ingresoNetoIn == "") {
            prestamoIn.checked = false
            tarjeVisaIn.checked = false
            tarjeMasterIn.checked = false
            CuentaCorrienteIn.checked = false
            cajaAhorroIn.checked = false

            fila.getElementsByClassName("outPutMontoPP")[0].style.color = "#c8c4d1"
            fila.getElementsByClassName("outPutCC")[0].style.color = "#c8c4d1"
            fila.getElementsByClassName("outPutTV")[0].style.color = "#c8c4d1"
            fila.getElementsByClassName("outPutTM")[0].style.color = "#c8c4d1"
            fila.getElementsByClassName("outPutCA")[0].style.color = "#c8c4d1"

            prestamoIn.disabled = true;
            tarjeVisaIn.disabled = true
            tarjeMasterIn.disabled = true
            CuentaCorrienteIn.disabled = true
            cajaAhorroIn.disabled = true

            cajaAhorro.innerText = "s/Caja de Ahorro"
            prestamoOut.innerText = "$ 0"
            cc.innerText = "$ 0"
            tv.innerText = "$ 0"
            tm.innerText = "$ 0"
        } else {
            prestamoIn.disabled = false;
            tarjeVisaIn.disabled = false
            tarjeMasterIn.disabled = false
            CuentaCorrienteIn.disabled = false
            cajaAhorroIn.disabled = false
        }
    })



    fila.getElementsByClassName("chkMontoPrestamo")[0].addEventListener("click", () => {
        const prestamoIn = fila.getElementsByClassName("chkMontoPrestamo")[0]
        let ingresoNetoIn = fila.getElementsByClassName("ingresoNeto")[0].value
        let prestamoOut = fila.getElementsByClassName("outPutMontoPP")[0]
        if (prestamoIn.checked) {
            prestamoOut.innerText = "$ " + (!isNaN(calculoPrestamo(ingresoNetoIn)) ? calculoPrestamo(ingresoNetoIn) : '0');
            fila.getElementsByClassName("outPutMontoPP")[0].style.color = "#15f75b"
        } else {
            prestamoOut.innerText = "$ 0"
            fila.getElementsByClassName("outPutMontoPP")[0].style.color = "#c8c4d1"
        }
    })


    fila.getElementsByClassName("tv")[0].addEventListener("click", () => {
        const tarjeVisaIn = fila.getElementsByClassName("tv")[0]
        let ingresoNetoIn = fila.getElementsByClassName("ingresoNeto")[0].value
        const tv = fila.getElementsByClassName("outPutTV")[0]
        if (tarjeVisaIn.checked) {
            tv.innerText = "$ " + (!isNaN(calculoTarjeta(ingresoNetoIn)) ? calculoTarjeta(ingresoNetoIn) : "0");
            fila.getElementsByClassName("outPutTV")[0].style.color = "#15f75b"
        } else {
            tv.innerText = "$ 0"
            fila.getElementsByClassName("outPutTV")[0].style.color = "#c8c4d1"
        }
    })



    fila.getElementsByClassName("tm")[0].addEventListener("click", () => {
        const tarjeMasterIn = fila.getElementsByClassName("tm")[0]
        const ingresoNetoIn = fila.getElementsByClassName("ingresoNeto")[0].value
        const tm = fila.getElementsByClassName("outPutTM")[0]
        if (tarjeMasterIn.checked) {
            tm.innerText = "$ " + (!isNaN(calculoTarjeta(ingresoNetoIn)) ? calculoTarjeta(ingresoNetoIn) : "0");
            fila.getElementsByClassName("outPutTM")[0].style.color = "#15f75b"
        } else {
            tm.innerText = "$ 0"
            fila.getElementsByClassName("outPutTM")[0].style.color = "#c8c4d1"
        }
    })



    fila.getElementsByClassName("cc")[0].addEventListener("click", () => {
        const CuentaCorrienteIn = fila.getElementsByClassName("cc")[0]
        const ingresoNetoIn = fila.getElementsByClassName("ingresoNeto")[0].value
        const cc = fila.getElementsByClassName("outPutCC")[0]
        if (CuentaCorrienteIn.checked) {
            cc.innerText = "$ " + (!isNaN(calculoCuentaCorriente(ingresoNetoIn)) ? calculoCuentaCorriente(ingresoNetoIn) : "0");
            fila.getElementsByClassName("outPutCC")[0].style.color = "#15f75b"
        } else {
            cc.innerText = "$ 0"
            fila.getElementsByClassName("outPutCC")[0].style.color = "#c8c4d1"
        }
    })


    fila.getElementsByClassName("ca")[0].addEventListener("click", () => {
        const ca = fila.getElementsByClassName("ca")[0]
        let outPutCA = fila.getElementsByClassName("outPutCA")[0]
        if (ca.checked) {
            outPutCA.innerText = "c/Caja de Ahorro";
            outPutCA.style.color = "#15f75b"
        } else {
            outPutCA.innerText = "s/Caja de Ahorro";
            outPutCA.style.color = "#c8c4d1"
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


//Levanta todo los datos que se cargaron y los manda al local Storage.  Valida campos obligatorios
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
            const listaEmpresas = obtenerEmpresas() || [] //Asignacion Condicional
            localStorage.removeItem("envioMasivo")
            let envioMasivo = new EnvioMasivo(nombreEmpresa, listaEmpleados)
            listaEmpresas.push(envioMasivo)
            guardar(listaEmpresas)
            let mensaje = ""
            for (const item of listaEmpleados) {
                mensaje += `<tr><td> ${item.nombre}</td><td> ${item.apellido}</td></tr>`
            }
            Swal.fire({
                icon: "success",
                title: `La lista de empleados de la empresa ${nombreEmpresa} se genero exitosamente`,
                html: `<table border = "1"><thead><tr><th>nombre</th><th>apellido</th></tr></thead><tbody>${mensaje}</tbody></table>`
            }).then(() => {
                listaEmpleados = [];
            })
            //alert(mostrarMensaje(listaEmpleados, nombreEmpresa))
            // listaEmpleados = [];
            tabla.innerHTML = ""
            document.getElementsByClassName("nombreEmpresa")[0].value = ""

        } else {
            Swal.fire({
                icon: "error",
                title: "Por favor cargar campos obligatorios"
            })
        }
    } else {
        Swal.fire({
            icon: "error",
            title: "No ingreso ningun registro. Por favor cargar por lo menos un Empleado",
            html: `sdadasdas`
        })
    }
}


//Valida todos los campos
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

//Guarda objeto en localstorage
function guardar(envioMasivo) {
    let str = JSON.stringify(envioMasivo)
    localStorage.setItem("envioMasivo", str)
}


//harcodea empresas
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

//obtiene lista de empresas
function obtenerEmpresas() {
    const listaDeCargaMasiva = JSON.parse(localStorage.getItem("envioMasivo"))
    if (!!listaDeCargaMasiva) {
        return listaDeCargaMasiva
    }
    return false
}

//obtiene empresa por nombre
function obtenerCargaMasiva(nombreEmpresa) {
    const listaDeCargaMasiva = JSON.parse(localStorage.getItem("envioMasivo"))
    for (item of listaDeCargaMasiva) {
        if (nombreEmpresa == item.nombreEmpresa) {
            return item
        }
    }
    return false
}

//carga toda la lista al local storaje
function obtenerCargasMasivaTodas() {
    console.log("entro a la funcion")
    const listaDeCargaMasiva = JSON.parse(localStorage.getItem("envioMasivo"))
    if (!!listaDeCargaMasiva) {
        return listaDeCargaMasiva
    }
    return false
}

//Elimina empresa por nombre
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


//carga lista de empesa con detalle
function cargaTablaEmpresas() {
    let listaEmpresas = obtenerCargasMasivaTodas()
    let html = "";
    tablaDos.innerHTML = ""
    console.log(listaEmpresas)
    for (let item of listaEmpresas) {
        let filaEmpresas = document.createElement("tr")
        let html = detalleEmpresa(item.listaEmpleados)
        let columna = document.createElement("td")
        let boton = document.createElement("button")
        boton.innerText = `Detalle`
        boton.className = "detailButton"
        boton.addEventListener("click", () => {//este boton se prepara para pulsar
            mostrarDetalle(html)
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


function detalleEmpresa(itemEmpleados) {
    let mensaje = ""
    for (let item of itemEmpleados) {
        mensaje += visualizarDetalle(item)
    }
    return mensaje
}

//desestructuracion
function visualizarDetalle({ nombre, apellido, ingresoNeto, montoPrestamo, montoCuentaCorriente, cajaAhorro, montoVisa, montoMaster }) {

    //aca se debe armar el hmtl
    //Aca hay ternarios
    let html = `
    <tr>
        <th>${nombre}</th>
        <th>${apellido}</th>
        <th>${ingresoNeto}</th>
        <th>${montoPrestamo != 0 ? montoPrestamo : "No Aplica"}</th>
        <th>${montoCuentaCorriente != 0 ? montoCuentaCorriente : "No Aplica"}</th>
        <th>${cajaAhorro}</th>
        <th>${montoVisa != 0 ? montoVisa : "No Aplica"}</th>
        <th>${montoMaster != 0 ? montoMaster : "No Aplica"}</th>
    </tr>`
    return html
}

function mostrarDetalle(intHtml) {
    let html = `<table border = "1">
<thead><tr><th>nombre</th><th>apellido</th><th>ingreso neto</th><th>Monto Prestamo</th><th>Monto Cuenta Corriente</th><th>Caja de ahorro</th><th>Tarjeta Visa</th><th>Tarjeta Master</th></tr></thead>`
    html += `<tbody>`
    html += intHtml
    html += `</table><tbody>`
    //aca va el sweet alert donde solo debe recibir html para mostrar

    Swal.fire({
        icon: "info",
        title: "Detalle de la empresa",
        html: html,
        width: 1000
    })

}




cargaTablaEmpresas()


//refresca lista de empesas cargadas en detalle
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


