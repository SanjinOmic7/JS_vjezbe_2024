const zemlja = "Hrvatska";
const kontinent = "Europa";
let populacija = 3860000;


populacija /= 2;
populacija += 1;

// Definiranje populacije druge zemlje (Malta)
const populacijaDrugeZemlje = 518536; // Populacija Malte

// Usporedba populacije Hrvatske s populacijom druge zemlje
const hrvatskaVecaOdDruge = populacija > populacijaDrugeZemlje;

// Kreiranje rečenice koristeći template literal
const recenica = `${zemlja} ima ${populacija.toLocaleString()} stanovnika i nalazi se u ${kontinent}`;

// Ispis rezultata
console.log("Nova populacija Hrvatske:", populacija);
console.log("Da li je populacija Hrvatske veća od populacije Malte?", hrvatskaVecaOdDruge);
console.log("Rečenica:", recenica);