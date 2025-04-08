//DECLARAÇÕES E VARIAVEIS
// var nome="fiap";
// console.log(nome)

// let idade=17;
// console.log(idade)

// const sobrenome ="Egito";
// console.log(sobrenome)
// //underfined
// let aula; 
// console.log(aula)
// //underfined
// let valor = null;
// console.log(valor)

// let exemplo1={};

// let exemplo2=[];

// //TIPO VARIAVEIS
// let exemplo3 = 10;
// console.log(typeof exemplo3)

// let exemplo4 = "Aula"
// console.log(typeof exemplo4)

// let exemplo5 = true
// console.log(typeof exemplo5)

// let exemplo6 =["huguinho","zezinho","luizinho"]
// console.log(typeof exemplo6)


// //CONVERSÕES

// //float => inteiro

// let numfloat =123.456;
// console.log(parseInt(numfloat));

// //string => float
// let numString ="547.987";
// console.log(parseFloat(numString))

// //float => string

// let numfloat1= 554.665;
// console.log(numfloat1.toString());

// let numInt=100;
// console.log(numInt.toString())

// //METODOD - PARTE-1

// //LENGTH - VERIFICA O TAMANHO DA STRING

// let frase="O mundo da Tecnologia";
// console.log(frase.length)

// //indexOf - retorna um trecho de um txto

// let texto = "Progamação Sustentável"
// console.log(texto.indexOf("a"))

// //slice - retorna parte de um texto apontando o inicio e o final

// let info= "processamento de ponta";
// console.log(info.slice(0,13))

// // OPERADORES ARITMÉTICOS

// const num1=10;
// const num2=20;

// console.log(num1 + num2);
// console.log(num1 - num2);
// console.log(num1 * num2);
// console.log(num1 / num2);

//OPERADORES LÓGICOS

// const num3=20;
// const num4=30;

// console.log(num3 < num4)
// console.log(num3 > num4 && num4 < 50)
// console.log(num3 > num4 || num4 > num3)
// console.log(num4 == num3 || num4 <= num3)


// IF

// let valor =100;


// if(valor == 100)(
//     console.log("é verdadeiro")
// )

// //if/else

// let valor1 = 100;

// if(valor1 == 100){
//     console.log("Valor Correto")
// }else{
//     console.log("Valor Errado")
// }

//if/else - encadeado ou aninhado

// 

// CONDIÇÃO TERNARIA

// let valor2= 300;

// let resultado = valor2 == 300 ? "Certo": "Errado"
// console.log(resultado)

// SWITCH CASE

// let time = "Palmeiras";

// switch(time){
//     case "Palmeiras":
//         console.log("Melhor time")
//         break;
//     case "Corinthians":
//         console.log("Não é um time")
//         break;
//     case "São Paulo":
//         console.log("Não é um time")
//         break
//     default:
//         console.log("Nenhuma das opções")
// }

// ESTRUTURAS DE LAÇO DE REPETIÇÃO

// for(let i=0;i<=10;i++){
//     console.log("O valor de I é : ", i)
// }

// WHILE 

// let w= 0;

// while(w <=10){
//     console.log("O valor de w é", w) 
//     w++;
// }


// //do While

// let z= 10;

// do{
//     console.log("do while é",z)
//     z++;
// }while(z <= 100)

// FUNÇÕES

function saudacao(nome){
    // console.log("Seja bem vindo", nome)
    console.log(`Seja bem vindo ${nome}`) //string literais
}
saudacao("fiap")

function semaforo(){
    let sinal = "verde";
    console.log(`O semaforo está ${sinal}`)
}
semaforo();

















