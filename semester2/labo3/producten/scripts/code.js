const setup = () => {
update()
    document.getElementById("recalc").addEventListener("click",update)
}
window.addEventListener("load", setup);

const update = () => {
    let total = 0
    let rows = document.getElementsByClassName("row")
    for (let i = 0; i < rows.length; i++) {
        let price = parseFloat(rows[i].children.item(1).innerText.replace(" Eur", ""));
        let amount =parseFloat(rows[i].children.item(2).children.item(0).value)
        let tax = parseFloat(rows[i].children.item(3).innerHTML.replace("%", ""))
        let result = Math.floor(price*amount*(1+tax/100)*100)/100
        total += result
        rows[i].children.item(4).innerHTML = `${result} Eur`;
    }
    document.getElementById("total").innerHTML = `${Math.floor(total*100)/100} Eur`
}