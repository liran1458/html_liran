


function Reserva(_nog, _phone, _person) {
    this.numberOfGuests = _nog,
        this.phoneNumber = _phone,
        this.contactPerson = _person
}
const reservetions = []
$("#confirm-btn").on("click", function () {
    const guestsNumber = $("#number-of-guests").val()
    const phoneNumber = $("#phone-number").val()
    const person = $("#contact-person").val()
    if (guestsNumber > 20) { return alert("our restaurant capacity is 20") }
    if (phoneNumber.length != 10) { return alert("phone number must be 10 char") }
    const adddedreserva = new Reserva(guestsNumber, phoneNumber, person)
    reservetions.push(adddedreserva)
    console.log(reservetions)

})
const content = document.getElementById("content")
function drawCards(arr) {
    if (!Array.isArray(arr)) return;
    for (let index = 0; index < arr.length; index++) {
        const currentReserva = arr[index];


        content.innerhtml = getCardTamp(currentReserva)




    }
}

function getCardTamp(obj) {
    const { numberOfGuests, phoneNumber, contactPerson } = obj
    return `            <div id="table"> 
                <h1>number of guestst : ${numberOfGuests} </h1>
                <h1>  phone number : ${phoneNumber}</h1>
                <h1>  contact person : ${contactPerson}</h1>
            </div>`
}