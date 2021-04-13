# conceitos-reactjs
<img src="reactjs.png" >
Esse repositório foi criado para o Desafio 03 do GoStack 14, aplicando conhecimentos aprendidos sobre o reactjs.
Após a montagem do back-end no Desafio 02, foi o momento de iniciar o front-end que iria consumir e interagir com as informações geradas pela api rest.

## O Desafio
O desafio consiste em criar uma aplicação que irá permitir a criação, listagem, atualização e remoção dos repositórios de um portifólio genérico, e além disso permitir que os repositórios possam receber "likes". Foi recebido um template com funções vazias, onde deveriam ser implementadas rotas e funcionalidades para a aplicação funcionar corretamente, e após construir a aplicação tudo seria testado através dos testes automatizados que estavam na pasta tests do projeto.

### Funcionalidades da aplicação
#

- **`Listar os repositórios da API`**: Deve ser capaz de criar uma lista com o campo **title** de todos os repositórios que estão cadastrados na API.

- **`Adicionar um repositório a API`**: Deve ser capaz de adicionar um novo item na sua API através de um botão com o texto **Adicionar** e, após a criação, 
deve ser capaz de exibir o nome dele após o cadastro.

- **`Remover um repositório da API`**: Para cada item da sua lista, deve possuir um botão com o texto **Remover** que, ao clicar, irá chamar uma função 
para remover esse item da lista do seu frontend e da API.

### Especificação dos testes
#
Em cada teste, tem uma breve descrição do que a aplicação deve cumprir para que o teste passe.

Para esse desafio temos os seguintes testes:
- **`should be able to add new repository`**: Para que esse teste passe, sua aplicação deve permitir que um repositório seja adicionado ao seu backend e listado no seu frontend dentro de uma `LI`.

- **`should be able to remove repository`**: Para que esse teste passe, sua aplicação deve permitir que ao clicar no botão de remover que vai estar dentro da `LI` do repositório adicionado, o item seja removido da listagem.
