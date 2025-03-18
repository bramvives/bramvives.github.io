const setup = () => {
    const lis = document.querySelectorAll("li")
    for (const li of lis) {
        li.style.color = "red"
    }

    const el = document.createElement("img")
    el.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSONYzUJxzKuAwEmaZa_Mfm4-HHrhCyWqpf6g&s"

    document.body.appendChild(el)
}

window.addEventListener("load", setup)