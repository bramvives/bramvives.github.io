const SEATS_PER_ROW = 9
const NUM_ROWS = 4
const SEATS_NEXT_TO_EACH_OTHER = 3

const seats = Array(NUM_ROWS).fill(Array(SEATS_PER_ROW).fill(null))

const load = () => {
    document.getElementById("find").addEventListener("click", findSeats)

    initSeats()

}

const initSeats = () => {

    for (let i = 0; i < NUM_ROWS; i++) {
        for (let j = 0; j < SEATS_PER_ROW; j++) {
            const seatImg = document.createElement("img")
            seatImg.setAttribute("src", "images/seat_avail.png")

            seats[i][j] = seatImg

            document.getElementById("seatContainer").append(seatImg)
        }
    }
}

const findSeats = () => {
    for (let i = 0; i < NUM_ROWS; i++) {
        for (let j = 0; j < SEATS_PER_ROW; j++) {
            if (j + 2 < SEATS_PER_ROW) {
                console.log()
                if (seats[i][j].src.endsWith("images/seat_avail.png") && seats[i][j + 1].src.endsWith("images/seat_avail.png") && seats[i][j + 2].src.endsWith("images/seat_avail.png")) {
                    seats[i][j].src = "images/seat_select.png"
                    seats[i][j + 1].src = "images/seat_select.png"
                    seats[i][j + 2].src = "images/seat_select.png"
                }

            }
        }
    }
}

window.addEventListener("load", load)