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
const navs = $$('.nav')

let nextTime

const slider = {
    currentIndex: 0,
    handleEvent: function() {
        const _this = this
        
        // Xử lý click btn next
        nextBtn.onclick = function() {
            _this.nextSlider()
            _this.activeNav()
        }

        // Xử lý click btn prev
        prevBtn.onclick = function() {
            _this.prevSlider()
            _this.activeNav()
        }

        // Xử lý duyệt navs
        navs.forEach(function(nav, index) {
            // Xử lý click nav
            nav.onclick = function() {
                _this.currentIndex = index
                _this.sliderToIndex(_this.currentIndex)
                _this.activeNav()
            }
        })
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
    prevSlider: function() {
        this.currentIndex--
        if (this.currentIndex < 0) {
            this.currentIndex = sliderItem.length - 1
        }
        this.sliderToIndex(this.currentIndex)
    },
    sliderAutoStart: function() {
        clearInterval(nextTime)
        nextTime = setInterval(this.nextSlider(), 3000)
    },
    activeNav: function() {
        $('.nav.current').classList.remove('current')
        navs[this.currentIndex].classList.add('current')
    },
    start: function() {
        // Xử lý các sự kiện
        this.handleEvent()

        // Tự động chạy slider
        // this.sliderAutoStart()
    }
}

slider.start()