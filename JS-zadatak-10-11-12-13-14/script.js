"use strict";


const marko = {
    ime: "Marko",
    tezina: 78, 
    visina: 1.69 
};

const josip = {
    ime: "Josip",
    tezina: 92, 
    visina: 1.95 
};


marko.calcITM = function() {
    this.itm = this.tezina / (this.visina ** 2);
    return this.itm;
};

josip.calcITM = function() {
    this.itm = this.tezina / (this.visina ** 2);
    return this.itm;
};


const markovITM = marko.calcITM();
const josipovITM = josip.calcITM();


if (markovITM > josipovITM) {
    console.log(`Markov ITM (${markovITM}) je veći od Josipovog ITM (${josipovITM})!`);
} else if (josipovITM > markovITM) {
    console.log(`Josipov ITM (${josipovITM}) je veći od Markovog ITM (${markovITM})!`);
} else {
    console.log("Marko i Josip imaju jednak ITM!");
}


// ZADATAK 11 ALBUMI


const album = [
    {
        umjetnik: "Metallica",
        naslov: "Master of Puppets",
        godina: 1986,
        format: ["CD", "8T", "LP"],
    },
];

const noviAlbum = {
    umjetnik: "Bob Marley",
    naslov: "Live!",
    godina: 1975,
    format: ["8T", "LP"],
};


album.push(noviAlbum);

console.log(album);


// ZADATAK 12 - Imena


const imena = ["Sanjin", "Ivan", "Marko", "Pero", "Matej"];

const mojeIme = "Sanjin"; 

for (let i = 0; i < imena.length; i++) {
    if (imena[i] === mojeIme) {
        console.log(`${imena[i]} je super`);
    } else {
        console.log(imena[i]);
    }
}


// ZADATAK 13 - Bacači


let brojBacanja = 0;
let rezultat;

while (rezultat !== 6) {
    brojBacanja++;
    rezultat = Math.floor(Math.random() * 6) + 1;
    console.log(`Bacanje ${brojBacanja}: rezultat je ${rezultat}`);
}

console.log(`Dobili smo 6 nakon ${brojBacanja} bacanja.`);


// ZADATAK 14 - Računi-Napojnice


const racuni = [];
for (let i = 0; i < 10; i++) {
    racuni.push(Math.floor(Math.random() * 400) + 1);
}
console.log("Računi:", racuni);

const napojnice = [];
const total = [];

for (let i = 0; i < racuni.length; i++) {
    let napojnica;
    if (racuni[i] >= 50 && racuni[i] <= 300) {
        napojnica = racuni[i] * 0.15;
    } else {
        napojnica = racuni[i] * 0.20;
    }
    napojnice.push(napojnica);
    total.push(racuni[i] + napojnica);
}

console.log("Napojnice:", napojnice);
console.log("Total:", total);


