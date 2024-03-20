// Konverzije vrsta podataka - type Conversion
// ctr+shift+p=quokka

const inputGodina = "2000"

// prvi način promjena stringa u broj pomoću parseInt JS funckije
const godina1 = parseInt(inputGodina);

// drugi način promjene stringa u broj pomoću nuimbera

const godina2 = Number(inputGodina);

// treći način promjene stringa u broj pomoću + operatora

const godina3 = +inputGodina;

const stringGodina = String(godina1);

console.log(typeof stringGodina, stringGodina);
console.log(godina1 + 18);

//primjer sa decimalnim brojem

const decBroj ="10.5"
const stringDecBroj1 = parseInt(decBroj);
const stringDecBroj2 = parseFloat(decBroj);


console.log(stringDecBroj2);


// Prisilna/automatska konverzija vrste podataka - type Corecion

console.log("ja imam " + 1 +  " auto");

// ovo funkcionira jer oduzimanje u ovoj varijanti Js prepoznaje i pretvara sve u brojeve

console.log("23" - "10" -3);

// ovdje ne funkcionira odmah na isti nacim jer se prvo događa "kontakteniraju" u stringu 2310 i nakon toga dolazi oduzimanje i pretvaranje svega u broj

console.log("23" + "10" -3);

//zbrajanje sa boolean vrijednostima true pretvara u broj 1 a false u broj 0

console.log(5 + true);
//true je jedan
console.log(5 + false);
//false je nula

//dobit cemo Nan jer ne znamo koji je ovo broj pa samim time dobijemo Nan...
console.log(5 + undefined);

// Kod brojeva, ako radimo matematicke operacije sa brojevima, zbrajanje moze dovesti do konkatenacije stringova, ako je samo jedan od 2 broja u obliku stringa, dok ce normlano raditi ako su svi clanovi brojevi, s druge strane sve druge matematicke operacije koje ukljucuju brojeve koje se nalaze u stringu i/ili brojeve ce automatski string pretvoriti zadanu matematicku operaciju
console.log("24" * "2");
console.log("24" / "2");


