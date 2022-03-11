// 0,1,1,2,3,5,8,13

function fibonacci(num){
    let fibo = [1,2];
    for(var i=2; i<=num; i++){
        fibo[i] = fibo[i-1] + fibo[i-2]
        // akhane i-1 mane i=5 and i-1 tar ak ghor age same i-2 holo i er man theke
        // 2 ghor samne  
    }
    return fibo;
}

let final = fibonacci(5);
// console.log(final);

function reFibonacci(number){
    if (number==0 || number==1) {
        return 1;
    }
    else{
        return reFibonacci(number-1) + reFibonacci(number-2);
    }
}
console.log(reFibonacci(6));