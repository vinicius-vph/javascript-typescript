// A partir do seguinte vetor e utilizando os métodos de array (map, reduce, filter e find):
const usuarios = [
  { nome: "Diego", idade: 23, empresa: "Rocketseat" },
  { nome: "Gabriel", idade: 15, empresa: "Rocketseat" },
  { nome: "Lucas", idade: 30, empresa: "Facebook" },
];


// 2.1 Crie uma variável que contenha todas idades dos usuários: [23, 15, 30]
const idades = usuarios.map((usuario) => {
  return usuario.idade;
});

console.log(idades);

// 2.2 Crie uma variáveis que tenha apenas os usuários que trabalham na Rocketseat e com mais de 18 anos 
const filter = usuarios.filter((usuario) => {
    return usuario.idade > 18;
});

console.log(filter);

// 2.3 Crie uma variável que procura por um usuário que trabalhe na empresa Google
const find = usuarios.find((usuario) => {
    return usuario.empresa == 'Google'
})

console.log(find)

// 2.4 Multiplique a idade de todos usuários por dois e depois realize um filtro nos usuários que possuemno máximo 50 anos:
const doubleAge = usuarios.map((usuario) => {
    usuario.idade = usuario.idade * 2
    return usuario
})

const newArr = doubleAge.filter((usuario) => {
    return usuario.idade < 50; 
})

console.log(newArr)
