let global = {
    IMAGE_COUNT: 5, // aantal figuren
    IMAGE_SIZE: 48, // grootte van de figuur
    IMAGE_PATH_PREFIX: "images/", // map van de figuren
    IMAGE_PATH_SUFFIX: ".png", // extensie van de figuren
    MOVE_DELAY: 3000, // aantal milliseconden voor een nieuwe afbeelding verschijnt

    score: 0, // aantal hits
    timeoutId: 0 // id van de timeout timer, zodat we die kunnen annuleren
};


const setup = () => {
    document.getElementById("start").addEventListener("click", start)

    document.getElementById("target").addEventListener("click", onClickTarget)
};

const start = () => {
    document.getElementById("start").style.display = "none";

    updateTargetSrc()
    updateTargetPosition()

    document.getElementById("target").style.display = "block";

    updateScore()

    global.timeoutId = setInterval(() => {
        updateTargetSrc()
        updateTargetPosition()
    }, global.MOVE_DELAY)
}

const updateScore = () => {
    document.getElementById("score").innerText = `Aantal hits: ${global.score}`;
}

const updateTargetSrc = () => {
    document.getElementById("target").src = `${global.IMAGE_PATH_PREFIX}${Math.floor(Math.random() * global.IMAGE_COUNT)}${global.IMAGE_PATH_SUFFIX}`
}

const updateTargetPosition = () => {
    const top = Math.random() * (600 - 2*(10 + global.IMAGE_SIZE)) + (10 + global.IMAGE_SIZE)
    const left = Math.random() * (800 - 2*(10 + global.IMAGE_SIZE)) + (10 + global.IMAGE_SIZE)

    document.getElementById("target").style.top = top + "px"
    document.getElementById("target").style.left = left + "px"
}

const onClickTarget =() => {
    if (document.getElementById("target").src.includes(`${global.IMAGE_PATH_PREFIX}0${global.IMAGE_PATH_SUFFIX}`)) {
        document.getElementById("score").innerText = ""
        document.getElementById("target").style.display = "none";
        document.getElementById("start").style.display = "block";


        alert(`GAME OVER\nScore: ${global.score}`);
    } else {
        global.score+=1
        updateScore()

        // reset interval
        clearTimeout(global.timeoutId)
        global.timeoutId = setInterval(() => {
            updateTargetSrc()
            updateTargetPosition()
        }, global.MOVE_DELAY)

        updateTargetSrc()
        updateTargetPosition()


    }
}


window.addEventListener("load", setup);


