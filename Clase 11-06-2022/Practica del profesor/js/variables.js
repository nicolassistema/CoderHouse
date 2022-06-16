const productos = ['Banana', 'Manzana', 'Pera', 'Frutillas', 'Anana', 'Durazno', 'Ciruelas', 'Arandanos', 'Papaya', 'Mango']
const carrito = []



const titulo = document.getElementById("titulo")
const slogan = document.getElementById("slogan")
const lista = document.getElementsByClassName("orange-text")
const div = document.getElementsByTagName("div")
const listadoFrutas = document.getElementById("listadoFrutas")
const listadoCarrito = document.querySelector("#listadoCarrito");



titulo.innerText = "manda fruta punto com"
slogan.innerText = "tu ecomerce favorito de alimentos saludables"

cargarPorductos()

function cargarPorductos() {
   // debugger
    listadoFrutas.innerHTML ="";//modificar el continedo del html
    for(elemento of productos){
        const listaProd = document.createElement("li")
        listaProd.id = "2022" + elemento
        listaProd.className = "orange-text"
        listaProd.innerText = elemento
        listaProd.addEventListener("click", () => {
          agregarAlCarrito(` los id ${listaProd.id}`)
          agregarAlCarrito()

        })
        listadoFrutas.append(listaProd)

      //  listadoFrutas.innerHTML += "<li class='orange-text'>"+ elemento+ "</li>"
    }
}



function agregarAlCarrito(prod) {
  const elemento = document.getElementById(prod)
  if(prod != ""){
    const liCarrito = document.createComment("li")
      liCarrito.className = "collection-item italica-carrito"
      liCarrito.innerText = elemento.innerText//document.querySelector(`#${prod}`).innerText
      liCarrito.id = `${prod}EnCarrito` 

     listadoCarrito.append(liCarrito)

  }
}

function eliminarDelCarrito(prodId) {
  const confirmar  = confirm("Desae eliminar?")
    if(confirmar){
      const itemAEliminar= document.getElementById(prodId)
        itemAEliminar.remove();
    }
}

//para remover items
//const peras = document.getElementById("2022Pera")
// peras.remove() 


//para buscar un tag
//const listaProds = document.querySelector("li.orange-text")
//para buscar varios
//const listaProds = document.querySelectorAll("li.orange-text")
//para buscar una en particular
//const nuevaList = document.querySelector("#titulo")