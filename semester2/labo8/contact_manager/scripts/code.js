let personen = [];
let lastId = 0;
let selectedId = undefined
// Event listener (btnBewaar click)
// Bewaar de wijzigingen die in de user interface werden aangebracht
const bewaarBewerktePersoon = () => {
    console.log("Klik op de knop bewaar");

    // valideer alle input data en controleer of er geen errors meer zijn
    valideer();

    if (!hasErrors()) {
        let txtVoornaam = document.getElementById("txtVoornaam");
        let voornaam = txtVoornaam.value.trim();
        let txtFamilienaam = document.getElementById("txtFamilienaam");
        let familienaam = txtFamilienaam.value.trim();
        let txtGeboorteDatum = document.getElementById("txtGeboorteDatum");
        let geboorteDatum = txtGeboorteDatum.value.trim();
        let txtEmail = document.getElementById("txtEmail");
        let email = txtEmail.value.trim();
        let txtAantalKinderen = document.getElementById("txtAantalKinderen");
        let aantalKinderenText = txtAantalKinderen.value.trim();

        const updated = {
            voornaam,
            familienaam,
            geboorteDatum,
            email,
            aantalKinderen: aantalKinderenText,
        };

        if (selectedId !== undefined) {
            // Update bestaande persoon
            let index = personen.findIndex(p => p.id === selectedId);
            if (index !== -1) {
                updated.id = selectedId;
                personen[index] = updated;
            }
        } else {
            // Voeg nieuw persoon toe
            updated.id = lastId++;
            personen.push(updated);
        }

        selectedId = updated.id;

        updateList();
    }
};

const updateList = () => {
    let list = document.getElementById("lstPersonen")

    let html = ""
    personen.forEach((persoon) => {
        html+=`<option id="personOption${persoon.id}">${persoon.voornaam} ${persoon.familienaam}</option>`
    })

    list.innerHTML = html
}

const selectPerson = (e) => {
    const id = parseInt(e.target.id.replace("personOption", ""), 10); // Zet om naar getal
    console.log("Geselecteerde ID:", id);

    const persoon = personen.find((persoon) => persoon.id === id);

    if (persoon) {
        document.getElementById("txtVoornaam").value = persoon.voornaam;
        document.getElementById("txtFamilienaam").value = persoon.familienaam;
        document.getElementById("txtGeboorteDatum").value = persoon.geboorteDatum;
        document.getElementById("txtEmail").value = persoon.email;
        document.getElementById("txtAantalKinderen").value = persoon.aantalKinderen;

        selectedId = persoon.id;
    } else {
        console.log("Persoon niet gevonden.");
    }
};


// Event listener (btnNieuw click)
const bewerkNieuwePersoon = () => {
    console.log("Klik op de knop nieuw");

    selectedId = undefined

    document.getElementById("txtVoornaam").value =""
    document.getElementById("txtFamilienaam").value =""
    document.getElementById("txtGeboorteDatum").value =""
    document.getElementById("txtEmail").value =""
    document.getElementById("txtAantalKinderen").value =""
    // Zet de user interface klaar om de gegevens van een nieuwe persoon in te voeren
};


// onze setup functie die de event listeners registreert
const setup = () => {
    let btnBewaar = document.getElementById("btnBewaar");
    btnBewaar.addEventListener("click", bewaarBewerktePersoon);

    let btnNieuw = document.getElementById("btnNieuw");
    btnNieuw.addEventListener("click", bewerkNieuwePersoon);

    let lstPersonen = document.getElementById("lstPersonen");
    lstPersonen.addEventListener("click", selectPerson);
    // voeg een change listener toe aan lstPersonen. Bij het klikken op een option element in de lijst
    // moet de data van die persoon getoond worden in het formulier
};

window.addEventListener("load", setup);