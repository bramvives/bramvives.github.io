const setup = () => {
    const par = document.querySelectorAll("p")
    for (const p of par) {
        p.innerText = "Good job!"
    }
}

window.addEventListener("load", setup)