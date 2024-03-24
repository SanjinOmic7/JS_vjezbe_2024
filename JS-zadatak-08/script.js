"use strict";


const izracunajProsjek = (golovi) => {
    let ukupnoGolova = 0;
    for (let i = 0; i < golovi.length; i++) {
        ukupnoGolova += golovi[i];
    }
    return ukupnoGolova / golovi.length;
};


const ispisiPobjednika = (tim1, tim2) => {
    const prosjekTim1 = izracunajProsjek(tim1);
    const prosjekTim2 = izracunajProsjek(tim2);

    if (prosjekTim1 > prosjekTim2) {
        console.log(`${tim1[0]} je u prosjeku zabio ${prosjekTim1} golova, a ${tim2[0]} ${prosjekTim2}. Pobjednik je ${tim1[0]}.`);
    } else if (prosjekTim2 > prosjekTim1) {
        console.log(`${tim2[0]} je u prosjeku zabio ${prosjekTim2} golova, a ${tim1[0]} ${prosjekTim1}. Pobjednik je ${tim2[0]}.`);
    } else {
        console.log(`${tim1[0]} i ${tim2[0]} su u prosjeku zabili isti broj golova (${prosjekTim1}). Neriješeno.`);
    }
};


const goloviReal = [3, 2, 4, 1, 2, 3];
const goloviBarcelona = [2, 3, 1, 4, 3, 2];


ispisiPobjednika(["Real"], ["Barcelona"]);