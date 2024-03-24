"use strict";



function izracunajPostotak(brojIgraca, ukupnoIgraca) {
    return (brojIgraca / ukupnoIgraca) * 100;
}


function ispisiRezultat(zemlja, populacija, postotak) {
    console.log(`${zemlja} ima ${populacija} igrača što je oko ${postotak.toFixed(2)}% svijeta`);
}


var brojIgracaHrvatska = 10;
var brojIgracaKina = 3441;
var brojIgracaUSA = 332;


var ukupnoIgraca = 10000;


var postotakHrvatska = izracunajPostotak(brojIgracaHrvatska, ukupnoIgraca);
var postotakKina = izracunajPostotak(brojIgracaKina, ukupnoIgraca);
var postotakUSA = izracunajPostotak(brojIgracaUSA, ukupnoIgraca);


ispisiRezultat("Hrvatska", brojIgracaHrvatska, postotakHrvatska);
ispisiRezultat("Kina", brojIgracaKina, postotakKina);
ispisiRezultat("USA", brojIgracaUSA, postotakUSA);