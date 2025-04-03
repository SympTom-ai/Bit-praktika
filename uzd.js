const mokinys = ['Mykolas', 5, 7, 2, 6];

function mokinioVidurkis(mokinys) {
    console.log('Mokinio vardas' + mokinys[0]);
    let vidurkis = (mokinys[1] + mokinys[2] + mokinys[3] + mokinys[4]) / 4;
    if (vidurkis >= 3 ,5)
    {
    console.log (mokinys[0] + ' islaike. Jo vidurkis:'+ vidurkis);
    }
    else
    {
        let vidurkisNaujas = ((vidurkis*4)+10)/5;
        console.log(mokinys[0] + ' Neislaike. Jo dabartinis vidurkis:' + vidurkis);
        if (vidurkisNaujas >= 3, 5)
        {
            console.log(mokinys[0] + ' islaikytu kursa jeigu gauti viena desimtuka');
        }
    }
}
console.clear();


const Filmas = ('The gorge', 'Veiksmo',7);
const Filmas2 = ('Sonic' , 'animacinis' , 8);
const Filmas3 = ('Paranormal activity', 'siaubo', 5);
const Filmas4 = ('siaubo', 9);
const Filmas5 =('Komedija', 7);


console.clear();

const filmai = [
    ["Inception", "Sci-Fi", 8.8],
    ["The Dark Knight", "Action", 9.0],
    ["Interstellar", "Sci-Fi", 8.6],
    ["The Matrix", "Sci-Fi", 8.7],
    ["Pulp Fiction", "Crime", 8.9]
  ];
  
  const megstamasZanras = "Sci-Fi";  
  const minimalusIvertis = 8.7;
  
  let tinkamiFilmai = [];
  
  for (let i = 0; i < filmai.length; i++) {
    const filmas = filmai[i];
    const pavadinimas = filmas[0];
    const zanras = filmas[1];
    const ivertis = filmas[2];
  
    if (zanras === megstamasZanras && ivertis >= minimalusIvertis) {
      tinkamiFilmai.push(pavadinimas);
    }
  }
  if (tinkamiFilmai.length > 0) {
    console.log("Radome filmų, kurie jums gali patikti:");
    for (let j = 0; j < tinkamiFilmai.length; j++) {
      console.log("- " + tinkamiFilmai[j]);
    }
  } else {
    console.log("Deja, neradome filmų pagal jūsų pasirinkimus.");
  }

console.clear();

const filmai2 = [
    ["Tadas Blinda", "Veiksmo", 7],
    ["3 Milijonai", "Komedija", 8],
    ["Gautas Iskvietimas", "Komedija", 9],
    ["Piligrimai", "Trileris", 6]
];

const ManoZanras = 'Komedija';
const ManoIvertis = 8;

let PatinkantisFilmai = [];

for (let i = 0; i < filmai2.length; i++) {
  const filmas2 = filmai2[i];
  const pavadinimas2 = filmas2[0];
  const zanras2 = filmas2[1];
  const ivertis2 = filmas2[2];

  if (zanras2 === ManoZanras && ivertis2 >=ManoIvertis) {
    PatinkantisFilmai.push(pavadinimas2);
  }
}
if(PatinkantisFilmai.length > 0) {
  console.log("Tau patiks sie filmai:");
  for (let j = 0; j < PatinkantisFilmai.length; j++) {
    console.log("-" + PatinkantisFilmai[j]);
  }
} else {
  console.log("Deja tau nepatiks sie filmai:");
}


const skaiciai1 = [1, 2, 3]
let sk = 0

function addNum (sk)
{
  return (sk[0] + sk[1]+sk[2])
}
function tellNum (sk)
{
  console.log(sk[0]);
}

let suma = addNum(skaiciai1);
console.log(sk[0]);

tellNum(skaiciai1);

console.clear();

// Miestai ir atstumas iki Vlniaus

let Miestai = [
  'Kaunas', 102,
  'Alytus', 105,
  'Kupiskis', 154,
  'Druskininkai', 129,
  'Pakruojis', 184,
  'Kretinga', 314,
  'Nida', 361,
  'Marijampole', 139,
  'Trakai', 27,
  'Visaginas', 158,
  'Varena', 81
]


function PasiektasMiestas() {
for (let i = 100; i >= Miestai.length; i += 2) {
}
}

console.log(Miestai[2]);


 console.clear();

 for (let i = 1 ; i < 100; i++){
  if (i % 7 ===0) {
    console.log('Lucky' + i)
  }
 }  