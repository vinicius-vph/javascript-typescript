// 3.1 - Converta as funções nos seguintes trechos de código em Arrow Functions:

const arr = [1, 2, 3, 4, 5];
console.log(arr.map(function(item) {
 return item + 10;
}));
console.log(
    arr.map(item => item + 10)
)
   
// 3.2
// Dica: Utilize uma constante pra function
const usuario = { nome: 'Diego', idade: 23 };
const mostraIdade = (usuario) => {
 return usuario.idade;
}
console.log(
    mostraIdade(usuario)
)

// 3.3
// Dica: Utilize uma constante pra function
const nome = "Diego";
const idade = 23;
const mostraUsuario = (nome = 'Diego', idade = 18) => ({ nome, idade });

console.log(mostraUsuario(nome, idade)
)

console.log(mostraUsuario(nome))

// 3.4
const promise = () => new Promise((resolve, reject) => resolve())

console.log(promise)
