const setup = () => {
    let tekst="Gisteren zat de jongen op de stoep en at de helft van de appel";

    while (true) {
        let lastIndex = tekst.indexOf("de");
        if (lastIndex === -1) {
            break
        }
        tekst = tekst.substring(0, lastIndex) + "het" + tekst.substring(lastIndex+2, tekst.length);
    }

    console.log(tekst)
}

window.addEventListener("load", setup);