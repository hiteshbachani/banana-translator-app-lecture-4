console.log("script is working from a different file.")

// var userName = prompt("Give me your username!");
// alert("this script works") + userName;

var btnTranslate = document.querySelector("#btn-translate")

function clickEventHandler (){
    console.log("clicked")
}

btnTranslate.addEventListener("click", clickEventHandler());


