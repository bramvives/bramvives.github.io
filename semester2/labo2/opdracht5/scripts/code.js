const setup = () => {
    document.getElementById('btnChange').addEventListener("click", (e) => {
        let pElement = document.getElementById("txtOutput");
        pElement.innerHTML = "Welkom!";
    })


}
window.addEventListener("load", setup);