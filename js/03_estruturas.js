console.log("ok")

let alunos = ["Tiago", "João", "Marilia", "Vagner"];

console.log(alunos[1]);
console.log(alunos[3]);

console.log(alunos);

/* Exercicio array:
criar um array conteudo os seguintes dados de uma pessoa:

-nome e sobrenome
-idade
-cidade
-estado

depois, mostre uma frase no conforme o exemplo abaixo:
Fulano da silva é de da cidade de Sao paulo e tem ?anos.

*/

let pessoa = ["Maiky Batista", 18, "São Paulo",]

console.log( `${pessoa [0]} tem ${pessoa [1]}anos e mora em ${pessoa[2]}`)

console.log(`---------------------------------------------------------------`)

let filme = {

    titulo: "Homem Aranha",
    ano:2021,
    genero: "ação/ficção",
    classificacao: 16,
};

console.log(filme.titulo)
console.log(filme.ano)
console.log(filme.genero)
console.log(`${filme.titulo} foi lançado em ${filme.ano} com classificação de +${filme.classificacao} `)

/* Exercicio de objeto
crie um novo objeto contendo os dados (ficticio)
de um pedido de loja virtual. exemplo:
-data do pedido
-produtos comprados
-preço do pedidos
-prazo de entrega 

mostra o resultado
*/


let hardware = {
    data:"07/04/2022",
    produtos:"Ryzen 5 5600g, pente de 16 giga de ram , placa de video rtx 2060",
    preco:4800,
    prazo:3
}

console.log(`hoje ${hardware.data} foi comprado ${hardware.produtos} no valor de R$:${hardware.preco} prazo de entrega e de ${hardware.prazo}`)