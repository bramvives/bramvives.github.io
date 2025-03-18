const setup = () => {

    change()

    document.getElementById("redSlider").addEventListener("change", change)
    document.getElementById("redSlider").addEventListener("input", change)
    document.getElementById("greenSlider").addEventListener("input", change)
    document.getElementById("greenSlider").addEventListener("input", change)
    document.getElementById("blueSlider").addEventListener("input", change)
    document.getElementById("blueSlider").addEventListener("input", change)

    document.getElementById("saveBtn").addEventListener("click", save)
}
window.addEventListener("load", setup);

const change = (ev) => {
    let redSlider = document.getElementById("redSlider")
    let greenSlider = document.getElementById("greenSlider")
    let blueSlider = document.getElementById("blueSlider")

    document.getElementById("redValue").textContent = redSlider.value
    document.getElementById("greenValue").textContent = greenSlider.value
    document.getElementById("blueValue").textContent = blueSlider.value

    document.getElementById("colorBlock").style.backgroundColor = `rgb(${redSlider.value}, ${greenSlider.value}, ${blueSlider.value})`;
}

const save = () => {
    let redSlider = document.getElementById("redSlider")
    let greenSlider = document.getElementById("greenSlider")
    let blueSlider = document.getElementById("blueSlider")

    const swatch = document.createElement("div")
    swatch.style.backgroundColor = `rgb(${redSlider.value}, ${greenSlider.value}, ${blueSlider.value})`;
    swatch.classList.add("swatch")

    const deleteBtn = document.createElement("button")
    deleteBtn.innerText = "X"
    deleteBtn.classList.add("deleteBtn")

    deleteBtn.addEventListener("click", () => {
        deleteBtn.remove()
        swatch.remove()
    })

    swatch.appendChild(deleteBtn)

    document.getElementById("swatchContainer").appendChild(swatch)
}