const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

/*
    1. Next/Prev
    2. Auto next
    3. Nav Active
    4. Click Nav Active
*/

const IMAGE_WIDTH = 980

const silderContent = $('.slider-content')
const sliderItem = $$('.slider-item')
const nextBtn = $('.control.next')
const prevBtn = $('.control.prev')

let currentIndex = 0
let nextTime

// Xử lý action slider
function slideToIndex(index) {
    silderContent.style.transform = `translateX(-${IMAGE_WIDTH * index}px)`
}

// Xử lý next
function next() {
    currentIndex++
    if (currentIndex >= sliderItem.length) {
        currentIndex = 0
    }
    slideToIndex(currentIndex)
}

// Xử lý click next
nextBtn.onclick = next

// Xử lý prev 
function prev() {
    currentIndex--
    if (currentIndex < 0) {
        currentIndex = sliderItem.length - 1
    }
    slideToIndex(currentIndex)
}

// Xử lý click prev
prevBtn.onclick = prev

// Auto play
function startAutoPlay() {
    nextTime = setInterval(next, 3000)
}

