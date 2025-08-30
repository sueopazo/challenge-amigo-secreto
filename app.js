// Crear un array para almacenar los nombres


// Implementa una función para agregar amigos


const inputNombres = document.getElementById('amigo');
let amigosIngresados = [];

function limpiarInput(){
    inputNombres.value = "";
}

function agregarAmigo() {
    let nombreIngresado = inputNombres.value;
    console.log(nombreIngresado)
    if(nombreIngresado.length == 0) {
        alert('Por favor, inserte un nombre.')
    } else {
        amigosIngresados.push(nombreIngresado);
        
    }
    console.log(amigosIngresados)
    limpiarInput();
}


