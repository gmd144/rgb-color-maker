var red = document.querySelector("#red");
var green = document.querySelector("#green");
var blue = document.querySelector("#blue");

var r = document.querySelector("#r-val");
var g = document.querySelector("#g-val");
var b = document.querySelector("#b-val");

var btn = document.querySelector("button");

random();

function update(){
    r.textContent = red.value;
    g.textContent = green.value;
    b.textContent = blue.value;
    document.body.style.backgroundColor = `rgb(${red.value}, ${green.value}, ${blue.value})`;
}

function random(){
    red.value = Math.floor(Math.random() * 260);
    green.value = Math.floor(Math.random() * 260);
    blue.value = Math.floor(Math.random() * 260);
    update();
}


red.addEventListener("input", update);
green.addEventListener("input", update);
blue.addEventListener("input", update);

btn.addEventListener("click", random);

window.addEventListener("keyup", function(e){
    if (e.keyCode === 32){
        e.preventDefault();
        random();
    }
});