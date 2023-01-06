var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");

var serverURL = "https://postman-echo.com/get"

function getTranslationURL(text){
    return serverURL + "?" + "text=" + text
}

function clickHandler(){
    // outputDiv.innerText = "ajsjsjsjsjs " + txtInput.value;
    var inputText = txtInput.ariaValueMax;
    fetch(getTranslationURL(inputText))
    .then(response => response.json())
    .then(json => console.log(json))
};

btnTranslate.addEventListener("click", clickHandler)
