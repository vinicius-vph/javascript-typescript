//promises são codigos que nao vao influenciar na linha do tempo do nosso codigo js
//sao funções que vao devolver o resultado só depois de um certo tempo não atrapalhando 
// a continuação de execução do nosso codigo js

//criando uma promise
// resolve e reject tambem sao funcãoes, resolve quando o resultado foi de sucesso, 
// reject quando não hove sucesso
var minhaPromise = function() {
    return new Promise(function(resolve, reject) {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', 'https://api.github.com/users/vinicius-vph');
        xhr.send(null);

        xhr.onreadystatechange = function() {
            if(xhr.readyState === 4) {
                if (xhr.status === 200){
                    resolve(JSON.parse(xhr.responseText));
                }else{
                    reject('Erro na requisição');
                }
            }
        }
    });
}

minhaPromise()
//na promises usamos duas formas de retonar o resultado
.then(function(response){
    console.log(response);
})
.catch(function(error){
    console.warn(error);
});

