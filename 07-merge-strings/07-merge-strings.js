function mergeStrings( strA, strB){

    let resultArr = [];

    let strArr = strA.split('');
    let strBrr = strB.split('');
    let aLength = strArr.length;
    let bLength = strBrr.length;
    let limit =  bLength > aLength ? bLength : aLength;

    let i = 0;
    
    while ( i < limit ){

        if ( i < aLength ){
            resultArr.push(strArr[i]);
        }

        if ( i < bLength ){
            resultArr.push(strBrr[i]);
        }
        i++;
    }

    let answer = resultArr.join('');    
    console.log(answer);
    return answer;

}

mergeStrings("abc" , "defghi");