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
        gsap.to('.nav__bottom', {
            duration: 4,
            delay: 3,
            bottom: 0
        })
        gsap.to('.navSM', {
            duration:4,
            delay: 3,
            bottom: 0
        })
    }
}, 50)

/*  HOME VIDEO BACKGROUND  */
//force play
const homeVideo = document.getElementById('home__video')
//play even not load
homeVideo.addEventListener('loadeddata', function() {
    homeVideo.play()
})
//play even it's paused
// homeVideo.addEventListener('pause', function () {
//     homeVideo.play()
// })
//pause when ended
homeVideo.addEventListener('ended', function () {
    homeVideo.pause()
})

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

//modal about
const modalAboutBtn = document.querySelector('.modal__about-button')
const modalAboutBtnClose = document.querySelector('.modal__about-buttonClose')
const modalAbout = document.querySelector('.modal__about')
modalAboutBtn.addEventListener('click', function () {
    modalAbout.classList.add('modal__about-active')
})
modalAboutBtnClose.addEventListener('click', function () {
    modalAbout.classList.remove('modal__about-active')
})
//modal what
const modalWhatBtn = document.querySelector('.card__what')
const modalWhatClose = document.querySelector('.modal__what-close')
const modalWhat = document.querySelector('.modal__what')
modalWhatBtn.addEventListener('click', function () {
    modalWhat.classList.add('modal__what-active')
})
modalWhatClose.addEventListener('click', function () {
    modalWhat.classList.remove('modal__what-active')
})
//modal who
const modalWhoBtn = document.querySelector('.card__who')
const modalWhoClose = document.querySelector('.modal__who-close')
const modalWho = document.querySelector('.modal__who')
modalWhoBtn.addEventListener('click', function () {
    modalWho.classList.add('modal__who-active')
})
modalWhoClose.addEventListener('click', function () {
    modalWho.classList.remove('modal__who-active')
})
//modal for
const modalForBtn = document.querySelector('.card__for')
const modalForClose = document.querySelector('.modal__for-close')
const modalFor = document.querySelector('.modal__for')
modalForBtn.addEventListener('click', function () {
    modalFor.classList.add('modal__for-active')
})
modalForClose.addEventListener('click', function () {
    modalFor.classList.remove('modal__for-active')
})
//modal horse
const modalHorseBtn = document.querySelector('.card__horse')
const modalHorseClose = document.querySelector('.modal__horse-close')
const modalHorse = document.querySelector('.modal__horse')
modalHorseBtn.addEventListener('click', function () {
    modalHorse.classList.add('modal__horse-active')
})
modalHorseClose.addEventListener('click', function () {
    modalHorse.classList.remove('modal__horse-active')
})
//modal cat
const modalCatBtn = document.querySelector('.card__cat')
const modalCatClose = document.querySelector('.modal__cat-close')
const modalCat = document.querySelector('.modal__cat')
modalCatBtn.addEventListener('click', function () {
    modalCat.classList.add('modal__cat-active')
})
modalCatClose.addEventListener('click', function () {
    modalCat.classList.remove('modal__cat-active')
})
//modal dog
const modalDogBtn = document.querySelector('.card__dog')
const modalDogClose = document.querySelector('.modal__dog-close')
const modalDog = document.querySelector('.modal__dog')
modalDogBtn.addEventListener('click', function () {
    modalDog.classList.add('modal__dog-active')
})
modalDogClose.addEventListener('click', function () {
    modalDog.classList.remove('modal__dog-active')
})
//modal bunny
const modalBunnyBtn = document.querySelector('.card__bunny')
const modalBunnyClose = document.querySelector('.modal__bunny-close')
const modalBunny = document.querySelector('.modal__bunny')
modalBunnyBtn.addEventListener('click', function () {
    modalBunny.classList.add('modal__bunny-active')
})
modalBunnyClose.addEventListener('click', function () {
    modalBunny.classList.remove('modal__bunny-active')
})