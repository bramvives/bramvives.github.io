const setup = () => {
    let birthday = new Date("2006-10-12")
    let now = new Date();
    console.log((now.getTime() - birthday.getTime()) / 1000 / 60 / 60 / 24)
}

window.addEventListener('load', setup)



