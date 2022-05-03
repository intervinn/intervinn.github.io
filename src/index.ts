const button = document.getElementById("button") as HTMLButtonElement;

let count: number = 0

function addclick() {
    console.log(button.textContent)
    count = count + 1
    button.textContent = `Click me lol ${count}`
}