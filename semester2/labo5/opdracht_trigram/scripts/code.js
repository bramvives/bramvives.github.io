const setup = () => {

    document.getElementById("submitBtn").addEventListener("click", () => {
        const ul = document.getElementById("resultList")

        const text = document.getElementById("textInput").value
        let inHtml = ""
        for (let i = 0; i < text.length - 2; i++) {
            inHtml += `<li>${text.slice(i, i + 3)}</li>`
        }
        ul.innerHTML = inHtml
    })
}

window.addEventListener("load", setup);