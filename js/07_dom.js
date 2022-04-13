/*Funcões(oumetodos) de acesso/seleção ao DOM

-getElementById()   -> seleciona UM elemento atraves do id
-querySelector()    -> seleciona UM elemento atraves de um seletor
-querySelectorALL() -> seleciona VARIOS elementos atraves de seletor */

//Exemplos
//const titulo = document.getElementById("titulo-principal");

const titulo = document.querySelector("#titulo-principal");
const subtitulos = document.querySelectorAll("h2");

console.log(titulo);
console.log(subtitulos);
console.log(subtitulos[0]);

//leitura do conteudo
console.log(titulo.textContent);
console.log(subtitulos[1].textContent);

//alteração do conteudo
titulo.textContent = "ola DOM, meu valho amigo.";
subtitulos[0].innerHTML = "<i>Aprendendo DOM</i>"

//manipulando CSS via JS

// 1) inline
const pagina = document.querySelector("body");
pagina.style.backgroundColor = "red" ;
pagina.style.fontFamily = "Verdana";
pagina.style.margin = 0;


// 2) Classe
const primeiroItem = document.querySelector("#lista-editores li:first-child");
console.log(primeiroItem);

primeiroItem.classList.add("destaque-item");