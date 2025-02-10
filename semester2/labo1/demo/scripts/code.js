const setup = () => {
    let lab1Cursus = document.getElementById("lab1Cursus");
    // lab1Cursus.className = "cursus"
    lab1Cursus.addEventListener("mouseover", change)
    // document.getElementById("btnSend").addEventListener("click", show)

    let btnSend = document.getElementById("btnSend");
    btnSend.addEventListener("click", show)
}

const change = () => {
    let lab1Cursus = document.getElementById("lab1Cursus");
    lab1Cursus.className = "cursus"
}

const show = () => {
    let txtName = document.getElementById("txtName")

    if (txtName.value !== "") {
        alert("jouw naam is " + txtName.value)

        console.log("Jouw naam is " + txtName.value)
    } else {
        alert("Gelieve jouw naam in te vullen")
    }
}

window.addEventListener("load", setup);

