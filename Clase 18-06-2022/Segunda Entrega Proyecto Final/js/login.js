
let listaUsuarios = []


//precarga de datos
harcodUsuarios()

function harcodUsuarios() {
    if (obtenerUsuarios() == false) {
        listaUsuarios.push(new Usuario("pepe", "1234"))
        listaUsuarios.push(new Usuario("lolo", "1234"))
        let str = JSON.stringify(listaUsuarios)
        localStorage.setItem("listaUsuarios", str)
    }
}


function obtenerUsuarios() {
    const listaUsuarios = JSON.parse(localStorage.getItem("listaUsuarios"))
    if (!!listaUsuarios) {
        return listaUsuarios
    }
    return false
}


function validarUsuario() {
   
    let flag = false;
    const resultadoUsuarios = obtenerUsuarios()

    if(resultadoUsuarios != false || !!resultadoUsuarios){
    //    debugger
        const usuario = document.getElementById("login").value
        const password = document.getElementById("password").value

        for (item of resultadoUsuarios) {
            if(item.nombreUsuario == usuario && item.password == password){
                window.location.href = "ingreso.html";
                flag = true;
                break;
            }
        }
     
         if(!flag){
             alert("El usuario y/o el password son incorrectos. Por favor ingresar de nuevo")
         }

    }
   
}