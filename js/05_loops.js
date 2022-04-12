console.log(`Loops!`);


/*Estruturas tradicionais: (tem em todo linguagens)
while     -> enquanto
do/while  -> faça/enquanto
for       -> para
*/

// exemplo loop while (enquanto)

console.log("while");

// varialvel de contador do loop

let i = 1;

while( i <= 10 ){
    console.log(`Valor de contador: ${i}`);
    i++; //icremento
}

console.log(`-----------------`);

console.log(`do/while`);

let j = 1; //variavel de controle
do{
    console.log(`J vale ${j}`);
    j++;
} while(j <= 3) //ou j < 4

console.log(`-----------------`);

console.log(`FOR`);

for( let i = 1; i <= 5; i++ ){
    console.log(`I vale: ${i}`);

}

console.log(`-----------------`);

console.log(`loop e estrutura de dados`);

let alunos = [`eduardo`,`Vagner`,`Thalia`,`Claudio`,`Jéssica`]

for(let i = 0; i < 5; i++){
    console.log( alunos[i] );
}

/* sort() -> função para ordenar arrays */
// console.log( alunos.sort() );

console.log(`-----------------`);

console.log(`loops exclusivos do JS`);
// FOR/of :otimo para array
for( let aluno of alunos){
    console.log(aluno);
}

let livro = {
    titulo:`Senhor dos Aneis`,
    ano: 2022,
    volumes: 3,
};

// for/in
for( let dados in livro){
    console.log(livro[dados])
}