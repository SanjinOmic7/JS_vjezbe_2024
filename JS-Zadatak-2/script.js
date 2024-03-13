function izracunajITM(masa, visina) {
    return masa / (visina ** 2);
}

// Test podaci za Marka i Josipa
const markoTezina1 = 78;
const markoVisina1 = 1.69;
const josipTezina1 = 92;
const josipVisina1 = 1.95;

const markoTezina2 = 95;
const markoVisina2 = 1.88;
const josipTezina2 = 85;
const josipVisina2 = 1.76;

// Izračun ITM-a za Marka i Josipa
const markoITM1 = izracunajITM(markoTezina1, markoVisina1);
const josipITM1 = izracunajITM(josipTezina1, josipVisina1);

const markoITM2 = izracunajITM(markoTezina2, markoVisina2);
const josipITM2 = izracunajITM(josipTezina2, josipVisina2);

// Ispis ITM-a
console.log("Markov ITM (Test podaci 1):", markoITM1);
console.log("Josipov ITM (Test podaci 1):", josipITM1);

console.log("Markov ITM (Test podaci 2):", markoITM2);
console.log("Josipov ITM (Test podaci 2):", josipITM2);

// Provjera boolean vrijednosti
const markoVeciOdJosipa1 = markoITM1 > josipITM1;
const markoVeciOdJosipa2 = markoITM2 > josipITM2;

console.log("Da li je Markov ITM veći od Josipovog ITM-a (Test podaci 1)?", markoVeciOdJosipa1);
console.log("Da li je Markov ITM veći od Josipovog ITM-a (Test podaci 2)?", markoVeciOdJosipa2);