const setup = () => {
    let student = {
        voornaam: "Bram",
        achternaam: "Verpoot",
        geboorteDatum: new Date(2006, 10, 12),
        adres: {
            straat: "Street",
            huisnummer: 1,
            gemeente: "Kortrijk"
        }
    }

    console.log(JSON.stringify(student  ))


}

window.addEventListener('load', setup)



