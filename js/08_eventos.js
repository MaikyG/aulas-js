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

    /* se o texto do botão for Ativar*/
    if (botao.textContent == `Ativar`) {
        //então, mudamos para Desativar
        botao.textContent = "Desativar";
    } else {
        //senão mudarmos para Ativar
        botao.textContent = "Ativar";
    }
});


//exemplo 03: simulação de cadastro

const formulario = document.querySelector("form");
const campoNome = document.querySelector("#nome");
const campoNota1 = document.querySelector("#nota1");
const campoNota2 = document.querySelector("#nota2");
const divResultados = document.querySelector("#resultados");


//Detectar o acionamento do formulario
//obs,:função dentro do eventlist, é chamado de Callback

formulario.addEventListener("submit",function(event){
    event.preventDefault();// <-- anulando o comportamento padrão do navegador (redirecionar o formulario)
    
    //1) capturar o dados digitados nos campos
    let nome = campoNome.value;
    let nota1 = parseFloat(campoNota1.value);
    let nota2 = parseFloat(campoNota2.value);

    //2) calcular media das notas
    let media = (nota1 + nota2) / 2;

    let desempenho;
    if(media >=7){
        desempenho = "otimo Aprovado";
    }else{
        desempenho = "reprovado";
    }
    
    

    //3) criar elemento dinamicamente via js

    //3.A) criar o elemento
    let paragrafo = document.createElement("p");

    //3.B) montando o conteudo da tag
    paragrafo.innerHTML = `<b>${nome}</b> ${desempenho} - <i>${media}</i>`;

    //3.C) adicionar tag/ conteudo a div de resultado
    divResultados.appendChild(paragrafo)

    formulario.reset();

    campoNome.focus()


    console.log(paragrafo);


});