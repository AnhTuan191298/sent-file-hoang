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
        fullName: fullName.value,
        image: image.value,
        birth: birth.value,
        price: price.value,
        phone: phone.value
    }

    kols.push(kol)
    localStorage.setItem('kols', JSON.stringify(kols))
}

function renderKols() {
    const html = kols.map(function(kol, index) {
        return `
        <tr>
            <td>${index + 1}</td>
            <td>${kol.fullName}</td>
            <td>
                <img class="avatar" src="https://64.media.tumblr.com/d1b06afb69cf8b615690ff734129e902/f04605d2cb559bfc-d8/s1280x1920/f91d82446d71c5ee9ace99af4936adcd5549d93f.jpg" alt="">
            </td>
            <td>02/02/2000</td>
            <td>1.000.000đ</td>
            <td>0987363736</td>
        </tr>
        `
    })
}
