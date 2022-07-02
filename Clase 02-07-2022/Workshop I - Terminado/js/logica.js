const cargoZonaDeResidencia = ()=> {
      let optionZV
         for (let zonaV of zonaVivienda) {
            optionZV += `<option value="${zonaV.factor}">${zonaV.area}</option>`
         }
         return optionZV
}

const cargoTiposDeVivienda = ()=> {
      let optTV
         for (let tipoV of tipoVivienda) {
            optTV += `<option value="${tipoV.factor}">${tipoV.tipo}</option>`
         }
         return optTV
}

const faltanCargarDatos = ()=> {
      return (isNaN(parseInt(metros2.value)) || selectTipoVivienda.value.trim() == "" || selectZonaVivienda.value.trim() == "")
}

const muestroCotizacion = ()=> {
      const animacion = document.querySelector("#animacion")
      animacion.innerHTML = preloader()
            setTimeout(() => {
                  mts = parseInt(metros2.value)
                  zonaViv = parseFloat(selectZonaVivienda.value)
                  tipoViv = parseFloat(selectTipoVivienda.value)
                  valorDeLaCuota = csh.valorDePoliza(mts, zonaViv, tipoViv)
                  valorCuota.innerText = `$ ${valorDeLaCuota}`
                  animacion.innerHTML = ""                        
            }, 4500)
}

const alertar = (mensaje)=> {
      Swal.fire({
            title: mensaje,
            icon: 'info',
            timer: 2500,
            timerProgressBar: true
      })
}

const cotizarSeguroVivienda = ()=> {
      faltanCargarDatos() ? 
            alertar("Complete la información para poder cotizar.") :
            muestroCotizacion()
}

const preloader = ()=> {
      return ` <div class="preloader-wrapper big active">
                  <div class="spinner-layer spinner-yellow-only">
                  <div class="circle-clipper right">
                     <div class="circle"></div>
                  </div><div class="gap-patch">
                     <div class="circle"></div>
                  </div><div class="circle-clipper left">
                     <div class="circle"></div>
                  </div>
                  </div>
               </div>`
}