const numbers = [1,2,3,4,5];
const result = numbers.map(function(element){
    return element * element;
})
console.log(result);

const number = [1,2,3,4,5];
//  map er majhe 3 ti element pass kora jai jemon value,, index,,array
const result1 = number.map(x => x * x)
console.log(result1);


//  filter er majhe 3 ti element pass kora jai jemon value,, index,,array
const result3 = number.filter(x => x > 3)
console.log(result3)


//  find er majhe 3 ti element pass kora jai jemon value,, index,,array
const result4 = number.find(x => x > 3)
// find mane hosche condition true hole just tar pore jei value ase sei value print
// korbe jemon 3 er theke boro ase 4 and 5 but find sudhu 4 uotput dekhabe.
console.log(result4);

