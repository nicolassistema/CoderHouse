class CotizadorSeguroDeHogar {
   constructor (jsonZV, jsonTV, costoSeguroM2) {
      this.arrayZonaVivienda = jsonZV //podría guardar los array para aplicar una 
      this.arrayTipoVivienda = jsonTV //búsqueda o filtro, y devolver el resultado
      this.costoM2 = costoSeguroM2
   }
   valorDePoliza(m2i, factorZona, factorVivienda) {
      const cober = this.costoM2 * parseInt(m2i)
      const valorDePolizaFinal = cober * factorVivienda * factorZona
            return valorDePolizaFinal.toFixed(2) || 0.00
   }
}