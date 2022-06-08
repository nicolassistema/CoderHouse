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


//Clases
class Persona {
    constructor(nombre, apellido, capital, ingresoNeto) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.capital = capital;
        this.ingresoNeto = ingresoNeto;

        //metodos
        //cargar persona
     

        
    }
}

class Paquete {
    constructor(nombre, apellido, capital, ingresoNeto, plazo, listaProductos) {
        this.persona = new Persona(nombre, apellido, capital, ingresoNeto)
        this.plazoFijo = new PlazoFijo(capital, TNA, plazo)
        this.listaProductos = listaProductos;

        //metodos
        //mostrar

    }
}

class Producto {
    constructor(nombreProducto, marca, porcentaje) {
        this.nombreProducto = nombreProducto;
        this.marca = marca;
        this.porcentaje = porcentaje;

        //metodos
        //agregar producto
        //sacar producto
    }
}

class PlazoFijo {
    constructor(capital, tna, plazo) {
        this.capital = capital;
        this.tna = tna;
        this.plazo = plazo;

       this.interesGanadoMensual = function() {
            return ((((this.capital * this.tna) / 100)) / ANIO).toFixed(2);
        };

        this.interesMensualPorCantMeses = function() {
            return (this.interesGanadoMensual() * this.plazo);
        };

        this.interesMensualPorCantMesesMasCapital = function() {
            return ((this.interesMensualPorCantMeses() + this.capital)).toFixed(2);
        };
    }
}