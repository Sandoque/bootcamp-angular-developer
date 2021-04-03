// Intro variáveis e strings

/*var nome = "Sandoque";
var idade = 42;
var idade2 =  41;
var frase = "Islândia é o Melhor País do Mundo"
//alert(idade2 + idade) 
//alert ("Bem vindo " + nome)

console.log(idade)
console.log(nome)
console.log(frase.replace("Islândia", "Noruega"))
console.log(frase.toLowerCase())
//alert(frase.replace("islândia", "Suécia"))
*/

// Array e dicionário

/*var lista = ["maçã", "pêra", "laranja"]
console.log(lista);
lista.push("uva");
console.log(lista);
lista.pop();
console.log(lista);
lista.pop();
console.log(lista);
console.log(lista.join(", "));
*/

/*var frutas = [{nome:"maçã", cor:"vermelho"}, {nome:"uva", cor:"roxo"}];
console.log(frutas);
console.log(frutas[1].nome);
*/

/*function soma(n1, n2){
  return n1 + n2;
}
console.log(soma(2,3))
*/

/*var validar = 0;
function validaIdade(idade){
  if (idade >= 18){
    validar = true
  }else{
    validar = false
  }
  return validar;
}

var idade = prompt("qual sua idade?");
validaIdade(idade);
console.log(validar);
*/

/*
function trocaNome(frase, nome, novo_nome) {
  return frase.replace(nome, novo_nome)
}

console.log(trocaNome("vai japão", "japão", "brasil"))
*/


function clicou(){
  document.getElementById("agradecimento").innerHTML = "<b> Obrigado por clicar</b>";
}

function redirecionar(){
  window.open("https://web.digitalinnovation.one/home");
}

function trocar(elemento){
elemento.innerHTML = "Thanks for on mouse move";
}

function voltar(elemento){
  elemento.innerHTML = "Passe o mouse aqui";
}

function load(){
  alert("carregado");
}

function funcaoChange(elemento){
  console.log(elemento.value);
}