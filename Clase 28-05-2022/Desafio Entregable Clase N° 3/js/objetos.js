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
function PlazoFijo(capital, tna, plazo) {
    this.capital = capital
    this.tna = tna
    this.plazo = plazo

    this.interesGanadoMensual = function () {
        return  ((((this.capital *  this.tna) / 100)) / ANIO).toFixed(2);
    }

    this.interesMensualPorCantMeses = function() {
        return (this.interesGanadoMensual() * this.plazo) ;
    }
    
    this.interesMensualPorCantMesesMasCapital = function() {
       return ((this.interesMensualPorCantMeses() + this.capital)).toFixed(2);
    }
}








