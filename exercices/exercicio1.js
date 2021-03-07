// Crie uma função que dado o objeto a seguir:
var endereco = {
    rua: "Rua dos pinheiros",
    numero: 1293,
    bairro: "Centro",
    cidade: "São Paulo",
    uf: "SP"
};

// Retorne o seguinte conteúdo:
// O usuário mora em São Paulo / SP, no bairro Centro, na rua "Rua dos Pinheiros" com
// no 1293.

let div = document.getElementById('res')
let paragraph = document.createElement('p')
paragraph.innerHTML = ` O usuário mora em ${endereco.cidade} / ${endereco.uf}, no bairro  ${endereco.bairro}, na rua "${endereco.rua}" com nº ${endereco.numero}.`
div.appendChild(paragraph)   