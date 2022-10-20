//SELECTEURS
const toTranslate = document.querySelector('.totranslate');
const Translated = document.querySelector('.translated');
const language1 = document.querySelector('.language1');
const language2 = document.querySelector('.language2');
const switchLanguage = document.querySelector('#arrows');

//ECOUTEURS
switchLanguage.addEventListener("click", switchFunct);

//FUNCTIONS

//Function to change the language we want to translate
function switchFunct(event){
    event.preventDefault();

    if(language1.innerHTML == "Français"){
        language1.innerHTML = "Fussap";
        language2.innerHTML = "Français";
    }
    else{
        language1.innerHTML = "Français";
        language2.innerHTML = "Fussap";
    }
}