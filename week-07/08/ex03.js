const rgb = document.querySelector("h1");
const btn = document.querySelector("button");
const body = document.querySelector("body");


btn.addEventListener("click",() => {
    let r = Math.random()*255;
    let g = Math.random()*255;
    let b = Math.random()*255;

    body.style.backgroundColor = `rgb(${r},${g},${b})`;

    rgb.innerText = `red: ${r}, green:${g}, blue:${b}`;

})