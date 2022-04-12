console.log("okay");

/* estrutura condicional
if(se), else(senão), else if(senão se)

operadores relacionais (usandos com condicionais)
> maior que
< menor que
>= maior ou igual
<= menor ou igual
== igualdade
!= diferente
*/

// exemplo 1: condicional SIMPLE

let numero = 10;

if(numero > 0){
    console.log(`${numero} é maior que zero`)
}

// exemplo 2: condicional composta (if/else)
let aluno = "joão";
let nota1 = 9.64;
let nota2 = 9.55;
let media = (nota1 + nota2) /2

console.log(`Aluno: ${aluno}`);
console.log(`Notas: ${nota1} e ${nota2}`);
console.log(`Media: ${media.toFixed(2)}`);

let situacao; //underfined (indefinida)

let faltas = 10;
console.log(`Faltas: ${faltas}`);

//  if(media >= 7){ 
/* && -> operador logico E 
usamos quando precisamos avaliar mais uma condição ao mesmo tempo */

if(media >= 7 && faltas < 15 ){
    situacao = "aprovado";
} else {situacao = "reprovado";
}
console.log(situacao);

// exemplo 3 condicional ENCADEADA (if,else if, else)

let desempenho;
if(media < 3){
    desempenho = "pessimo";
}else if(media < 5){
    desempenho = "ruim";
}else if(media < 7){
    desempenho = "regular";
}else if(media < 9){
    desempenho = "bom";
}else {
    desempenho = "otimo";
}
console.log(desempenho);