var readline = require('readline');
var fs = require('fs');
var file = [];
var fileName = '00-hosts.txt';

var io = readline.createInterface({
    input: fs.createReadStream(fileName)
});

io.on('line', function (line) {
    file.push(line);
});


io.on('close', function(){
    countTotalHosts(file);
});


function countTotalHosts(file) {

    let hosts =  file.map( line => line.split(' ')[0]).reduce( function(previous, current){
        previous[current] = (previous[current] || 0) + 1;
        return previous;
    }, {});

    console.log(hosts);

    Object.keys(hosts).forEach(function(key){
        fs.appendFile('records_'+fileName, key + ' ' + hosts[key] + '\n', function (err) {
            if (err) throw err;
          });
    })
    
}
