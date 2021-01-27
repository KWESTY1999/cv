// ====================
//  NAVBAR
// ====================
const navSlide = () => {
    const navBtn = document.querySelector('.nav-btn')
    const nav = document.querySelector('.nav-link')
    const navLink = document.querySelectorAll('.nav-link li')

    navBtn.addEventListener('click', () => {
        // Toggle Nav
        nav.classList.toggle('nav-active')


        //Animation links
        navLink.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = ''
            } else {
                link.style.animation = `navLinkAnime 0.5s ease forwards ${index / 7 + .3}s`;
            }
        })
        //btn Animation
        navBtn.classList.toggle('toggle')


    })

}
navSlide()

// hide / add

$(document).ready(function () {
    $(window).scroll(function () {
        if (this.scrollY > 20) {
            $('.nav').addClass("sticky")
        } else {
            $('.nav').removeClass("sticky")
        }
    })
})
// ====================
//  Clock
// ====================

function ClockFunction() {
    let Clock = new Date()
    let hours = Clock.getHours()
    let minutes = Clock.getMinutes()
    let seconds = Clock.getSeconds()
    let amPm = (hours < 12) ? "AM" : "PM"
    hours = (hours > 12) ? hours - 12 : hours
    hours = ("0" + hours).slice(-2)
    minutes = ("0" + minutes).slice(-2)
    seconds = ("0" + seconds).slice(-2)
    document.getElementById('clock').innerHTML = hours + "  :  " + minutes + "  :  " + seconds + " " + amPm
    let t = setTimeout(ClockFunction, 500)
}

// ====================
//      Writing 
// ====================

const writed = new Typed(".writing", {
    strings: [,"Developer.", "Graphic.", "Designer.", "Freelancer."],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
})


// ====================
//      SLIDE
// ====================

const sliderContainer = document.querySelector('.box-container')
const sliderBox = document.querySelectorAll(".box")

//   Buttons

const prevBtn = document.querySelector('.prevBtn')
const nextBtn = document.querySelector('.nextBtn')

nextBtn.addEventListener('click', ()=>{
    if(counter >= sliderBox.length -1) return;
    sliderContainer.style.transition = "transform 0.4s ease-in-out"
    counter++
    sliderContainer.style.transform = 'translateX(' + (-size * counter) + 'px)'
    
})


prevBtn.addEventListener('click', ()=>{
    if(counter <= 0) return;
    sliderContainer.style.transition = "transform 0.4s ease-in-out"
    counter--
    sliderContainer.style.transform = 'translateX(' + (-size * counter) + 'px)'
    
})


// Counter
let counter = 1;
const size = sliderBox[0].clientWidth

//loop
sliderContainer.addEventListener('transitionend', ()=>{
    if(sliderBox[counter].id === 'lastClone'){
        sliderContainer.style.transition = "none"
        counter = sliderBox.length - 2
        sliderContainer.style.transform = 'translateX(' + (-size * counter) + 'px)'
    }
    if(sliderBox[counter].id === 'firstClone'){
        sliderContainer.style.transition = "none"
        counter = sliderBox.length - counter
        sliderContainer.style.transform = 'translateX(' + (-size * counter) + 'px)'
    }
})