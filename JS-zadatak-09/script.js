"use strict";

function izracunajNapojnicu(racun) {
    let napojnica;
    if (racun >= 50 && racun <= 300) {
        napojnica = racun * 0.15;
    } else {
        napojnica = racun * 0.20;
    }
    return napojnica;
}

const racuni = [125, 555, 44];
const napojnice = racuni.map(racun => izracunajNapojnicu(racun));
const total = racuni.map((racun, index) => racun + napojnice[index]);

console.log("Računi:", racuni);
console.log("Napojnice:", napojnice);
console.log("Total:", total);