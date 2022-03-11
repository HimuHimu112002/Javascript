// Problem 1 sawping array
let array = [1,2,3,4,5,67];
[array[0], array[5]] = [array[5], array[0]];
// console.log(array);

// Problem 2 dectructuring alises
const value = {
    name: 'himu',
    age: 24,
};
const{name:name1,age} = value;
// console.log(name1,age);

// Problem 3 Duplicate value romeve
// Set duplicate value count korena
let number = [1,2,2,2,3,4,5,6];
// console.log([...new Set(number)]);

// Problem 4 Compare 2 array
const num1 = [1,2,3,4,5];
const num2 = [1,2,3,4,6];

const compare =(a,b)=>{
    // every er majhe v and i num1 er array value er majh diye jabe and store korbe
    // then num1 er value guli num2 er index er valuer sathe compare korbe
    return num1.length === num2.length && num1.every((v,i) => v===num2[i]);
};

const final = compare(num1,num2);
// console.log(final);

// Problem 5 sort random array
const arraySort1 = [1,55,32,5,7,444];
// console.log(arraySort1.sort((a,b)=> Math.random()-0.4));

// Asyncronus style print hobe
const arraySort2 = [1,55,32,5,7,444];
// console.log(arraySort2.sort(()=> Math.random()-1));

// Problem 6 comma oparetor
// Comma oparetor left site er value right site er oparetor store hoi 
let x = 1;
x = (x++,x+3);
// console.log(x);
// duvabei vabei Same outPut show korbe
let y = (2,3+3);
console.log(y);
