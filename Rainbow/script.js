//const div = document.querySelector(".color");
const body = document.querySelector("body");
const colors = ['violet','indigo','lightblue','lightgreen','yellow','orange','lightRed'];
body.style.backgroundColor=colors[5];
document.addEventListener('click',function(){
    const colorIndex = parseInt(Math.random()*colors.length);
    //div.innerHTML=colors[colorIndex];
    body.style.backgroundColor=colors[colorIndex];
});