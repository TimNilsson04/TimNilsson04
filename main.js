const heroImage = document.getElementById("hero-image")
const isHover = e => e.parentElement.querySelector(':hover') === e
const timerDuration = 15000
let timer

document.addEventListener('mousemove', function checkHover() {
    const hovered = isHover(heroImage)
    if (hovered !== checkHover.hovered) {
        checkHover.hovered = hovered
        if (hovered) {
            document.body.classList.add('dark-overlay')
            timer = setTimeout(function () {
                window.close()
            }, timerDuration)
        } else {
            document.body.classList.remove('dark-overlay')
            clearTimeout(timer)
        }
    }
})

