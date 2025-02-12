const setup = () => {

    const family = ["Bram", "Tibo", "Danny", "Bettie", "Johnie"]
    console.log(family[0])
    console.log(family[2])
    console.log(family[4])
    voegNaamToe(family)
    console.log(family[5])
    console.log(family.toString())
}
window.addEventListener("load", setup);

const voegNaamToe = (arr) => {
    let naam = prompt("Geef een naam op: ")
    arr.push(naam)
}

