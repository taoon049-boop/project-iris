const screens = document.querySelectorAll(".screen");

const boot = document.getElementById("boot");
const profile = document.getElementById("profile");
const eyes = document.getElementById("eyes");
const scan = document.getElementById("scan");
const voice = document.getElementById("voice");
const ending = document.getElementById("ending");

const bootText = document.getElementById("bootText");

const loadingFill = document.querySelector(".loading-fill");

const enterBtn = document.getElementById("enterBtn");
const scanBtn = document.getElementById("scanBtn");
const voiceBtn = document.getElementById("voiceBtn");

const audio = document.getElementById("voice");

const endingText = document.getElementById("endingText");

function showScreen(screen){

screens.forEach(s=>s.classList.remove("active"));

screen.classList.add("active");

}

const bootLines=[

"Authorizing...",

"Decrypting Files...",

"Searching Profile...",

"Access Granted"

];

let line=0;

function typeBoot(){

if(line>=bootLines.length){

loadingFill.style.width="100%";

setTimeout(()=>{

showScreen(profile);

},1200);

return;

}

bootText.innerHTML+=bootLines[line]+"<br>";

loadingFill.style.width=((line+1)/bootLines.length*100)+"%";

line++;

setTimeout(typeBoot,900);

}

window.addEventListener("load",()=>{

setTimeout(typeBoot,700);

});