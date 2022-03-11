function closure(){
    let count = 0;
    return function(){
        count ++;
        return count;
    }
}

const finl = closure();
console.log(finl());
console.log(finl());
console.log(finl());
//  clouser mane akti akti alada division final value set korar pore jotoi print
// kori sob final value er amjhei thakbe 


//  final1 value set korar pore jotoi print
// kori sob final1 value er amjhei thakbe final1 kokhono final er sathe add hobena
const finl1 = closure();
console.log(finl1());
console.log(finl1());

// final1 er pore ba jekono jagai final use korle age ja man silo thik tar por thke
// count hote thakbe.
console.log(finl());

