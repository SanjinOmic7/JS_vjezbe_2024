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

if(broj == 1) {
    console.log("Broj 1 je top");
} else {
    console.log("jesi panj,broj 1 je top");
}