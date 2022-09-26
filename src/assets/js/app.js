import gsap from "gsap"
import Swiper from './swiper-bundle.min.js'

/*  LOADER  */
//select loading bar
const bar = document.querySelector('.loader__bar-in')
//select counter number
const count = document.querySelector('.loader__count-number')
//counter to 0
let c = 0
//adding width & count to the bar & the number
let barInterval = setInterval(() => {
    bar.style.width = c + '%'
    count.innerText = c + '%'
    c++
    if (c === 101) {
        clearInterval(barInterval)
        // loader disappear
        gsap.to('.loader', {
            duration: 2.55,
            delay: 2.25,
            background: 'transparent',
            display: 'none'
        })
        gsap.to('.loader__bar', {
            duration: 1.5,
            opacity: 0
        })
        gsap.to('.loader__count', {
            duration: .75,
            opacity: 0
        })
    }
}, 70)

/*  NAVBAR BIG SCREEN  */
//select home section
const home = document.querySelector('.home')
//select navbar
const nav = document.querySelector('.nav')
//calcul offset
const offset = home.offsetHeight - nav.offsetHeight

//change nav position on scroll
window.onscroll = () => {
    if (window.scrollY > offset) {
        nav.classList.remove('nav__bottom')
        nav.classList.add('nav__top')
    } else {
        nav.classList.add('nav__bottom')
        nav.classList.remove('nav__top')
    }
}

/*  NAVBAR SMALL SCREEN  */
//select modal
const modal = document.querySelector('.modal')
//select button i
const button = document.querySelector('.navSM__button-btn i')
//select elements trigger
const modalTrigger = document.querySelectorAll('.modal-trigger')
modalTrigger.forEach(trigger => trigger.addEventListener('click', toggleModal))

function toggleModal() {
    modal.classList.toggle('modal__active')
    // change icon on click
    if (button.classList.contains('bx-collection')) {
        button.classList.remove('bx-collection')
        button.classList.add('bx-download')
        button.classList.add('bx-rotate-180')
    } else {
        button.classList.add('bx-collection')
        button.classList.remove('bx-download')
        button.classList.remove('bx-rotate-180')
    }
}

window.addEventListener('scroll', function () {
    modal.classList.remove('modal__active')
})

/*  ABOUT GALLERY  */
//cards
const swiperCards = new Swiper(".about__gallery-cards", {
    loop: true,
    loopedSlides: 5,
    cssMode: true,
    effect: 'fade'
})

//thumbs
const swiperThumbs = new Swiper(".about__gallery-overflowThumbs", {
    loop: true,
    loopedSlides: 5,
    slidesPerView: 3,
    centeredSlides: true,
    slideToClickedSlide: true
})

swiperThumbs.controller.control = swiperCards