const setup = () => {

    document.getElementById("printButton").addEventListener("click", (e) => {
        let text = document.getElementById("text").value
        let newText = ""
        for (let i = 0; i < text.length; i++) {
            if (text.charAt(i) !== " ") {
                newText += text.charAt(i) + " ";
            }
        }
        console.log(newText.trim())
    })
}

window.addEventListener("load", setup);