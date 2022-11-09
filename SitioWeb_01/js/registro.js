const nombre = document.getElementById("name")
const email = document.getElementById("email")
const pass = document.getElementById("password")
const form = document.getElementById("form")
const parrafo = document.getElementById("warnings")

form.addEventListener("submit", e=>{
    e.preventDefault()
    let warnings = ""
    let entrar = false
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/
    
    parrafo.innerHTML = ""
    if(nombre.value.length <6){
        warnings += `El nombre no es valido <br>`
        entrar = true
    }
    if(!regexEmail.test(email.value)){
        warnings += `El email no es valido <br>`
        entrar = true
    }
    if(pass.value.length < 8){
        warnings += `La contraseña no es valida <br>`
        entrar = true
    }


    if(entrar){
        parrafo.innerHTML = warnings
    }else{
        parrafo.innerHTML = "Gracias por registrarte"
    }
})



const guardarDatos = (e) => {
    e.preventDefault()
    let nombre = document.getElementById("name").value
    let email = document.getElementById("email").value
    let pass = document.getElementById("password").value
    let datos = [nombre, email, pass]
    localStorage.setItem("datos", JSON.stringify(datos))
    console.log(datos)
    
}

form.addEventListener("submit", guardarDatos)




const mostrarDatos = () => {
    let datos = JSON.parse(localStorage.getItem("datos"))
    let nombre = document.getElementById("name")
    let email = document.getElementById("email")
    let pass = document.getElementById("password")
    nombre.value = datos[0]
    email.value = datos[1]
    pass.value = datos[2]
}

window.addEventListener("load", mostrarDatos)









