//Crie uma tela com um <input> que deve receber o nome de um usuário no Github. Após digitar o
//nome do usuário e clicar no botão buscar a aplicação deve buscar pela API do Github conforme
//URL abaixo os dados de repositórios do usuário e mostrá-los em tela:
//URL de exemplo: https://api.github.com/users/diego3g/repos
//Basta alterar "diego3g" pelo nome do usuário.
//Depois de preencher o input e adicionar, a seguinte lista deve aparecer abaixo:

var inputElement = document.querySelector("#app input");
var buttonElement = document.querySelector("#app button");
var containerElement = document.querySelector("#app ul");

buttonElement.onclick = searchRepo;

function searchRepo() {
  axios
    .get("https://api.github.com/users/" + inputElement.value + "/repos")
     
    
    .then(function(response){
      response.data.map(repo => {
        const list = document.createElement('li')
        containerElement.appendChild(list)
        list.innerHTML = repo.name
      });
  })


    .catch(function(error){
        console.warn(error);
    });

}
