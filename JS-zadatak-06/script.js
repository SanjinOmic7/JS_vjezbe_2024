"use strict";


const brojLovaca1 = 3840;
const brojLovaca2 = 500;
const brojLovaca3 = 1440;

const ukupno = brojLovaca1 + brojLovaca2 + brojLovaca3;

const postotak1 = (brojLovaca1 / ukupno) * 100;
const postotak2 = (brojLovaca2 / ukupno) * 100;
const postotak3 = (brojLovaca3 / ukupno) * 100;

console.log(`Postotak lovaca iz Središnje Hrvatske: ${postotak1.toFixed(2)}%`);
console.log(`Postotak lovaca iz Istre: ${postotak2.toFixed(2)}%`);
console.log(`Postotak lovaca iz Dalmacije: ${postotak3.toFixed(2)}%`);