const setup = () => {

    document.getElementById("printButton").addEventListener("click", (e) => {
        let text = document.getElementById("text").value
        console.log(maakMetSpaties(text))
    })
}
const maakMetSpaties = (inputText) => {
    let newText = ""
    for (let i = 0; i < inputText.length; i++) {
        if (inputText.charAt(i) !== " ") {
            newText += inputText.charAt(i) + " ";
        }
    }
    return  newText.trim()

}


window.addEventListener("load", setup);