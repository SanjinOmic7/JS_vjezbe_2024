// strict mode ne dozvoljava određene stvari, ideja je da javlja greške koje inače JS po defaultu nece javiti.
// sluzi za pisanje sigurnijeg koda kako bi lakse izbjegli greske.

"use strict";

let imaVozackuDozvolu = false;
const prosaoVozackiIspit = true;

if (prosaoVozackiIspit) {
    imaVozackuDozvolu =true; 
}

const interface = "Audio";
const private = "lozinka";