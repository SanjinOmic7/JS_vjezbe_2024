"use strict";

//Idemo vidjeti kako scope funkcionira i kada su nam odredjene vrijednposti/varijable dostupne ovisno o tome sto gdje koristimo

// const lopta = "nogometna";

// const sport =() => {
//     const lopta ="košarkaška";
//     const lopta2 ="rukometna";
//     console.log(lopta, lopta2);
// };

// sport();

// ajmo za ovaj gore primjer i podfunkciju ubaciti

const lopta ="rukometna";

const sport = () => {
    const lopta2 ="nogometna";
    return {
        sport2: () => {
            return console.log(lopta, lopta2)
        },
    };
};

var lopta3 = "kosarkaska";

console.log(lopta, lopta3);

lopta3 = "kosarkaska";

const noviSport = sport();
noviSport.sport2();

// pozivanje druge funkcije unutar funkcije 

function komadiVoca(voce) {
    return voce *4;
}

function nutriBullet(jabuke, kruške) {
    const sokOdJabuke = jabuke * 4;
    const sokOdKruške = kruške * 4;
    const sok = `sok od ${sokOdJabuke} komada jabuka i ${sokOdKruške}komada kruške`;
    return sok;
}

console.log(nutriBullet(2,3));