const a = [1,2,3,4,5,6];
const b = a.slice(2,5);
console.log(b);
console.log(a);

// Akhane 2 index start mane 2, akhan thek so 3 count hobe and ses 5 index mane 5,er
// pore so 6 er vetor asbena. and main array kno change hobena


const c = [0,1,2,3,4,5,6];
const d = c.splice(2,5,10,20);
console.log(d);
console.log(c);
// Akhane 2 index start mane 2, akhan thek so 2 count hobe and ses 5 index mane 5 ti
// value kete nibe 2 theke suru 6 ses tahole 5 ti value count holo.
// and main array kno change hobe and 5 er pore kono value dile ta array te add hobe.

var e = c.join("|");
console.log(e);



// NOTE: SLICE AND SPLICE ER MAJHE CHANGE HOILO SLICE(2,5) 2 NO INDEX THEKE START HOBE
// AND 5 NO INDEX TA 0 THEKE COUNT HOBE 

// NOTE: SLICE AND SPLICE ER MAJHE CHANGE HOILO SPLICE(2,5) 2 NO INDEX THEKE START HOBE
// AND 5 NO INDEX TA 2 NO INDEX THEKE COUNT HOBE MOT 5 TI VALUE COUNT KORBE