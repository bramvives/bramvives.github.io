const setup = () => {
    let studentJson = `{"voornaam":"Bram","achternaam":"Verpoot","geboorteDatum":"2006-11-11T23:00:00.000Z","adres":{"straat":"Street","huisnummer":1,"gemeente":"Kortrijk"}}`

    let student = JSON.parse(studentJson)
    student.voornaam = "johnie"

    console.log(student)


}

window.addEventListener('load', setup)



