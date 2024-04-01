"use strict";

/* Ako zelimo, mozemo definirati vrojednost objekta pomocu varijabli na globalnom scopru */
const ime ="Darko";
const prezime = "Horvat";
const godine = 30;

//ako nam je ime svojsta objekta jednako varijabli pomocu koje dodjelujemo vrijednost mozemo ovako skraceno napisati
const osoba = {
    ime,
    prezime,
    godine,
};

console.log(osoba);

// DEKONSTRUIRANJE OBJEKTA/LISTI

// 1. DEKONSTRUIRANJE Listi

const brojevi = [1, 2, 3, 4, 5, 6];

const [broj1, broj2, ...ostatakListe] = brojevi;

console.log(broj1, broj2, ostatakListe);

const [num1, ,num3] = brojevi;
console.log(num1, num3);

// 2. DEKONSTUIRANJE Objekta

const todo = {
    id: 1,
    zadatak: "Kupi kruh",
    adresa: {
        ulica: "Trg trgovine",
        grad: "Sisak",
    },
};

// const id = todo.id;
// console.log(id);

const  { id, zadatak, adresa } = todo;

// izvlacenje svojstva iz podobjekta u varijablu (u ovom slucaju varijablu ulica)
const {
    adresa: {ulica},
} = todo;

console.log(ulica);
