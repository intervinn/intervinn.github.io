"use strict";
const button = document.getElementById("button");
let count = 0;
function addclick() {
    console.log(button.textContent);
    count = count + 1;
    button.textContent = `Click me lol ${count}`;
}
