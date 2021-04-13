# conceitos-react-native
<img src="reactnative.png">
Esse repositório foi criado para o Desafio 04 do GoStack 14, aplicando conhecimentos aprendidos sobre o react native.
Após a montagem do back-end no Desafio 02, front-end no Desafio03, foi o momento de iniciar a parte mobile do projeto, que iria consumir e interagir com as informações 
geradas pela api rest, assim como o front-end.

## O Desafio
O desafio consiste em criar uma aplicação que irá permitir a criação, listagem, atualização e remoção dos repositórios de um portifólio genérico, e além disso permitir que os repositórios possam receber "likes". Foi recebido um template com funções vazias, onde deveriam ser 
implementadas rotas e funcionalidades para a aplicação funcionar corretamente, e após construir a aplicação tudo seria testado através dos testes automatizados que estavam na pasta tests do projeto.

### Funcionalidades da aplicação
#

- **`Listar os repositórios da API`**: Deve ser capaz de criar uma lista de todos os repositórios que estão cadastrados na API com os campos **title**, **techs** e número de curtidas seguindo o padrão `${repository.likes} curtidas`, apenas alterando o número para ser dinâmico.

- **`Curtir um repositório listado da API`**: Deve ser capaz de curtir um item da API através de um botão com o texto **Curtir** e deve atualizar o número de likes na listagem no mobile.

### Especificação dos testes
#
Em cada teste, tem uma breve descrição do que a aplicação deve cumprir para que o teste passe.

Para esse desafio temos os seguintes testes:

- **`should add a like to the like counter of the repository`**: Para que esse teste passe, a aplicação deve permitir ao clicar no botão `Curtir`, um like seja adicionado ao repositório listado, e que essa atualização possa ser visualizada na tela.
