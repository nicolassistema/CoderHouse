/*
ALGUNOS DATOS PARA LA FORMULA
=============================
capital --> 100000
TNA (tasa nominal anual) -> 47%
plazo --> 30 dias (Valores fijos en switch )

ALGUNOS METODOS
formula para obtener el interes ganado  --> (((100000 * 47) / 100) / 12)  
formula para obtener el interes ganado + capital invertido   --> (((100000 * 47) / 100) / 12) + 100000

1) ingrese nombre
2) ingrese apelldio
3) ingrese ingreso neto

4) Selecione producto
    pulsar numero xx para finalizar seleccion de productos

    al seleccionar un porducto restando de la lista original y agregando a una lista nueva

    agregar array de busqueda y filtrado



    1) ingrese barrio en el que vive


    lista de sucursales
     ojeto sucursal
             nombreSucursal
             barrioSucursal


*/

class Producto {
    constructor(nombre, numeroCalculo) {
        this.nombre = nombre;
        this.numeroCalculo = numeroCalculo;
    }
}

class Sucursales {
    constructor(nombreSucursal, nombreBarrio) {
        this.nombreSucursal = nombreSucursal
        this.nombreBarrio = nombreBarrio;
    }
}


class Empleado {
    constructor(nombre,apellido,ingresoNeto,montoPrestamo,montoVisa,montoMaster, montoCuentaCorriente, cajaAhorro){
        this.nombre=nombre
        this.apellido=apellido
        this.ingresoNeto=ingresoNeto
        this.montoPrestamo=montoPrestamo
        this.montoVisa=montoVisa
        this.montoMaster=montoMaster
        this.montoCuentaCorriente=montoCuentaCorriente
        this.cajaAhorro=cajaAhorro
    }
}

