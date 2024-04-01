"use strict";

console.log("gol 1");
console.log("gol 2");
console.log("gol 3");
console.log("gol 4");
console.log("gol 5");
console.log("gol 6");
console.log("gol 7");
console.log("gol 8");
console.log("gol 9");
console.log("gol 10");

/* Rjesavanje ovakvog problema mozemo napraviti rekurzijom iliti ponavaljanjem izvodjenja dok se odredjeni uvjet ne ispuni,
Prvo definiramo uvjet kada se rekurzija zavrsava, a tek omda definiramo operaciju unutar funkcije koja ce samu sebe pozivati iznova dok se ovaj uvjet
na pocetku ne ispuni */

function golovi(gol) {
// 1. korak -  cim otvorimo funkciju definiramo uvjet kada ce rekurzija zavrsiti
    if (gol > 10) return;
// 2. korak - definiranje rekurzivnog poziva i sto ce on raditi    
    else console.log(`gol ${gol}`);
    return golovi(gol + 1);
}

golovi(1);

// kako bi ovo napisali sa for petljom

for(let i = 1; i < 10; i++) {
    console.log(`gol ${i}`);
}


// moderan pristup For petlji

const predmeti= ["stol", "stolice", "stoljnjak", "vaza"];

for (let i = 0; i < predmeti.length; i++) {
    console.log(predmeti[i]);
}

// novi nacin pisanja for petlje, tzv. "Of" metoda.
// Ideja je da definiramo element kao jednog clana liste elemenata i prodjemo kroz sve clanove liste.

for (const predmet of predmeti) {
    console.log(predmet);
}

// kako to iskoristiti kod liste objekata

const korisnici = [
    {ime: "Davor"},
    {ime: "Stjepan"},
    {ime: "Iva"},
    {ime: "Maja"},
    {ime: "Sanjin"},
];

for (const korisnik of korisnici) {
    console.log(korisnik.ime);
}

// mozemo loopati i string npr:

const rijec = "Algebra";
for (const slovo of rijec) {
    console.log(slovo);
}

const boje = ["crvena", "zelena", "plava", "zuta", "zelena"];

/* Za dohvacanje kljuceva/rednog clana listnog elementa mozemo koristiti "in" metodu. */
for (const boja in boje) {
    console.log(boja, boje[boja]);
}


// Praktican primjer

const osoba = [
    "davor",
    "horvat",
    30,
    "poštar",
    ["luka", "branimir", "ivan", "bernarda", "zvonimir"]
]

const tipovi = []

for (let i = 0; i < osoba.length; i++) {
    tipovi[i] = typeof osoba [i];
}

console.log(tipovi);


// Petlja unutar petlje (ugnjijezdjena petlja)

for (let i = 1; i <= 5; i++) {
    console.log(`broj ${i}`);
    for (let j = 1; j <= 3; j++) {
        console.log(`${i} * ${j} = ${i * j}`);
    }
}

/* Ovakvo ponasanje se dogadja jer imamo petlju unutar petlje, kada prva petlja krene i naleti na ugnijezdjenju petlju
ta petlja se mkora odvriti do kraja i tek kad se odvrti do kraja, krece iduca iteracija vanjske petlje, koja onda ponovo pokrece u toj iducoj iteraciji
unutarnju petlju da se vrti iz pocetka za tu iteraciju vanjske petlje */


const godine = [1999, 2001, 2005, 2003];
const dob = [];

for (let i = 0; i < godine.length; i++) {
    dob.push(2024 - godine[i]);
}

console.log(dob);


// continue i break

/* Napravit cemo for petlju koja ide do 20, ali zelimo napraviti prekid izvrsenja petlje ako dodje do toga da se neki uvjet ispuni */

for (let i = 0; i <=20; i++) {
    if (i === 10) {
        console.log("STOP");
        break;
    }
    console.log(i);
}

/* Napravit cemo for petlju koja ide do 20, ali zelimo na odredjenom mjestu umjesto ispisa onog sto bi se trebalo ispisat po redoslijedu izvodjenja,
postaviti da se odradi nesto drugo i nakon toga nastavi izvrsavanje petlje */

for (let i = 0; i <=20; i++) {
    if (i === 10) {
        console.log("umjesto broja 10 ide deset...");
        continue;
    }
    console.log(i);
}

// izvođenje petlje od zadnjeg prema prvom članu liste

for (let i = godine.length - 1; i >= 0; i--) {
    console.log(godine[i]);
  }