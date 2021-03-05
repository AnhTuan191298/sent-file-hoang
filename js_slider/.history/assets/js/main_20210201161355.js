const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const slider = $('.slider')
const sliderImages = $$('.slider img')

const btnPrev = $('#prevBtn')
const btnNext = $('#nextBtn')

btnNext.onclick = function() {
    sliderImages.forEach(function(image) {
        image.classList.add('actionNext')
    })
}

