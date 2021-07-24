/*var array = [1,2,3,4,5]

function myFunction(array,cb){
    var newArray = []
    for(var i=0; i<array.length; i++){
        var temp = cb(array[i])
        newArray.push(temp)
    }
    return newArray
}

var sqr = myFunction(array,function(value){
    return value + value + value
})
console.log(sqr) 
 
var change = myFunction(array,function(value){
    return value + 10
})
console.log(change)

var a = [4,2,3,4,5,6]

function my(a,cb){
    var newArray = []
    for(var i=0;i<a.length;i++){
            newArray.push(cb(a[i]))
        
    }
    return newArray
}
var first = my(a,function(value){
    return value % 2 ==1

})
console.log(first)*/

var a = ["HIMU","HIMU1","HIMU2","HIMU3","HIMU4"]

function my(a,cb){
    var c = []
    for(var i=0; i<a.length;i++){
        c.push(cb(a[i]))
    }
    return c.reverse(a[i])
}



var b = my(a,function(value){
    //return value
    if(value=="HIMU4" || value=="HIMU3"){
        return value + "66"
    }else{
        return value
    }
})
console.log(b)