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

// Xử lý action slider
function slideToIndex(index) {
    silderContent.style.transform = `translateX(-${}px)`
}

