const setup = () => {
    const img = document.getElementById("imgPhoto")
    img.addEventListener("mouseover", () => {
       img.src = "https://images.pexels.com/photos/20787/pexels-photo.jpg?cs=srgb&dl=pexels-kmerriman-20787.jpg&fm=jpg"
    })
    img.addEventListener("mouseout", () => {
        img.src = "images/vives.png"
    })
}

window.addEventListener("load", setup);