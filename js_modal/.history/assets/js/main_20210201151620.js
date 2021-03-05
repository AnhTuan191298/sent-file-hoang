const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const btn = $('.modal__action')

btn.onclick = function() {
    $('.layout').classList.add('active')
    $('.modal_show').classList.add('active')
}

const close = $('.modal_show__close-img')
console.log(close);