const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const sliderContent = $('.slider-content')
const sliderItem = $$('.slider-item')
const nextBtn = $('.control.next')
const IMAGE_WIDTH = 980
const currentIndex = 0

// Xử lý next
function slideToIndex(index) {
    sliderContent.style.transfom = `translateX(${IMAGE_WIDTH * index})`
}

// Xử lý khi bấm btn next
nextBtn.onclick = function() {
    currentIndex++
    if (currentIndex >= sliderItem.length) {
        currentIndex = 0
    }
    slideToIndex(currentIndex)
}



