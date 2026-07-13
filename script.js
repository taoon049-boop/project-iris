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
enterBtn.addEventListener("click",()=>{

showScreen(eyes);

});

scanBtn.addEventListener("click",()=>{

showScreen(scan);

});

voiceBtn.addEventListener("click",()=>{

showScreen(voice);

audio.play();

});

audio.addEventListener("ended",()=>{

showScreen(ending);

typeEnding();

});
const finalMessage=`If one day I forget everything...

I hope...

the first thing I remember...

is your eyes.`;

let i=0;

function typeEnding(){

endingText.innerHTML="";

i=0;

const timer=setInterval(()=>{

endingText.innerHTML+=finalMessage.charAt(i);

i++;

if(i>=finalMessage.length){

clearInterval(timer);

}

},45);

}
audio.addEventListener("ended", () => {
    showScreen(ending);

    endingText.innerHTML =
`Memory Restored

Welcome Back

IRIS ONLINE`;
});