var fetch = require('node-fetch');

function retrieveWikipediaInfo(topic){

    let url = "https://en.wikipedia.org/w/api.php?action=parse&section=0&prop=text&format=json&page="+topic;

    fetch(url)
    .then(function(res) {
        return res.json();
    }).then(function(data){
        let wikiText  = data.parse.text['*'];
        var count = (wikiText.split(topic).length)-1;
        console.log(count);
    });

}

retrieveWikipediaInfo('pizza');