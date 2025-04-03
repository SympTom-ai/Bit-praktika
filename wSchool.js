let text = "Apple, Banana, Kiwi";
let part = text.slice(7);
console.log(part);
console.log('hi')

console.clear();

// Filmų sąrašas
const filmai = [
    ["Inception", "Sci-Fi", 8.8],
    ["The Dark Knight", "Action", 9.0],
    ["Interstellar", "Sci-Fi", 8.6],
    ["The Matrix", "Sci-Fi", 8.7],
    ["Pulp Fiction", "Crime", 8.9]
];

// Mėgstamas žanras ir minimalus įvertis
const megstamasZanras = "Sci-Fi";
const norimasIvertis = 8.7;

// Funkcija, kuri išfiltruoja filmus
function rastiFilmus(filmai, zanras, ivertis) {
    const tinkamiFilmai = filmai.filter(filmas => 
        filmas[1] === zanras && filmas[2] >= ivertis
    );

    if (tinkamiFilmai.length > 0) {
        console.log("Jums gali patikti šie filmai:");
        tinkamiFilmai.forEach(filmas => console.log(filmas[0]));
    } else {
        console.log("Deja, nėra filmų, atitinkančių jūsų pasirinkimus.");
    }
}

// Iškviečiame funkciją
rastiFilmus(filmai, megstamasZanras, norimasIvertis);

console.clear();

// 1. Susikurkite bent 6 sąrašo (array) tipo kintamuosius
let mokinys1 = ["Jonas", 5, 8, 6, 7, 4];
let mokinys2 = ["Ona", 3, 4, 2, 5, 3];
let mokinys3 = ["Petras", 9, 10, 8, 9, 10];
let mokinys4 = ["Ieva", 6, 7, 5, 6, 8];
let mokinys5 = ["Marius", 2, 3, 4, 2, 3];
let mokinys6 = ["Gabija", 10, 9, 10, 9, 10];

// 2. Sukurkite funkciją, kuri atliks reikiamus veiksmus
function patikrintiMokinioRezultatus(mokinys) {
    let vardas = mokinys[0]; // Pirmas narys yra vardas
    let pazymiai = mokinys.slice(1); // Likę nariai yra pažymiai

    // Skaičiuojame vidurkį
    let suma = pazymiai.reduce((a, b) => a + b, 0);
    let vidurkis = suma / pazymiai.length;

    // Išvedame mokinio vardą
    console.log(`Mokinio vardas: ${vardas}`);

    // Išvedame vidurkį ir patikriname, ar mokinys išlaikė kursą
    console.log(`Pažymių vidurkis: ${vidurkis.toFixed(2)}`);
    if (vidurkis >= 5) {
        console.log("Mokinys išlaikė kursą.");
    } else {
        console.log("Mokinys neišlaikė kurso.");

        // Tikriname, ar mokinys turi bent vieną gerą pažymį (>= 8)
        let geriPazymiai = pazymiai.filter(pazymys => pazymys >= 8);
        if (geriPazymiai.length > 0) {
            console.log("Mokinys turi bent vieną gerą pažymį ir galėtų pasitaisyti savo vidurkį.");
        } else {
            console.log("Mokinys neturi nei vieno gero pažymio, tad pasitaisyti vidurkio bus sunku.");
        }
    }
    console.log("-----------------------------");
}

// 3. Išbandome funkciją su visais mokiniais
patikrintiMokinioRezultatus(mokinys1);
patikrintiMokinioRezultatus(mokinys2);
patikrintiMokinioRezultatus(mokinys3);
patikrintiMokinioRezultatus(mokinys4);
patikrintiMokinioRezultatus(mokinys5);
patikrintiMokinioRezultatus(mokinys6);
