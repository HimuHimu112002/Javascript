function fact(num){
    var sum = 1;
    if(num==0){
        return 0;
    }
    else if(num == 1){
        return 1;
    }
    else{
        for(var i=1; i<=num; i++){
            sum = sum * i;
        }
        return sum;
    }
}

var result = fact(5);
console.log(result);