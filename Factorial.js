function fact(number){
    var sum = 1;
    for(var i=1; i<=number; i++){
        sum = sum * i;
    }
    return sum;
}

var final = fact(5);
console.log(final);