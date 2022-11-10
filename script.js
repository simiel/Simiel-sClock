secondHand = document.querySelector(".second-hand")

function setDate(){
    const now = new Date()
    const seconds = now.getSeconds()
    degree = seconds/60 * 360
    secondHand.style.transform = `rotate(${degree}deg)`

}

setInterval(setDate, 1000)