const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const fullName = $('input[name="fullname"]')
const image = $('input[name="image"]')
const birth = $('input[name="birth"]')
const price = $('input[name="price"]')
const phone = $('input[name="phone"]')
const form = $('#form')
console.log(form);
const kols = JSON.parse(localStorage.getItem('kols')) || []
const kolList = $('#kol-list')

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
    renderKols()

}

function renderKols() {
    const html = kols.map(function(kol, index) {
        return `
        <tr>
            <td>${index + 1}</td>
            <td>${kol.fullName}</td>
            <td>
                <img class="avatar" src="${kol.image}" alt="">
            </td>
            <td>${kol.birth}</td>
            <td>${kol.price}đ</td>
            <td>${kol.phone}</td>
        </tr>
        `
    })

    kolList.innerHTML = html.join('')

}

renderKols()
