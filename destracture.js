const person = {Name: "Himu", Age: 24, Home: "Naogaon", Phone: '01733571516'}
const {Phone, Home, Age} = person;
console.log(Phone,Home,Age);
// Destracture mane hosche akti stracture theke vange kisu stracture niye asa.


//  Array destracture 
const person1 = ['himu', 'hira', 'tonny', 'junayed', 'nayem', 'muhib'];
// first namer er vetor 0 no index value asbe and second name dile 2 index er value
// asebe
const [first] = person1;

// spreat oparetor use korle array destracture er sokol element chole asbe.
// const [...first] = person1;
console.log(first);


// Sub destracture
const hello = {
    Name:'abc',
    hello1:{
        age:17,
        roll:20
    }
}

const {roll: roll1} = hello.hello1;
console.log(roll1);