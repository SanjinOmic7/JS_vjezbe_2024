"use strict"

// // keyboards events
// const inputKey = document.getElementById("zadatak-input");

// const keyDown =(e) => {
//     if(e.key === "Enter") {
//         alert("Stisnuo si Enter");
//     }

//     if (e.repeat) {
//         alert(`Pusti tipku ${e.key}`);
//     }
// };

// const onKeyPress =() => {
//     console.log("keypress");
// };

// const keyUp = () => {
//     console.log("keyup");
// };

// inputKey.addEventListener("keypress", onKeyPress); // bilo sto da stisnete clg-at ce se
// inputKey.addEventListener("keyup", keyUp); // clg se se okinut tek kada stisnemo i maknemo prst sa tipke
// inputKey.addEventListener("keydown", keyDown); // cim stisnete enter, okinut ce se alert


// // INPUT EVENTS

// const inputForma = document.getElementById("filter");
// const naslov = document.querySelector("h2");

// const onInput = (e) => {
//     console.log(e.target.value); //target.value nam daje vrijednost koja je trenutno upisana u input polju
//     naslov.textContent = e.target.value; // s ovim mijenjamo sadrzaj h2 sa onim sto je upisano u  input polju
// }; 

// const onFocus = () => {
//     console.log("input je u fokusu");
// };

// const onBlur = () => {
//     console.log("input nije u fokusu");
// };

// inputForma.addEventListener("input", onInput); // input ce raditi isto sto i keydown ali ga je boljhe upotrijebiti kod input polja
// inputForma.addEventListener("focus", onFocus); // provjerava dali smo kiknuli na input polje
// inputForma.addEventListener("blur" onBlur); // provjerava jesmo li kliknuli van input polja


const forma = document.getElementById("zadatak-forma");

const onSubmit = (e) => {
    e.preventDefault();
    const zadatak = document.getElementById("zadatak-input");
    if (zadatak.value === "") {
        alert("Niste nista unijeli");
        return;
    }
    console.log(zadatak.value);
};

forma.addEventListener("submit", onSubmit);

// EVENT BUBBLING - dogadja se kada postavimo vise event listenera na "isto" mjesto u HTML-u

const gumb = document.querySelector("form button");
const div = document.querySelector("form div:nth-child(2)");
const form = document.querySelector("form");

gumb.addEventListener("click", (e) => {
    alert("gumb je stisnut");
    e.stopPropagation(); // ovo dodajemo kako bi sprijkecili event bubbling
});

div.addEventListener("click", () => {
    alert("div je stisnut");
});

form.addEventListener ("click", () => {
    alert("forma je stisnuta");
});

// brisanje elemenata iz HTML doma

const list = document.querySelector("#zadatak-list");

lista.addEventListener("click", (e) => {
    if (e.target.className === "pojedinacni-zadatak") {
        e.traget.remove();
    }
});








