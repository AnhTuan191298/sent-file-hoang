const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

/*
    1. Next/Prev
    2. Auto next
    3. Nav Active
    4. Click Nav Active
*/

const sliderContent = $('.slider-content')
const sliderItem = $$('.slider-item')
const nextBtn = $('.control.next')
const prevBtn = $('.control.prev')
const IMAGE_WIDTH = 980
const navs = $$('.nav')

let currentIndex = 0
let nextTime

// Xử lý next
function slideToIndex(index) {
    sliderContent.style.transform = `translateX(-${IMAGE_WIDTH * index}px)`
}

// Auto next
startAutoPlay()
function startAutoPlay() {
    clearInterval(nextTime)
    nextTime = setInterval(next, 3000)
}

// Next 
function next() {
    currentIndex++
    if (currentIndex >= sliderItem.length) {
        currentIndex = 0
    }
    slideToIndex(currentIndex)
    handleCurrentNav(currentIndex)
    startAutoPlay()
}

// Prev
function prev() {
    currentIndex--
    if (currentIndex <= 0) {
        currentIndex = sliderItem.length - 1
    }
    slideToIndex(currentIndex)
    handleCurrentNav()
    startAutoPlay()
}

// Xử lý khi bấm btn next
nextBtn.onclick = next

// Xử lý khi bấm btn prev
prevBtn.onclick = prev

function handleCurrentNav(index) {
    $('.nav.current').classList.remove('current')
    navs[index].classList.add('current')
}

