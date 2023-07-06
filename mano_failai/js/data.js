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


a = true;
b = a === true ? true:false;
console.log(a);
console.log(b);


for (let i2 = 0; i2 <16; i2+=4){console.log(i2)}


let sportininkas = "as";
let vieta = "antra";

switch (vieta){
    case "pirma":
        medalis = "aukso";
        break;
    case "antra":
        medalis = "sidabro";
        break;
    case "trecia":
        medalis = "bronzos";
        break;
    default:
        medalis = "medinis";
        break;
}

console.log(sportininkas + ' laimejo ' + medalis);




a = 2+2;
switch (a){
    case 3:
        console.log('ax reiksme yra mazesne uz 4');
        break;
    case 4:
        console.log('ax reiksme yra lygi uz 4');
        break;
    case 5:
        console.log('ax reiksme yra daugiau uz 4');
        break;
    default:
        console.log('ax reiksme yra ne nezinoma');
        break;
}

let fruits = ["apple", "orange","plum"]

console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits.length);

fruits[2] = 'pear';
fruits[3] = 'lemon'
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[3]);
console.log(fruits.length)

let arr = ["apple", "orange", "pear"];
for (let i = 0; i <arr.lenght; i++){
    console.log(arr[i]);
    }


for (let fruit of fruits){
console.log(fruit)
}


function sum (a, b) {
    return (a+b);
}
console.log(sum (10, 50));


