

// switch (dan) {
//     case "ponedjeljak": // Ovaj case radi provjeru kao da sam upisao dan === ponedjeljak
//         console.log("Danas je prvi dan tjedna");
//         console.log("cetiri dana udaljeni od vikenda");
//         break; //Kada ovdje nebi bilo breaka kod ce ispisati i iduci dan, sve dok ne naleti na break
//     case "utorak":
//         console.log("danas je drugi dan tjedna");
//         break;

//     case "srijeda":
//         console.log("sredina tjedna");

//     case "cetvrtak" :
//         console.log("mali petak");
//         break; // s obzirom da nakon casea sriijede nije bilo breaka, ispisat ce se i case cetvrtak

//     case "petak":
//         console.log("Petak je");
//         break;

//     case "subota":
//     case "nedjelja":
//         console.log("vikeend je");
//         break;
//     default:
//             console.log("Niste unijeli dan u tjednu");
// }


//primjer do-while, while-do

const count = 0;
while (count < 10) {
    console.log(count);
    count++;
}

let brojac = 0;
do {
    brojac++;
    console.log(brojac);
    
} while (brojac < 10);

let broj = 3;

while (broj <= 20) {
  console.log(broj);
  broj++;
}

let broj = 3;

while (broj <= 20) {
  if (broj % 9 !== 0) {
    console.log(broj);
  }
  broj++;
}