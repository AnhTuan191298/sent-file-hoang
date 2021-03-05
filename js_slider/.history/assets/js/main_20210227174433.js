const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

/*
    1. Next/Prev
    2. Auto next
    3. Nav Active
    4. Click Nav Active
*/

const IMAGE_WIDTH = 980

const sliderContent = $('.slider-content')
const sliderItem = $$('.slider-item')
const nextBtn = $('.control.next')
const prevBtn = $('.control.prev')

const slider = {
    currentIndex: 0,
    handleEvent: function() {
        // Xử lý click btn next
        nextBtn.onclick = this.nextSlider()
    },
    sliderToIndex: function(index) {
        sliderContent.style.transform = `translateX(-${IMAGE_WIDTH * index}px)`
    },
    nextSlider: function() {
        this.currentIndex++
        if (this.currentIndex >= sliderItem.length) {
            this.currentIndex = 0
        }
        this.sliderToIndex(this.currentIndex)
    },
    start: function() {
        this.handleEvent()
    }
}

slider.start()