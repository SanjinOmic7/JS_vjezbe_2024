// Test podaci 1
const markoMasa1 = 78; // kg
const markoVisina1 = 1.69; // metri
const josipMasa1 = 92; // kg
const josipVisina1 = 1.95; // metri

const markoITM1 = markoMasa1 / (markoVisina1 ** 2);
const josipITM1 = josipMasa1 / (josipVisina1 ** 2);

if (markoITM1 > josipITM1) {
    console.log(`Markov indeks tjelesne mase (${markoITM1.toFixed(2)}) je veći od Josipovog indeksa tjelesne mase (${josipITM1.toFixed(2)}).`);
} else if (josipITM1 > markoITM1) {
    console.log(`Josipov indeks tjelesne mase (${josipITM1.toFixed(2)}) je veći od Markovog indeksa tjelesne mase (${markoITM1.toFixed(2)}).`);
} else {
    console.log(`Markov indeks tjelesne mase (${markoITM1.toFixed(2)}) je jednak Josipovom indeksu tjelesne mase (${josipITM1.toFixed(2)}).`);
}

// Test podaci 2
const markoMasa2 = 95; // kg
const markoVisina2 = 1.88; // metri
const josipMasa2 = 85; // kg
const josipVisina2 = 1.76; // metri

const markoITM2 = markoMasa2 / (markoVisina2 ** 2);
const josipITM2 = josipMasa2 / (josipVisina2 ** 2);

if (markoITM2 > josipITM2) {
    console.log(`Markov indeks tjelesne mase (${markoITM2.toFixed(2)}) je veći od Josipovog indeksa tjelesne mase (${josipITM2.toFixed(2)}).`);
} else if (josipITM2 > markoITM2) {
    console.log(`Josipov indeks tjelesne mase (${josipITM2.toFixed(2)}) je veći od Markovog indeksa tjelesne mase (${markoITM2.toFixed(2)}).`);
} else {
    console.log(`Markov indeks tjelesne mase (${markoITM2.toFixed(2)}) je jednak Josipovom indeksu tjelesne mase (${josipITM2.toFixed(2)}).`);
}