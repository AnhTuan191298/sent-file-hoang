const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const fullName = $('input[name="fullname"]')
const image = $('input[name="image"]')
const birth = $('input[name="birth"]')
const price = $('input[name="price"]')
const phone = $('input[name="phone"]')
const form = $('form')
const kols = JSON.parse(localStorage.getItem('kols')) || []

// Add kol
form.onsubmit = function() {
    e.preventDefault()
    let kol = {
        name: fullName.value,
        image: image.value,
        birth: birth.value,
        price: price.value,
        phone: phone.value
    }
}
