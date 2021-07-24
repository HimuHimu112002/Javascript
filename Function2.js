var a = [1,2,3,4,5,6,7,8,9]
var count = 3
var isNumber = false
for(var i = 0; i<a.length; i++){
    if(count==a[i]){
        console.log("Number is found Successfully\nIndex Number is = "+i+"\n"+"Value Number is = "+a[i])
        isNumber = true
        break
    }
}
if(!isNumber){
    console.log("Number is not found try agian")
}