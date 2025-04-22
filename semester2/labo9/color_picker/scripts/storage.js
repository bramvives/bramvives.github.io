const storeSliderValues = () => {
    let red = document.getElementById("sldRed").value;
    let green = document.getElementById("sldGreen").value;
    let blue = document.getElementById("sldBlue").value;

    localStorage.setItem("slider", JSON.stringify({red, green, blue}));
};

const restoreSliderValues = () => {
    const slider = localStorage.getItem("slider");
    if (slider !== null) {
        let sliderObj = JSON.parse(slider)
        document.getElementById("sldRed").value = sliderObj.red
        document.getElementById("sldGreen").value = sliderObj.green
        document.getElementById("sldBlue").value = sliderObj.blue
    }
};

const storeSwatches = () => {
    const swatches = document.getElementById("swatchComponents").getElementsByClassName("swatch");
    let savable = []
    for (let i = 0; i < swatches.length; i++) {
        savable.push({
            "red": swatches[i].getAttribute("data-red"),
            "blue": swatches[i].getAttribute("data-blue"),
            "green": swatches[i].getAttribute("data-green")
        });

    }

    localStorage.setItem("swatches", JSON.stringify(savable));

};

const restoreSwatches = () => {
    const swatches = localStorage.getItem("swatches");
    if (swatches !== null) {
        let restore = JSON.parse(swatches);
        for (let i = 0; i < restore.length; i++) {
            addSwatchComponent(restore[i].red, restore[i].green, restore[i].blue);
        }
    }
};
