// o ajax é uma requisição assincrona que a gente pode executar para algum backend
//podendo requisitar coisas do servidor sem precisar atualizar a pagina 

//iniciando uma requisição
var xhr = new XMLHttpRequest();

xhr.open('GET', 'https://api.github.com/users/vinicius-vph');
xhr.send(null);

xhr.onreadystatechange = function() {
    if(xhr.readyState === 4) {
        console.log(JSON.parse(xhr.responseText));
    }
}