var array = [1,2,3,4,5];
function add(array) {
    var count = [];
    count.push(10);
    for(let i = 1; i<=array.length; i++){
        count.push(i);
    }
    return count;
}
console.log(add(array));
