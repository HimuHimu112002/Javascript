// Problem 1 all false value rekhe true value guli print kora boolean mane true value
// ber kore anbe
let array = ['1',NaN,false,undefined];
let result1 = array.filter(Boolean);
console.log(result1);

// Problem 2 jekono number ba string boolean convert kora
let convert = (!!"Himu");
console.log(convert);

// Problem 3 Resize array
let reSize = [1,2,3,4,5,6];
reSize.length = 4;
console.log(reSize);

// Problem 4 flatten array in multi-dimensional array
let multi1 = [1,2,[3,4],[5,6]];
console.log(multi1.flat());

let multi2 = [1,2,[3,[10,20],4],[5,6]];
console.log(multi2.flat(Infinity));

// Problem 5 short condition
let himu = "bangl";
himu === "bangla" && console.log("yes");
himu =! "bangla" || console.log("not");

// Problem 6 replace jeto jagai thakbe sob replace hobe.
let num = "Amar sonar bangla ami tomai valo basi chirodin tomar akash tomar sonar";
console.log(num.replace(/sonar/g, "himu"));

// Problem 7 kono property er value janar way
let a = "bangla";
let b = "India";
console.log({a});
console.log({b});

//  Problem 8 program run timing check
const startTime = performance.now();
for (let i = 0; i < 20; i++) {
    console.log(i);
    
}
const endTime = performance.now();
console.log(`Run time is = ${endTime - startTime}`);