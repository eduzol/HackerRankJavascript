var fetch = require('node-fetch');

function getCountryByPopulation( substr , population ){

    let page = 1;
    let url = "https://jsonmock.hackerrank.com/api/countries/search/?name="+substr+"&page=";
    let urls = [];

    fetch(url+page)
    .then(function(res) {
        return res.json();
    }).then(function(data) {

        totalPages = data.total_pages;
        total =  data.total;
        
        for ( let i = 1 ; i <= totalPages ; i++ ){
            urls.push(url+""+i);
        }

        Promise.all(urls.map(url =>
            fetch(url).then(resp => resp.json())
        )).then(responses => {
            
            let data = responses.map( response => response.data );
            let countries = [].concat.apply([],data).filter( country => country.population > population );
            let total = countries.length + 1;
            console.log(total);

        });
      
    });

}

getCountryByPopulation('ica' , 5000000);


