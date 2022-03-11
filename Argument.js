function argum(num1, num2) {
    var result = 0;
    var array=[];
    for(var i = 0; i<arguments.length; i++){
        // Arguments mane array value guli paoya jabe;
        result = result + arguments[i];
        // array.push(result);
    }
    array.push(result);
    return array;
    
}
var total = argum(1,2,3,4,5,6,7,8);
console.log(total)