//A partir do resultado do exemplo anterior adicione um indicador de carregamento em tela no lugar
//da lista apenas enquanto a requisição estiver acontecendo:
//<li>Carregando...</li>
//Além disso, adicione uma mensagem de erro em tela caso o usuário no Github não exista.
//Dica: Quando o usuário não existe, a requisição irá cair no .catch com código de erro 404.


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
        if(response.status !== 200) {
         list.innerHTML = 'Carregando...'

        } else {

          list.innerHTML = repo.name
        }
      });
      // console.log(response.status)
  })


    .catch(function(error){
       alert('Usuario não encontrado verifique se o nome está correto e tente novamente!')
    });

}
