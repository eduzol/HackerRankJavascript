function arrangeSentence( sentence ){

    let words =  sentence.split(" ").sort(function( first, second) {
        return first.length - second.length;
    });

    let answer  = words.join(' ');
    console.log(answer);
    return answer;
}

arrangeSentence("Cats and Hats");
