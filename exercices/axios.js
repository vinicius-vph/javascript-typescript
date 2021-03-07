//usando a biblioteca axios para agilizar a requisição ajax

axios.get('https://api.github.com/users/maykbrito')
.then(function(response){
    console.log(response);
})
.catch(function(error){
    console.warn(error);
});

