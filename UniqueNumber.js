var array1 = [1,2,3,4,4,5,5,6,6];
var array2 = [];
for(var i=0; i<array1.length; i++){
    var element = array1[i];
    var index = array2.indexOf(element)
    // index -1 mane array2 faka kono array er element na thakle tar index -1
    // hoi and (4 er index 3 next jokhn 4 er index abar 4 hobe tokhon er)
    // index hobe  3 karon 3 no index 4 silo tai 4 no index er element 3 no
    // index er sathe match korai 4 er index hobe 3 so -1 na houyar karone 
    // duplicate value hobe and seta array theke bad 
    if(index == -1){
        array2.push(element)
    }
}
console.log(array2)


// Index -1 er example
// var array3 = []
// var r = array3.indexOf();
// console.log(r)