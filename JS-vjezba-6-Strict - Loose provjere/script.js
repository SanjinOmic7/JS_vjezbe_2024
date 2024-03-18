//Strict i Loose provjere

const godina = 18;

/* Ovo ce se ispisati jer stroga (strict) provjera ce provjeriti vrijednosti podataka i tipove podataka
i ako se obje slazu onda ce biti true */

if(godina === 18) {
    console.log("Punoljetni ste");
}

//Ovo se nece ispisati jer iako je vrijednost podataka ista, tipovi nisu isti (string nije jednak broju)

if ("18" === 18) {
    console.log("Ovo se nece ispisati");
}

/* Ovo ce se ispisati jer je labava (loose) provjera koja ce samo provjeriti da li su vrijednosti podataka iste
nece provjeriti tipove podataka */

if ("18" ==18) {
    console.log("Ovo ce se ispisati")
}

// Prakticni primjer

const broj = prompt("koji ti je najdrazi broj");

if(broj === 1) {
    console.log("Broj 1 je top");
} else {
    console.log("jesi panj,broj 1 je top");
}

/* const broj = Number(prompt("Koji ti je najdraži broj?"));

if (broj === 1) {
  console.log("Broj 1 je top");
} else if (broj === 2) {
  console.log("Broj 2 je top");
} else if (broj === 3) {
  console.log("Broj 3 je top");
} else {
  console.log("1 je zakon broj, zašto njega niste upisali!?!?");
} */

// i / ili operateri

const istina = true;
const laz = false;

// "I" operator se piše sa 2 znaka "&&" i rezultat njegove provjere će biti true samo ako su svi članovi provjere true
console.log(istina && laz && true);

// "Ili" operator se piše sa 2 znaka "||" i rezultat njegove provjere će biti true čim je jedan od članova provjere true
console.log(istina || laz || false);

// not operator se definira znakom "!" i za potrebe provjere mijenja vrijednost u suprotnu od zadane.

const punoljetan = false;

if (istina && !punoljetan) {
  console.log("Ovo je istinita tvrdnja i ovo će se ispisati...");
}

/* Nullish coalescing operator (Nulti operator spajanja) - logički operator koji će vratiti operand sa dense strane
ako je sa lijeve strane vrijednost operanda null ili undefined, inače će vratiti lijevog operanda (za razliku od truthy i falsy)
koji će vratiti i 0 i prazan string.
*/

let nullish;

nullish = 10 ?? 20;
nullish = "lijeva" ?? "desna";
nullish = "" ?? "desna";
nullish = 0 ?? "desna";
nullish = null ?? "desna";
nullish = false ?? "desna";
nullish = undefined ?? "desna";

console.log(nullish);
