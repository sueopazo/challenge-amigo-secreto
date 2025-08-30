// Crear un array para almacenar los nombres
// Implementa una función para agregar amigos

const inputNombres = document.getElementById("amigo");
const lista = document.getElementById("listaAmigos");
const resultado = document.getElementById("resultado");
let amigosIngresados = [];


function limpiarInput(){
    inputNombres.value = "";
}

function limpiarLista(){
    lista.innerHTML = "";
}

function agregarAmigo() {
    let nombreIngresado = inputNombres.value;
    console.log(nombreIngresado)
    if(nombreIngresado.length == 0) {
        alert("Por favor, inserte un nombre.")
    } else {
        amigosIngresados.push(nombreIngresado);
        
    }
    console.log(amigosIngresados)
    limpiarInput();
    incluirEnLista();
}

// Implementa una función para actualizar la lista de amigos 

function incluirEnLista() {
    limpiarLista();
    for(let i = 0; i < amigosIngresados.length ; i++){
        let li = document.createElement("li");
        li.innerText = amigosIngresados[i];
        lista.appendChild(li)
    }
}

// Implementa una función para sortear los amigos

function sortearAmigo() {
    if (amigosIngresados.length > 0) {
        let indiceAleatorio = Math.floor(Math.random() * amigosIngresados.length);
        let nombreSorteado = amigosIngresados[indiceAleatorio];
        resultado.innerHTML = `<li>Tu amigo secreto es ${nombreSorteado}</li>`;
    } else {
        alert("Ingresa más nombres de amigos")
    }
}