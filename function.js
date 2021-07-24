/*var add = function(a,b){    //This is Enonimus function
console.log(a+b)

    function final(a,b){
        console.log(a-b)
        
            function sub(a,b){
                console.log(a*b)

                    function divison(a,b){
                        console.log(a/b)
                    }
                    divison(10,5)
            }
            sub(100,50)
    }
    final(100,50)
   

}
add(200,300)


function a(n){
    function x(){ //First function variable name second function access thake
        return n%3==0
    }
    function y(){
        return n%5==0
    }
    console.log("This is = "+x())
    console.log("This is = "+y())
    if(x()&&y())
    {
        console.log("This is ok")
    }else{
        console.log("This is not ok")
    }
}

a(15)*/
class final{
    
    constructor(a,b){
        this.a = a
        this.b = b
        //return a+b

    }
    display(){
        console.log(a+b)
    }
}

var ob = new final(1,4)
ob.display