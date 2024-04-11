"use strict";

// definiranje varijabli
const forma = document.getElementById("zadatak-forma");
const zadatakInput = document.getElementById("zadatak-input");
const listaZadataka = document.getElementById("zadatak-list");
const brisiSve = document.getElementById("clear");

// definiranje funkcija

// funkcija za kreiranje novog zadatka

const dodajZadatak = (e) => {
 e.preventDefault();

 if(zadatakInput === "") {
    alert("molimo vas unesite zadatak");
    return;
 }

 const li = document.createElement("li");
 li.appendChild(document.createTextNode(zadatakInput.value));
 console.log(li);
};

// event listeneri
forma.addEventListener("submit", dodajZadatak);