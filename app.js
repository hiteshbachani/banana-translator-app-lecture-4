// var userName = prompt("Give me your username!");
// alert("this script works") + userName;

var btnTranslate = document.querySelector("#btn-translate");
btnTranslate.addEventListener("click", clickEventHandler);

function clickEventHandler(){
    console.log("clicked!");
    console.log("input", txtinput);
}

var txtinput = document.querySelector("#txt-input");
 console.log(txtinput);

