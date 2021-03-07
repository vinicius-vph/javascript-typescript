// pegando os elementos html no documento
var listElement = document.querySelector("#app ul");
var inputElement = document.querySelector("#app input");
var buttonElement = document.querySelector("#app button");

//preprando os items da lista, buscando no local storage e dando segunda opção caso não exista informação la
var todos = JSON.parse(localStorage.getItem("list_todo")) || [];

//percoreendo o array
function renderTodos() {
  //apagando todo conteudo antes de renderizar a nova lista
  listElement.innerHTML = "";
  for (todo of todos) {
    //criando cada item da lista
    var todoElement = document.createElement("li");

    var todoText = document.createTextNode(todo);

    var linkElement = document.createElement("a");

    linkElement.setAttribute("href", "#");

    //aqui vamos pegar o indice do todo para ser usado na função de excluir
    var pos = todos.indexOf(todo);

    //chamando a função de apagar e dando o indice do todo a ser apagado
    linkElement.setAttribute("onclick", `deleteTodo(${pos})`);

    var linkText = document.createTextNode("Excluir");

    linkElement.appendChild(linkText);

    //inserindo o texto na lista
    todoElement.appendChild(todoText);
    //inserindo link na lista
    todoElement.appendChild(linkElement);
    //inserindo tudo no documento
    listElement.appendChild(todoElement);
  }
}

renderTodos();

//adicionando um novo todo
function addTodo() {
  //recuperando o valor dentro do input
  var todoText = inputElement.value;

  //adicionando o novo todo no array
  todos.push(todoText);
  //apagando o conteudo do input
  inputElement.value = "";
  renderTodos();
  saveStorage();
}

buttonElement.onclick = addTodo;

function deleteTodo(pos) {
  //recebemos a posição do todo no array e com o
  //metodo splice escluimos o primeiro item dela
  //e depois renderizamos tudo novamente
  todos.splice(pos, 1);
  renderTodos();
  saveStorage();
}

//usando o local storage para salvar nossos todos
function saveStorage() {
  //acessando a variavel global localStorage, e inserindo o todo para fucar armazenado
  //é nessessário transformar em jason pois o localstorage não entende array
  localStorage.setItem("list_todo", JSON.stringify(todos));
}
