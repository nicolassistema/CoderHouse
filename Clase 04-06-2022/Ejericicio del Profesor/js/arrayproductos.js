function creoID() {
    return parseInt(Math.random() * 10000)
}

function agregarProducto() {
    let nombre = prompt("Ingrese el nombre del producto:")
    let importe = prompt("Ingrese el importe:")
        productos.push(new Producto(creoID(), nombre, importe))
}

function buscarProducto() {
    debugger
    let prod = prompt("Ingrese el nombre del producto:")
        if (prod !== "") {
            let resultado = productos.find( p => p.id === prod.toUpperCase())
            console.table(resultado)
        } else {
            console.error("Ingrese un dato válido.")
        }
}

function filtrarProducto() {
    //debugger
    let nom = prompt("Ingrese parte del nombre de los productos a filtrar:")
    //let resultado = productos.filter(p => p.id >= codigo ) //CODIGO
    let resultado = productos.filter(p => p.nombre.includes(nom.toUpperCase()))
        console.table(resultado)
}

function existeProducto() {
    let cod = parseInt(prompt("Ingrese el código de producto:"))
    let existe = productos.some(p => p.id === cod)
        if (existe) {
            console.log("Existe el código de producto")
        } else {
            console.warn("No se encontró el código ingresado")
        }

}

function proyectarIncremento(porc) {
    let proyeccion = productos.map( p => {
                                            return {
                                                id: p.id,
                                                nombre: p.nombre,
                                                importe: p.importe,
                                                proyeccion: (p.importe * porc)
                                            }
                                    })
        console.clear()
        console.log("PROYECCIÓN INCREMENTAL DE", porc, "%")
        console.table(proyeccion)
}

function calcularCarrito() {
    debugger
    console.log("TOTAL DEL CARRITO")
    let total = carrito.reduce( (acc, c) => acc + c.importe, 0)
        console.table(total)
}






//A MODO DE EJEMPLO
// function iterarArray() {
//     productos.forEach(elemento => console.table(elemento))

//     productos.forEach(function (elemento) {
//         console.table(elemento)
//     })
// }

//OLD SCHOOL
// function buscarElemento() {
//     for (i = 0; i < Array.length; i++) {
//         if (array[i] ==="valor buscado") {
//             nuevoArray.push(array[i])
//         }
//     }
//     return nuevoArray
// }



generadorAutomatico()

//FUNCIONES QUE SE USAN PARA LLENAR AUTOMÁTICAMENTE LOS ARRAYS DE OBJETOS A USAR
function generadorAutomatico() {
    productos.push(new Producto(1234, "NOTEBOOK EXO E17", 29950))
    productos.push(new Producto(2345, "MACBOOK AIR 13", 249900))
    productos.push(new Producto(3456, "LENOVO IDEAPAD 13", 199949))
    productos.push(new Producto(4567, "IPAD PRO 12", 219890))
    productos.push(new Producto(5678, "LENOVO GAMER 15", 409090))
    productos.push(new Producto(6789, "MACBOOK PRO 15", 459000))
    productos.push(new Producto(7890, "ASUS GAMING PRO 17", 679800))
    //productos.push(new Producto(7890, "IPAD MINI 7.9", 189900))
}

function generarCarrito() {
    carrito.push(new Producto(1234, "NOTEBOOK EXO E17", 29950))
    carrito.push(new Producto(2345, "MACBOOK AIR 13", 249900))
    carrito.push(new Producto(3456, "LENOVO IDEAPAD 13", 199949))
}

function recorrerArrayProductos() {
    debugger
    for (let elemento of productos) {
        console.table(elemento)
    }
}

const numero = 100_000_000_000_000