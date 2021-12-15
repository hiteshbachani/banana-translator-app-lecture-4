// var userName = prompt("Give me your username!");
// alert("this script works") + userName;

var btnTranslate = document.querySelector("#btn-translate");
var txtinput = document.querySelector("#txt-input"); 
var outputDiv = document.querySelector("#output");s
var serverURL="https://api.funtranslations.com/translate/minion.json"

function getTranslationURL(input){
    return serverURL + '?' + 'text=' + input
}




function clickEventHandler(){
   var inputText = 'txtInput.value';


fetch(getTranslationURL(inputText))
.then(response => response.json())
.then(json => {
    var translatedText = json.contents.translated; 
    outputDiv.innerText = translatedText;
})

};


btnTranslate.addEventListener("click", clickEventHandler);