// Crie uma função que dado um intervalo (entre x e y) exiba todos número pares:

function pares(x, y) {
    let result = []
    let div = document.getElementById('res')
    let paragraph = document.createElement('p')
    

    for (var i = x; i <= y; i++) {
        if(i % 2 == 0) {
            
            result.push(i)
            
            
        }
    }
    paragraph.innerHTML = `<p>Todos números pares entre 32 e 321</p> ${result.join(', ')}`
    div.appendChild(paragraph)
}

pares(32, 321)
