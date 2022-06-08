const IVA = 1.21
const paises = ['Argentina', 'Uruguay', 'Chile', 'Colombia', 'Venezuela', 'México']
//                   0           1         2          3           4          5

const productos = []


function recortePais() {
 //   debugger
    for (let i = 0; i < paises.length; i++) {
        console.log(paises[i]);
    }
}

function agregarPais() {
    recortePais();
   // console.clear();
debugger
    let nuevoPais = prompt("Ingrese un nuevo pais");
    //paises.push(nuevoPais)//agrega en ultimo lugar de la lista
    paises.unshift(nuevoPais)//agregar al principio
    //pop // elimina ultimo
    //shit // elimina el primeros
    console.table(paises)
}

/*
function quitarPais() {
    recortePais();
    debugger
    let indice = parseInt(prompt("Ingrese indice el pais a quitar"))
    paises.splice(indice,1)
    console.table(paises)
}

*/


function quitarPais() {
    recortePais();
    debugger
    let indice = parseInt(prompt("Ingrese indice el pais a quitar"))
    paises.splice(indice,1)
    console.table(paises)
}

//splice es para eliminar elementos
paises.includes()//si lo que se le pasa esta en la lista es true, si no es false
paises.indexOf() //devuelve el indice cuando le pasamos el nombre del elemento por parametro
paises.reverse()//ordena de manera inversa el listado --> 

