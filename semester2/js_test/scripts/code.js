const setup = () => {
    const stateSelect = document.getElementById("stateSelect")
    const img = document.getElementById("img")
    const inputLetter = document.getElementById("inputLetter")
    const note = document.getElementById("note")
    const imgDescription = document.getElementById("imgDescription")

    const textWithEgg = "Hierboven, een kip met een ei"
    const textWithoutEgg = "Hierboven, een kip zonder een ei"

    stateSelect.addEventListener("change", () => {
        switch (stateSelect.value) {
            case "with":
                img.className = "with-egg";
                imgDescription.innerText = textWithEgg
                break;
            case "without":
                img.className = "";
                imgDescription.innerText = textWithoutEgg
                break;
            case "none":
                img.className = "hidden";
                imgDescription.innerText = ""
                break
        }
    })

    inputLetter.addEventListener("input", (event) => {
        const letter = inputLetter.value
        if (letter === "") {
            note.innerText = ""
            return
        }

        let count = 0
        let lastIndex = -1
        do {
            console.log(imgDescription.innerText.toLowerCase())
            console.log(letter.toLowerCase())
            lastIndex = imgDescription.innerText.toLowerCase().indexOf(letter.toLowerCase(), lastIndex+1)
            if (lastIndex !== -1) {
                count++
            }
        } while (lastIndex !== -1)


        note.innerText = `Letter "${letter.toLowerCase()}" komt ${count} voor in bovenstaande zin.`
    })


}

window.addEventListener("load", setup);