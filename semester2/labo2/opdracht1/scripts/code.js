const setup = () => {
    alert("Dit is een alert")
    let value = confirm("Ben je dit zeker?")
    prompt("Wat is uw naam?")

    console.log(value)

}
window.addEventListener("load", setup);