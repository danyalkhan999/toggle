// let isWhite = true;
// function black() {
//     if(isWhite===true) {
//         document.body.style.backgroundColor = "black";
//         document.querySelector(".toggle").style.justifyContent = "end"
//         document.querySelector(".heading h1").style.color = "#fff"
//         document.querySelector(".toggle").style.backgroundColor = "#fff"
//         isWhite=false
//     }else{
//         document.body.style.backgroundColor = "white";
//         document.querySelector(".toggle").style.justifyContent = "start"
//         document.querySelector(".heading h1").style.color = "#000"
//         document.querySelector(".toggle").style.backgroundColor = "#fff" 
//         isWhite = true
//     } 
// }

function black() {
    document.querySelector("body").classList.toggle("body-black");

    document.querySelector(".toggle").classList.toggle("toggle-white");

}