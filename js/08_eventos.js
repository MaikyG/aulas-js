/* Exemplo 01 */
const subExemplo01 = document.querySelector("#subtitulo-exemplo01");
const msg = document.querySelector("#mensagem");

//monitor de evento/ouvinte de evento
subExemplo01.addEventListener("click", function(){
    msg.textContent = ("olaaaaaaaaaaa!");
    msg.style.fontSize = "25px";
    subExemplo01.style.backgroundColor = "red"; 
});

subExemplo01.addEventListener("dblclick", function(){
    msg.textContent = "";
});

//mouseover, mouseout

//exemplo 2: modo noturno
const botao = document.querySelector("#noturno");
const pagina = document.querySelector("body")

botao.addEventListener("click", function(){
    pagina.classList.toggle("modo-noturno");
});