//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let arrayListaAmigos = [];
let formulario = document.getElementById("amigo");
let listaAmigos = document.getElementById("listaAmigos");
let resultado = document.getElementById("resultado");

function adicionarAmigo(){

    let nomeFormulario = formulario.value;

    if (nomeFormulario.trim() !== '') {

    let novoLiAmigo = document.createElement("li");
    novoLiAmigo.textContent = formulario.value;
    listaAmigos.appendChild(novoLiAmigo);

    arrayListaAmigos.push(nomeFormulario);

    formulario.value = "";
    resultado.innerText = "";

    } else{
        alert("Por favor, insira um nome!")
    }
}


function sortearAmigo(){
    if(arrayListaAmigos.length > 1){
        numeroAleatorioArray = Math.floor(Math.random() * arrayListaAmigos.length);

        resultado.innerText = "O seu amigo oculto é " + arrayListaAmigos[numeroAleatorioArray] +"!";
        listaAmigos.innerText = "";
        arrayListaAmigos.length = 0
    } else{
        alert("Você precisa adicionar pelo menos dois amigos!");
    }
}