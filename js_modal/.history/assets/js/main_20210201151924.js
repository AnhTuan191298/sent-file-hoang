const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const btn = $('.modal__action')

btn.onclick = function() {
    $('.layout').classList.add('active')
    $('.modal_show').classList.add('active')
}

const btn_close = $('.modal_show__close-img')

btn_close.onclick = function() {
    $('.layout').classList.remove('active')
    $('.modal_show').classList.remove('active')
}

const overlay = $('.layout')
console.log(overlay);