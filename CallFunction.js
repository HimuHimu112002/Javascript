function call(name, age, roll) {
    console.log(name, age);
}
function add(num, task){
    var result = num + task;
    for(var i = 0; i<=result; i++){
        console.log(i);
    }
}
call('himu', 20, add(5,5));
