const setup = () => {
    let text = "De man van An geeft geen hand aan ambetante verwanten"

    {
        let count = 0
        let lastIndex = -1

        do {
            lastIndex = text.indexOf("an", lastIndex + 1)
            if (lastIndex !== -1) {
                count += 1
            }
        } while (lastIndex !== -1)

        console.log(count)
    }

    {
        let count = 0
        let lastIndex = text.length

        do {
            lastIndex = text.lastIndexOf("an", lastIndex-1)
            if (lastIndex !== -1) {
                count += 1
            }
        } while (lastIndex !== -1)

        console.log(count)

    }


}

window.addEventListener("load", setup);