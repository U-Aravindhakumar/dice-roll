const button = document.getElementById("roll");
const h1 = document.getElementById("myh1");
const min = 1;
const max = 6;
let randomnum;

button.onclick = function(){
    randomnum = Math.floor(Math.random() * max) + min
    h1.textContent = randomnum
}