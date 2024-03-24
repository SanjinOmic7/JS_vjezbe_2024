"use strict";

const osoba = ["Darko" , "Horvat" , "poštar" , ["Marko", "Maja", "Josipa"]];

console.log(osoba);

/*  U situaciji kada bi htjeli imenovati ključeve za dohvaćanje podataka (što nemožemo u listama, jer tamo ih hvatamo po indexu, tj. broju na koje se nalaze na listi),
možemo koristiti objekte. Za razliku od listi, njih definiramo vitičastom zagradom i njezini činovi
imaju svoj ključ/vrijednost par. Znači mi definiramo ključ pod kojim se sprema vrijednost i pomoću tog ključa možemo i dohvaćati vrijednosti
iz objekta. Znači stvari iz liste dohvaćamo indexom, tj. brojem a kod objekta dohvaćamo ključem koji smo dodjelili određenoj vrijednosti. */

const objekt = {
    firstName: "Darko",
    lastName: "Horvat",
    godine: 30,
    zanimanje: "poštar",
    prijatelji: ["Marko", "Maja", "Josipa"],
};

console.log(objekt);

/* Dohvaćanje određene vrijednosti iz objekta pomoću ključa se može odraditi na 2 načina */

// 1 način je tzv. "dot" notacija.
console.log(objekt.prijatelji[1]);

// 2 način je tzv. "bracket" notacija.
console.log(objekt["godine"]);

// demonstracija kada bi koristili bracket notaciju

console.log(objekt.firstName); //DOT
console.log(objekt ["firstName"]); // BRACKET

// Konkretno kada koristiti bracket notaciju

const spojnica = "Name";

console.log(objekt["first" + spojnica]);
console.log(objekt["last" + spojnica]);


// const upitnik = prompt ("Što vas zanima o osobi? Izaberi između firstName, lastName, zanimanje, prijatelji");

// dot notacijom nemožemo ovo ispisati, tj ne znamo što je ovo, jer naravno upitnik nije član objekta

// console.log(objekt.upitnik);

// // bracket notacijom ovo možemo definirati
// console.log(objekt[upitnik]);

// par korisnih o listama

const prijatelji = ["Marko", "Maja", "Josipa"];

/*  Postoje 2 načina da provjerimo na kojem mjestu se nalazi određeni član liste i da li je uopće član liste */

// indexOf meotda liste je način provjere da li je određena vrijednost član liste, ako je dat će nam lokaciju u listi, ako nije dat će -1
console.log(prijatelji.indexOf("Maja"));

// includes je boolean provjera

console.log(prijatelji.includes("Josipa"));

if (prijatelji.includes("Josipa")) {
    console.log("Imam prijateljicu Josipu");
}

 // NAČINI SPAJANJA LISTI

 let x;
 const voće = ["Jabuke", "kruske", "trešnje"];
 const bobice = ["kupine", "maline", "borovnice"];

 // 1.Način je da nestamo (postavimo listu unutar liste)

//  voće.push(bobice);
//  console.log(voće);


// 2.Način je konkateniranje listi, dugo korišteno
x = voće.concat(bobice);
console.log(x);

// Spread operator koji služi za expandiranje listi/objekata u jednu varijablu. U biti ćemo ga koristiti za spanjanje objekata više nego listi

const brojevi = [1, 2, 3];
const noviBrojevi = [...brojevi, 4];
console.log(noviBrojevi);
const brojevi2 = [4, 5, 6];

const noviBrojevi2 = [...brojevi, ...brojevi2];
console.log(noviBrojevi2);


//prije se koristila flat metoda kako bi eliminrali nepotrebne podliste.
const lista = [voće, bobice];
const slozenaLista = lista.flat()
console.log(slozenaLista);
