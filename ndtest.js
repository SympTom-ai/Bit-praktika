
console.clear();


let z = 'Labas'
for (let i=1; i <=z.length; i++){
    console.log(z);
}

let Raide = '';
let PilnasZodis = '';

for (let i = zodisIlgas.length -1; i>=0; i--) {
    Raide = zodisIlgas.charAt(i);
    PilnasZodis += Raide;
}

console.log(PilnasZodis);
