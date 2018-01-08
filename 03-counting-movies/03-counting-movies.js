var fetch = require('node-fetch');

function countMovieTitles ( title ){

    let page = 1;
    let url = "https://jsonmock.hackerrank.com/api/movies/search/?Title="+title+"&page=";
    console.log('counting titles for movie ' + title );

    fetch(url+page)
    .then(function(res) {
        return res.json();
    }).then(function(data) {
        console.log(data.total);
    });

} 

countMovieTitles("maze");