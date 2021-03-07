// Dado o seguinte vetor de objetos:
var usuarios = [
  {
    nome: "Diego",
    habilidades: ["Javascript", "ReactJS", "Redux"],
  },
  {
    nome: "Gabriel",
    habilidades: ["VueJS", "Ruby on Rails", "Elixir"],
  },
];

// Escreva uma função que produza o seguinte resultado:
// O Diego possui as habilidades: Javascript, ReactJS, Redux
// O Gabriel possui as habilidades: VueJS, Ruby on Rails, Elixir

function habilidades() {
  let div = document.getElementById('res')
  let paragraph = document.createElement('p')
  paragraph.innerHTML = 
  
  ` O ${usuarios[0].nome} possui as habilidades ${usuarios[0].habilidades} <p>O ${usuarios[1].nome} possui as habilidades ${usuarios[1].habilidades} </p>`
  
  div.appendChild(paragraph)  

}

var resultado = habilidades();



