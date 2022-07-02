const token = document.querySelector("h2")
const progress = document.querySelector("progress")
  let intervalo = 0
      progress.value = 0
document.addEventListener("DOMContentLoaded", ()=> {
      token.innerText = parseInt(Math.random() * 1000000)
      const intervaloToken = setInterval(()=> {
                                        if (intervalo > 30) {
                                            clearInterval(intervaloToken)
                                            intervalo = 0
                                            location.reload()
                                        }
                                        progress.value = intervalo
                                        intervalo++
                                  }, 1000)
})