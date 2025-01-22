//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
// Array para armazenar os nomes
const amigos = [];

// Função para adicionar um amigo
function adicionarAmigo() {
    const inputAmigo = document.getElementById('amigo');
    const nome = inputAmigo.value.trim();

    if (nome) {
        amigos.push(nome); 
        atualizarListaAmigos(); 
        inputAmigo.value = ''; 
        inputAmigo.focus();
    } else {
        alert('Por favor, insira um nome válido!');
    }
}

// Função para atualizar a lista de amigos exibida
function atualizarListaAmigos() {
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = amigos.map(amigo => `<li>${amigo}</li>`).join('');
}


