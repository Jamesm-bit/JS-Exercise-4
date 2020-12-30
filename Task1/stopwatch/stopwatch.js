let startTime;
let elapsedTime = 0;
let timeTnterval;
let sec = 00;
let min = 00;
let hrs = 00;
let intervalStarted = false

setInterval(() => {
    let date = new Date().toString().split(" ")
    document.getElementById("minsechr").innerHTML = "Time    " + date[4]
    document.getElementById("mmddyy").innerHTML = "Date    " + date[1] + " " + date[2] + " " + date[3]
}, 1000)

function startStopWatch() {
    if (intervalStarted == false) {
        timeInterval = setInterval(() => {
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
        intervalStarted = true
    }
}

function start() {
    hrs = 0
    min = 0
    sec = 0
    startStopWatch()
}

function pause() {
    clearInterval(timeInterval)
    intervalStarted = false
}

function resume() {
    startStopWatch()
}
function reset() {
    clearInterval(timeInterval)
    document.getElementById("time").innerHTML = 'Time     00:00:00'
    hrs = 0
    min = 0
    sec = 0
}

document.getElementById("play").addEventListener("click", start)
document.getElementById("pause").addEventListener("click", pause)
document.getElementById("resume").addEventListener("click", resume)
document.getElementById("reset").addEventListener("click", reset)
