const heroImage = document.getElementById("hero-image")
const isHover = e => e.parentElement.querySelector(':hover') === e
const timerDuration = 15000
let timer
var audio = new Audio('./assets/lebron.mp3')

document.addEventListener('mousemove', function checkHover() {
    const hovered = isHover(heroImage)
    if (hovered !== checkHover.hovered) {
        checkHover.hovered = hovered
        if (hovered) {
            document.body.classList.add('dark-overlay')
            // audio.play()
            timer = setTimeout(function () {
                window.location.href = "https://github.com/TimNilsson04"
            }, timerDuration)
        } else {
            // audio.pause()
            // audio.currentTime = 0
            document.body.classList.remove('dark-overlay')
            clearTimeout(timer)
        }
    }
})

