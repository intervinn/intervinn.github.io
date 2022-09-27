/*
const elems = document.getElementsByTagName("p")

for (const i of elems) {
    i.style.color = "white"
}
*/

let isLightMode = false

const setLight = () => {
    document.body.style.backgroundColor = "rgb(100,150,200)"
    for (const i of document.getElementsByTagName("p")) {
        i.style.color = "black"
    }
    for (const i of document.getElementsByTagName("h1")) {
        i.style.color = "black"
    }
}

const setDark = () => {
    document.body.style.backgroundColor = "rgb(30, 49, 69)"
    for (const i of document.getElementsByTagName("p")) {
        i.style.color = "white"
    }
    for (const i of document.getElementsByTagName("h1")) {
        i.style.color = "white"
    }
}

document.getElementById("toggle").addEventListener("click", (e) => {
    if (!isLightMode) {
        setDark()
        e.target.innerHTML = "Toggle Dark Mode"
        isLightMode = true
    } else if (isLightMode) {
        setLight()
        e.target.innerHTML = "Toggle Light Mode"
        isLightMode = false
    }
})

document.getElementById("what").addEventListener("click", (e) => {
    document.getElementById("whatdiv").scrollIntoView(
        {
            behavior: "smooth"
        }
    )
})
document.getElementById("how").addEventListener("click", (e) => {
    document.getElementById("howdiv").scrollIntoView(
        {
            behavior: "smooth"
        }
    )
})
