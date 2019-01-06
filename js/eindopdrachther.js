//Boven aan de js pagina 
/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/

/*eslint-env browser*/

/*eslint 'no-console': 0*/


var randomAnimal = -1;
var previmage = "hond";

// variables voor de onclick functies (hierdoor staat mn js niet meer in mn html)
var btn_start = document.getElementById("btn_start");
var btn_hond = document.getElementById("btn_hond");
var btn_olifant = document.getElementById("btn_olifant");
var btn_varken = document.getElementById("btn_varken");
var btn_slang = document.getElementById("btn_slang");


//functie voor het afspelen van het random dieren geluid
function playAudio() {
    // zet vorig plaatje terug naar witte achtergrond

    var previmg = document.getElementById(previmage);

    previmg.src = "Afbeeldingen/" + previmage + "_wit.png";

    // rekent random getal tussen 0 en 3
    randomAnimal = Math.floor((Math.random() * 4));

    var animal;

    // zoek het juiste geluid
    if (randomAnimal === 0) {
        animal = document.getElementById("hondmp3");
    } else if (randomAnimal === 1) {
        animal = document.getElementById("olifantmp3");
    } else if (randomAnimal === 2) {
        animal = document.getElementById("varkenmp3");
    } else if (randomAnimal === 3) {
        animal = document.getElementById("slangmp3");
    }

    // speel geluid af
    animal.play();

}

// controleer of juiste plaatje is gekozen bij geluid
function checkanimal(animalIndex, image) {
    // console.log(image);
    // zet het vorige plaatje terug naar wit
    var previmg = document.getElementById(previmage);
    previmg.src = "Afbeeldingen/" + previmage + "_wit.png";

    var img = document.getElementById(image);

    var resultSound;

    // indien -1 dan is Start nog niet ingedrukt
    if (randomAnimal == -1) {
        // console.log(' druk eerst op start');
        resultSound = document.getElementById("failmp3");
    } else if (randomAnimal == animalIndex) { // juiste plaatje
        //console.log("Jeej!");
        img.src = "Afbeeldingen/" + image + "_groen.png";
        resultSound = document.getElementById("applausmp3");
    } else { // fout
        // console.log("Helaas probeer het nog een keer");
        img.src = "Afbeeldingen/" + image + "_rood.png";
        resultSound = document.getElementById("failmp3");
    }
    // speel geluid af
    resultSound.play();

    // onthoud vorige plaatje voor volgende keer als we in checkanimal komen
    previmage = image;
}


//je pakt de variabele die we boven aan gemaakt hebben van de button en daar maken we dan een functie van die het check
function checkHond() {
    checkanimal(0, "hond");
}

function checkOlifant() {
    checkanimal(1, "olifant");
}

function checkVarken() {
    checkanimal(2, "varken");
}

function checkSlang() {
    checkanimal(3, "slang");
}

// Hiermee roep ik een functie aan als erop geklikt word

btn_start.addEventListener("click", playAudio);
btn_hond.addEventListener("click", checkHond);
btn_olifant.addEventListener("click", checkOlifant);
btn_slang.addEventListener("click", checkSlang);
btn_varken.addEventListener("click", checkVarken);
