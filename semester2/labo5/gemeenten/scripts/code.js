const setup = () => {
    const gemeenten = []

    while (true) {
        const gemeente = prompt("Gemeente: ")
        if (gemeente === "stop") {
            break
        }

        gemeenten.push(gemeente)
    }

    gemeenten.sort((a, b) => {a.localeCompare(b)})

    let gemeentenOptions = ""
    for (const gemeente of gemeenten) {
        gemeentenOptions+= "<option value='" + gemeente.toLowerCase() + "'>" + gemeente + "</option>"
    }

    document.getElementById("gemeenten").innerHTML = gemeentenOptions

}

window.addEventListener("load", setup);