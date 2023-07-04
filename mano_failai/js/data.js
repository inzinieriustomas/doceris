let years = 1984;
let month = 07;
let day = 06;

let yearss = 1984 % 10;
let monthh = 07 % 10;
let dayy = 06 % 10;


suma = ( dayy + monthh + yearss );
console.log( suma )



PI = 3.14
r = 15

let ilgis = 2*PI*r;
let plotas = PI * (r**2);

console.log( ilgis );
console.log( plotas );




let runner = "boltas";
let pozicija = 2;
let medalis;


if (pozicija === 1) {
medalis = "aukso";
} else if (pozicija === 2) {
medalis = "sidabro";
} else if (pozicija === 3) {
medalis = "bronzos";
} else if (pozicija < 4) {
medalis = "užėmė ne prizinę vietą";
} else {
medalis = "neprizinės vietos";
}

console.log( runner  + " laimejo " + medalis +" medali " );

