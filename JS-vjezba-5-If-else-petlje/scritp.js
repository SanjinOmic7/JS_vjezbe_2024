/* If petlja ce se odvrtit kod koji se nalazi u bloku ovisno o
tome da li je tvrdnja true ili false */

if (true) {
    console.log("funkcioniram jer sam true");
}

if (false) {
    console.log("ne funkcioniram jer sam false");
}

// primjer iz prakse

const godina = 19;
const punoljetan = godina >= 18;

if(punoljetan) {
    console.log("Punoljetan si,možeš glasat");
}

//isto kao

if (godina >=18) {
    
    console.log("Punoljetan si, možeš glasat");
}

//If-else petlja ce definirati sto ce se dogoditi ako je "if" tvrdnja istinita, a "else" blok ako nije

if (godina <=18) {
    console.log("Rezultat provjere je false i ovo se nece izvrtiti");
} else {
    console.log("Ovo ce se ispisati jer je ovo sada rezultat if-else petlje");
}

// Block scope vs Global scope 
/* Definiranje i inicijaliziranje varijable putem const i let nacina unutar blocka, ogranicavamo dostupnost te varijable
van bloka,jer su const i let block-scoped varijable i nece bit dostupne van blocka, za razliku
od var nacina definiranja i inicijaliziranja varijable.
Mozete tome doskociti da definirate varijablu na globalnom scopeu a inicijalizirate/dodijelite vrijednost unutar bloka
ovisno o uvjetu koji ce se izvrsiti. */

const godRodjenja = 1992;
let stoljece;

if(godRodjenja >= 2000) {
    stoljece = 21;
} else {
    stoljece = 20;
}

console.log(stoljece);

/*  Truthy i falsy values...
Falsy vrijednosti - Vrijednosti koje nistu netočne, ali će postati kada se pretvore u boolean vrijednosti
falsy: 0, undefined, null, "", Nan


*/

console.log(Boolean(0)); // Kada prebacimo nulu u Boolean on ce biti false, svi drugi ce biti true.
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean("")); // Prazan string kada prebacimo u Boolean ce biti false, cim ima nesto u stringu ce bit true
console.log(Boolean(NaN));


/* varijablu broj ce JS akutomatski probati pretvoriti u vrijednost i nakon toga ce se s njom moci
odraditi if/else provjera kao da se ubacila Boolean vrijednost. */

const broj = 0;

if(broj) {
    console.log("Ispisujem se");
}else {
    console.log("ne ispisujem se");
} 


