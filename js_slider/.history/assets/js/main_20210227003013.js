const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const sliderContent = $('.slider-content')
const sliderItem = $$('.slider-item')
const nextBtn = $('.control.next')
const IMAGE_WIDTH = 980
let currentIndex = 0

// Xử lý next
function slideToIndex(index) {
    sliderContent.style.transfom = `translateX(-${IMAGE_WIDTH * index}px)`
}

// Xử lý khi bấm btn next
nextBtn.onclick = function() {
    console.log(123);
}



