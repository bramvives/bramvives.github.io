const setup = () => {
    document.getElementById("substring").addEventListener("click", sub)
}

const sub = () => {
    let text = document.getElementById("tekst").value;
    let lower = document.getElementById("lower").value
    let upper = document.getElementById("higher").value

    document.getElementById("output").innerHTML = text.substring(lower, upper)
}

window.addEventListener("load", setup);