/*
ALGUNOS DATOS PARA LA FORMULA
=============================
capital --> 100000
TNA (tasa nominal anual) -> 47%
plazo --> 30 dias (Valores fijos en switch )

ALGUNOS METODOS
formula para obtener el interes ganado  --> (((100000 * 47) / 100) / 12)  
formula para obtener el interes ganado + capital invertido   --> (((100000 * 47) / 100) / 12) + 100000
*/


//FUNCION CONSTRUCTORA
function PlazoFijo(capital, tna, plazo, iva) {
    this.capital = capital
    this.tna = tna
    this.plazo = plazo
    this.iva = iva

    this.interesMensual = function () {
        return (((this.capital * tna) / 100)) / 12;
    }

    this.interesMensualPorCantMeses = function(dias) {
 

        this.stock = this.stock - unidades
    }


    this.conversorPlazo = function (opcion) {
                
       


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



