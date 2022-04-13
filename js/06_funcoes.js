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
// function soma( valor1, valor2){
//     let total = valor1 + valor2;
//     return total;
// }

// versão 2: sintax ARROw Function função seta/flecha
const soma = (valor1, valor2) => {
    let total = valor1 + valor2;
    return total;
};

const soma1 = (valor1, valor2) => valor1 + valor2;


console.log( soma1(10,5) );
// console.log( total); // erros,pois é variavel
linha()

let resultado = soma1(100, 50);
console.log(resultado);
    if(resultado <1000 ){
        console.log(`abaixo da meta`)
    };
linha


//1 versão
/*     function dobra(numero){
    let resultado = numero * 2;
    return resultado;
 } */


 /* function dobra(numero){
     return numero * 2;
 } */

//  versão 2: arrow function
/* const dobra = (numero) => {
    let resultado = numero * 2;
    return resultado;
}; */

/* const dobra = (numero) => {
    return numero * 2;
} */


//retorni IMPLICITO (remove {} e return)
//obs.: como so temos um parametro (numero), podemos tirar os ()
const dobra = numero =>  numero * 2;

console.log(dobra(10));
console.log(dobra(150));

let nota1 = 8.5;
let nota2 = 7.4;

const calculaMedia = (n1, n2) => (n1 + n2) /2;
console.log( calculaMedia(nota1, nota2));
//obs.: se não tem parametro, tambem precisa usar ()