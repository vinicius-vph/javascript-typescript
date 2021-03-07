// A partir do seguinte objeto:


const empresa = {
    nome: 'Rocketseat',
    endereco: {
    cidade: 'Rio do Sul',
    estado: 'SC',
    }
};

// Utilize a desestruturação para transformar as 
// propriedades nome, cidade e estado em variáveis, no
// fim deve ser possível fazer o seguinte:
// console.log(nome); // Rocketseat
// console.log(cidade); // Rio do Sul
// console.log(estado); // SC

const {nome, endereco: { cidade , estado}} = empresa;

console.log(nome); // Rocketseat
console.log(cidade); // Rio do Sul
console.log(estado); // SC


// Na seguinte função:
// Utilize a desestruturação nos parâmetros da função para buscar o nome e idade do usuário
// separadamente e a função poder retornar apenas:

function mostraInfo({nome, idade}) {
    
    return `${nome} tem ${idade} anos.`;
}

console.log(

    mostraInfo({ nome: 'Diego', idade: 23 })
)


