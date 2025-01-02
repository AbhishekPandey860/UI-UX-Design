// http://api.weatherapi.com/v1/current.json?key=5e327cbd1d2a4978a8e82334242412&q=Mumbai&aqi=no

const temperatureField = document.querySelector(".temperature")
const locationField = document.querySelector(".time_location p")
const DateandTimeField = document.querySelector(".time_location span")
const conditionField = document.querySelector(".condition p")
const searchField = document.querySelector(".search_area")
const form = document.querySelector("form")

form.addEventListener('submit', searchForLocation)


let target = 'delhi,india'

const fetchresults = async (targetlocation) => {
    let url = `http://api.weatherapi.com/v1/current.json?key=5e327cbd1d2a4978a8e82334242412&q=${targetlocation}&aqi=no`

    const res = await fetch(url)

    const data = await res.json()

    console.log(data)


    let locationName = data.location.name
    let temperature = data.current.temp_c
    let time = data.location.localtime
    let condition = data.current.condition.text

    updateDetails(temperature, locationName, time, condition)
    //  console.log(locationName,time,temperature,condition,condition2)
}


function updateDetails(temperature, locationName, time, condition) {
    let splitDate = time.split(" ")[0]

    let splitTime = time.split(" ")[1]

    let currentDay = getDayName(new Date(splitDate).getDay())


temperatureField.innerText = temperature
locationField.innerText = locationName
DateandTimeField.innerText = `${splitDate} ${currentDay} ${splitTime}`
conditionField.innerText = condition
}



function searchForLocation(e) {
    e.preventDefault()

    target = searchField.value

    fetchresults(target)
}

fetchresults(target)


function getDayName(number) {
    switch (number) {
        case 0:
            return "Sunday";
        case 1:
            return "Monday";
        case 2:
            return "Tuesday";
        case 3:
            return "Wednesday";
        case 4:
            return "Thursday";
        case 5:
            return "Friday";
        case 6:
            return "Saturday";
    }
}