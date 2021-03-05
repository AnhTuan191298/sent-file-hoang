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

const slider = {
    handleEvent: function() {
        
    },
    start: function() {
        this.handleEvent()
    }
}

slider.start()