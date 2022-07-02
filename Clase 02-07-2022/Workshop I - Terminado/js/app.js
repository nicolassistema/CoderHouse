//Finalmente, instancio la Clase Cotizador, pasando los PARAMETROS de inicialización correspondientes
const csh = new CotizadorSeguroDeHogar(zonaVivienda, tipoVivienda, costoSeguroM2)

//Lleno los combos tipo y zona vivienda con las funciones que retornan el HTML en cuestión
selectZonaVivienda.innerHTML += cargoZonaDeResidencia()
selectTipoVivienda.innerHTML += cargoTiposDeVivienda()

//Agrego los event listener en el click del botón COTIZAR y el botón REFRESCAR
btnCotizar.addEventListener("click", ()=> cotizarSeguroVivienda())
btnRefrescar.addEventListener("click", ()=> location.reload())