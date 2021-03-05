const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const sliderContent = $('.slider-content')
const sliderItem = $$('.slider-item')
const nextBtn = $('.control.next')
const prevBtn = $('.control.prev')
const IMAGE_WIDTH = 980
let currentIndex = 0

// Xử lý next
function slideToIndex(index) {
    sliderContent.style.transform = `translateX(-${IMAGE_WIDTH * index}px)`
}

// Auto next
setInterval(console.log('tuna'), 300)

// Next 
function next() {
    currentIndex++
    if (currentIndex >= sliderItem.length) {
        currentIndex = 0
    }
    slideToIndex(currentIndex)
}

// Prev
function prev() {
    currentIndex--
    if (currentIndex <= 0) {
        currentIndex = sliderItem.length - 1
    }
    slideToIndex(currentIndex)
}

// Xử lý khi bấm btn next
nextBtn.onclick = next

// Xử lý khi bấm btn prev
prevBtn.onclick = prev

