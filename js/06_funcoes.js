'use strict'; // MODO ESTRITO/RESTRITO

console.log("Funções");

/* Funções são blocos de codigo que podem
ser executados e reaproveitados em praticamente qualquer parte de sua
aplicação.

usamosfunções tambem é uma forma de separar
a logica e organizar melhor sua programação.*/


// sintax tradicional
function linha(){
    console.log(`----------------------------`);

}

let curso = `Programador Web`;
let escola = `Senac`;
let ano = 2022;

console.log(`Curso: ${curso}`);
linha();
console.log(`Escola: ${escola}`);
linha();
console.log(`Ano: ${ano}`);

linha()

                //parametros/argumentos
function soma( valor1, valor2){
    let total = valor1 + valor2;
    return total;
}

console.log( soma(10,5) );
// console.log( total); // erros,pois é variavel
linha()