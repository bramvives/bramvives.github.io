const setup = () => {
    document.getElementById("click").addEventListener("click", () => {
        const p = document.createElement("p")
        p.innerText = "this is a paragraph"
        document.getElementById("myDIV").appendChild(p)
    })
}

window.addEventListener ("load", setup)