// 2 + 2je npr. expression jer ce proizvesti novu vrijednost
// 2000 je također expression jer je to određena vrijednost
// if else i switch statment (deklaracije), jer ne proizvode vrijednosti.
// deklaracije možete gledati kao nekakve kompletne rečenice, a expressioni bi bile riječi koji čine tu rečenicu
// Statmenti (deklaracija) su u biti sekvence akcija...

const godine = 23;

if (godine >=18) {
    console.log("punoljetan si");
}else {
    console.log("Maloljetan si");
}

// Trojni operator (ternary operator) možete gledati kao drugačiji način pisanja if else deklaracije.

godine >= 18 ? console.log("Može") : console.log("Ne može");

const punoljetan = godine >=18 ? "Može" : "Ne može";
console.log(punoljetan);

console.log(`${godine >= 18 ? "može" : "ne može"}`);

// praktičan primjer

const auth = true;
let redirect;

// if (auth) {
//     alert("Autorizacije je prošla");
//     redirect = "/dashboard";
// } else {
//     alert("Autorizacija nije prosla");
//     redirect = "/Login";
// }

redirect = auth
? (alert("autorizacija je prosla"), (redirect = "/dashboard"))
: (alert ("autorizacija nije prosla"), redirect = "/login");
