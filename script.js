let clockHours = document.getElementById("hours")
let clockMinutes = document.getElementById("minutes")
let clockSeconds = document.getElementById("seconds")
let clockDate = document.getElementById("date")
let clockDay = document.getElementById("day")

function currentTime(){

    const today = new Date()
    let hours = today.getHours()
    let minutes = today.getMinutes()
    let seconds = today.getSeconds()
    let date = today.getDate()
    let month = today.getMonth()+1
    let year = today.getFullYear()
    let day = today.getDay()

    console.log(day)

    if(hours<10){
        hours = "0"+hours
    }
    
    if(minutes<10){
        minutes = "0"+minutes
    }
    
    if(seconds<10){
        seconds = "0"+seconds
    }

    if(date<10){
        date = "0"+date
    }

    if(month<10){
        month = "0"+month
    }

    clockHours.innerText = hours
    clockMinutes.innerText = minutes
    clockSeconds.innerText = seconds
    clockDate.innerHTML = date+"/"+month+"/"+year
    
    switch (day){
        case 1: 
            clockDay.innerText = "Mon" 
            break
        case 2:
            clockDay.innerText = "Tue"
            break
        case 3:
            clockDay.innerText = "Wed"
            break
        case 4:
            clockDay.innerText = "Thu"
            break
        case 5:
            clockDay.innerText = "Fri"
            break
        case 6:
            clockDay.innerText = "Sat"
            break
        case 7:
            clockDay.innerText = "Sun" 
            break  
        default:
            break 
    }
}

setInterval(currentTime,1000)