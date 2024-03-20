console.log("gol 1");
console.log("gol 2");
console.log("gol 3");
console.log("gol 4");
console.log("gol 5");
console.log("gol 6");
console.log("gol 7");
console.log("gol 8");
console.log("gol 9");
console.log("gol 10");

for (let ponavljanje = 1; ponavljanje <= 10; ponavljanje++){
    console.log(`gol ${ponavljanje}`);
}

const lista = ["stol", "stolica", "stolnjak", "vaza"];

for(let i = 0; i < lista.length; i++) {
    console.log(lista[i]);
}

// Lista / Niz / Array - objektni tip podataka

const prijatelj1 = "Luka";
const prijatelj2 = "Ivan";
const prijatelj3 = "Hrvoje";

const prijatelji = ["Luka", "Ivan", "Hrvoje"];

const godine = new Array(24, 28, 32);
console.log(prijatelji, godine);

console.log(prijatelji[0]);
console.log(prijatelji.length);
console.log(prijatelji[prijatelji.length -1]);