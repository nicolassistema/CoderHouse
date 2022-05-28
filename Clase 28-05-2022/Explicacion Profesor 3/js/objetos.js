/*const persona1 = {
    nombre : "Nicolas",
    edad : 17,
    email : "nicolas@nicolas.com"
}

*/
const persona = {

//FUNCION CONSTRUCTORA
function Producto(nombre, stock, precio, iva) {
    this.nombre = nombre
    this.stock = stock
    this.precio = precio
    this.iva = iva

    this.precioFinal = function () {
        return this.precio * this.iva
    }

    this.descuentoStock = function(unidades) {
        this.stock = this.stock - unidades
    }
}


//CLASE JS
class Producto {
    constructor(nombre, stock, precio, iva) {
        this.nombre = nombre
        this.stock = stock
        this.precio = precio
        this.iva = iva
    }
    precioFinal() {
        return this.precio * this.iva
    }

    descuentoStock(unidades) {
        this.stock = this.stock - unidades
    }
}
