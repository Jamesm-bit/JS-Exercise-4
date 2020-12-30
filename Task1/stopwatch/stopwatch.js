let starttime;
let elapsedtime = 0;
let timeinterval;
let sec = 00;
let min = 00;
let hrs = 00;
let intervalstarted = false
function makereadable(a) {
    let timehrs = a / 3600000
    let hrs = Math.floor(timehrs)
    let timemins = timehrs * 60
    let mins = Math.floor(timemins)
    let timesec = timemins * 60
    let secs = Math.floor(timesec)

    let formathrs = hrs.toString().padStart(2, '0')
    let formatmins = mins.toString().padStart(2, '0')
    let formatsec = secs.toString().padStart(2, '0')

    return `Time    ${formathrs}:${formatmins}:${formatsec}`
}

dateinterval = setInterval(() => {
    let date = new Date().toString().split(" ")
    document.getElementById("minsechr").innerHTML = "Time    " + date[4]
    document.getElementById("mmddyy").innerHTML = "Date    " + date[1] + " " + date[2] + " " + date[3]
}, 1000)

function start() {
    hrs = 0
    min = 0
    sec = 0
    if (intervalstarted == false) {
        timeinterval = setInterval(() => {
            if (sec == 60) {
                sec = 0
                min++
                if (min == 60) {
                    hrs++
                    min = 0
                }
            }
            document.getElementById("time").innerHTML = `Time    ${hrs.toString().padStart(2, '0')}:${min.toString().padStart(2, '0')}:${sec.toString().padStart(2, '0')}`
            sec++
        }, 1000)
        intervalstarted = true
    }
}

function pause() {
    clearInterval(timeinterval)
    intervalstarted = false
}

function resume() {
    if (intervalstarted == false) {
        timeinterval = setInterval(() => {
            if (sec == 60) {
                sec = 0
                min++
                if (min == 60) {
                    hrs++
                    min = 0
                }
            }
            document.getElementById("time").innerHTML = `Time    ${hrs.toString().padStart(2, '0')}:${min.toString().padStart(2, '0')}:${sec.toString().padStart(2, '0')}`
            sec++
        }, 1000)
    }
    intervalstarted = true
}
function reset() {
    clearInterval(timeinterval)
    document.getElementById("time").innerHTML = '00:00:00'
    hrs = 0
    min = 0
    sec = 0
}

document.getElementById("play").addEventListener("click", start)
document.getElementById("pause").addEventListener("click", pause)
document.getElementById("resume").addEventListener("click", resume)
document.getElementById("reset").addEventListener("click", reset)
