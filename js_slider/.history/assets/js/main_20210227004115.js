const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const sliderContent = $('.slider-content')
const sliderItem = $$('.slider-item')
const nextBtn = $('.control.next')
const IMAGE_WIDTH = 980
let currentIndex = 0

// Xử lý next
function slideToIndex() {
    sliderContent.style.transfom = `translateX(-${IMAGE_WIDTH * 1}px)`
}
slideToIndex()

// Xử lý khi bấm btn next
nextBtn.onclick = function() {
    currentIndex++
    slideToIndex(currentIndex)
}



