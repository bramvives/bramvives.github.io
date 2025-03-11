const setup = () => {
    document.getElementById("btnSubmit").addEventListener("click", () => {
        console.log(`is ${document.getElementById("isRoker").checked ? "een" : "geen"} roker`)

        let moedertaal = document.querySelectorAll('input[name="moedertaal"]:checked')[0]
        console.log(`moedertaal is ${moedertaal.value}`)
        console.log(`favourite buurland is ${document.getElementById("favBuurland").value}`);

        let bestellingItems = []
        let bestellingSelect = document.getElementById("bestelling");
        for (let child of bestellingSelect.children) {
            if (child.selected) {
                bestellingItems.push(child.value)
            }
        }

         console.log(`bestelling bestaat uit ${bestellingItems.join(" ")}`);
    })
}

window.addEventListener("load", setup);