const servicesRequested = []
const washCar = document.getElementById("wash-car")
let wash = false
const mowLawn = document.getElementById("mow-lawn")
let mow = false
const pullWeeds = document.getElementById("pull-weeds")
let pull = false
const price = []


washCar.addEventListener("click", function() {
    if (wash === false) {
        servicesRequested.push("Wash Car")
        price.push(10)
        displayServices()
        wash = true
    }
})

mowLawn.addEventListener("click", function() {
    if (mow === false) {
        servicesRequested.push("Mow Lawn")
        price.push(20)
        displayServices()
        mow = true
    }
})

pullWeeds.addEventListener("click", function() {
    if (pull === false) {
        servicesRequested.push("Pull weeds")
        price.push(30)
        displayServices()
        pull = true
    }
})

//Function to display the services that are picked
const servicesPicked = document.getElementById("services-picked")
const servicesPrice = document.getElementById("services-price")
const totalCost = document.getElementById("total-cost")
function displayServices() {
    servicesPicked.innerHTML = ""
    servicesPrice.innerHTML = ""
    for (let i = 0; i < servicesRequested.length; i++) {
        servicesPicked.innerHTML += `${servicesRequested[i]} <br>`
        servicesPrice.innerHTML += `$${price[i]} <br>`
    }
    totalCost.innerText = ""
    totalCost.innerText = "$" + price.reduce((a, b) => a + b, 0)

}

//Function to clear everything and "send" the invoice
const send = document.getElementById("send-invoice")
send.addEventListener("click", function() {
    servicesPicked.innerHTML = ""
    servicesPrice.innerHTML = ""
    totalCost.innerText = ""
    price.length = 0
    servicesRequested.length = 0
    wash = false
    mow = false
    pull = false
})


//To do list
//Array to hold services requested
//Buttons to add service to array
//Place to display data from array - updated everytime the array changes
//Don't charge > once for same service
//Total cost stays updated
//Button to "send invoice" (reset)
//Stretch: ability to remove items after adding