const IVA = 1.21
const paises = ['Argentina', 'Uruguay', 'Chile', 'Colombia', 'Venezuela', 'México']
//                   0           1         2          3           4          5

const productos = []
const carrito = []

function listarPaises() {
    //debugger
    for (let i = 0; i <= paises.length; i++) {
        console.log(paises[i])
    }
}

function agregarPais() {
        console.clear()
         debugger
        let nuevoPais = prompt("Ingrese el nuevo país a agregar:")
            paises.push(nuevoPais)
            console.table(paises)
}

function quitarPais() {
    // console.clear()
    // let indice = parseInt(prompt("Ingrese el índice del país a quitar:"))
    //     paises.splice(indice, 2)
    //     console.table(paises)
        console.clear()
        debugger
        let pais = prompt("Indique el país a quitar del Array:")
        let indice = paises.indexOf(pais)
            paises.splice(indice, 1)
            console.table(paises)
}

function buscarPais() {

}