let starttime;
let elapsedtime = 0;
let timeinterval;

function makereadable(a) {
    let timehrs = a / 3600000
    let hrs = Math.floor(timehrs)
    let timemins = timehrs*60
    let mins = Math.floor(timemins)
    let timesec = timemins*60
    let secs = Math.floor(timesec)

    let formathrs = hrs.toString().padStart(2,'0')
    let formatmins = mins.toString().padStart(2,'0')
    let formatsec = secs.toString().padStart(2,'0')

    return `Time    ${formathrs}:${formatmins}:${formatsec}`
}

dateinterval = setInterval(function printdate () {
    let dat = new Date(Date.now())
    let readdat = dat.toString()
    let datestr = "Date    "+readdat.substring(3,15)
    let timestr = "Time    "+readdat.substring(17,25)
    document.getElementById("minsechr").innerHTML = timestr
    document.getElementById("mmddyy").innerHTML = datestr
}, 1000)

function start() {
    starttime = Date.now();
    timeinterval = setInterval(function printTime() {
        elapsedtime = Date.now() - starttime;
        document.getElementById("time").innerHTML = makereadable(elapsedtime)
    }, 1000)

}

function pause() {
    clearInterval(timeinterval)
}

function resume() {
    elapsedtime = 0
    timeinterval = setInterval(function printTime() {
        elapsedtime = Date.now() - starttime;
        document.getElementById("time").innerHTML = makereadable(elapsedtime)
    }, 1000)
}
function reset() {
    clearInterval(timeinterval)
    document.getElementById("time").innerHTML = '00:00:00'
    elapsedtime = 0
}

document.getElementById("play").addEventListener("click",start)
document.getElementById("pause").addEventListener("click",pause)
document.getElementById("resume").addEventListener("click",resume)
document.getElementById("reset").addEventListener("click",reset)
