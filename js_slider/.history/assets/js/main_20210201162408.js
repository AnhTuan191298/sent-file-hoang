const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const slider = $('.slider')
const sliderImages = $$('.slider img')

const btnPrev = $('#prevBtn')
const btnNext = $('#nextBtn')

btnNext.onclick = function() {
    sliderImages.forEach(function(image) {
        image.style.transform = 'translateX(-100%)'
        image.style.transition  = 'transform 0.5s'
    })
}

// btnPrev.onclick = function() {
//     sliderImages.forEach(function(image) {
//         image.style.transform = 'translateX(100%)'
//         image.style.transition  = 'transform 0.5s'
//     })
// }

