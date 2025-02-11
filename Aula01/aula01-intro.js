// function mensagem(nome){
//     return "Seja Bem-Vindo! " + nome
// }

// console.log(mensagem("Vinicius"))


// (function(x,y){
//     console.log(x+y)
// }
// )

// (5,7)

const triplo = function(num){
    return num*3
}

// console.log(triplo(5))

// arrow function -> diminuir e melhorar o desempenho do codigo

let triplov2 = (num) => {
    return num*3
}

// console.log(triplov2(3))

// arrow function em uma linha 
let triplov3 = num  => num*3

// console.log(triplov3(4))

// const rest = (...numeros)=>{
//     let aux = 0 
//     for (i in numeros){
//         aux ++;
//     }
//     return aux
// }

// console.log("REST: ", rest(4,3))

const sum = (...numeros) =>  numeros.reduce((acumulador, x) => acumulador + x, 0);

const sub = (...numeros) =>  numeros.reduce((acumulador, x) => acumulador - x);

const div = (...numeros) =>  numeros.reduce((acumulador, x) => acumulador / x);

const mult = (...numeros) =>  numeros.reduce((acumulador, x) => acumulador * x);



// console.log(div(2, 2, 3));


let x = 9
let resultado = x%2==0?"par":"impar";

// console.log(resultado);

const pessoa = {
    nome: "vini",
    idade: 21,
    peso: 1
}

const {nome, idade, peso} = pessoa

console.log(idade);