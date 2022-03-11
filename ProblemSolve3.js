// Problem 1 add 2 blank array
// Output asbe blank
// console.log([] + []);

// Problem 2 add object and array
// console.log({} + []);

// Problem 3
// Akhane function declair korar pore tar pase je litarel likha ase ata function 
// arguments hisabe pass hobe;
function contry() {
    // console.log(arguments);
    return 'Bangladesh'
    
}

const result = contry `hello`;
// console.log(result);

// Problem 4 
function b(){
    // console.log(`the length is ${this.length}`);
}

let a ={
    method: function(b){
        arguments[0]();
        // console.log(arguments);
        // [Arguments] { '0': [Function: b], '1': 4, '2': 4 }
    }
    // b first a.method er vetor function jabe akhan theke b functon call hobe 
    // then same vabe 5 and 4 a.method er vator jabe b function call hobe je koti
    // valu ase length thik same hobe
}
a.method(b,4,4);

//  Problem 5
const c = 'Bangladesh';
console.log(c.lastIndexOf());

// Problem 6
// console.log(0.1 + 0.2);
// Just atar output 0.3 hobena jodi 0.2 na diye 0.3 ditam output thik thakto 
// but kisu khetre output thik thakena
let d = 0.1 + 0.2;
let e = d.toFixed(1);
// Jodi output right na ase thale toFixed diye output thik kora jai
// console.log(e);

// Problem 7
// First proto ti string show korbe then 2nd proto first protok show korbe jemon
// first proto strin accept kore then first proto objet hoiye jai so second proto
// er man hobe object mane first er man then 2nd er pore jeto proto thakbe son null
console.log(('Bangladesh').__proto__.__proto__.__proto__);