const setup = () => {
    let el = document.createElement("p")
    el.setAttribute("class", "color")
    el.setAttribute("id", "txtPar")


    let textNode = document.createTextNode("Hello world!")
    el.append(textNode)
    document.getElementById("myDiv").appendChild(el)
}

window.addEventListener("load", setup)