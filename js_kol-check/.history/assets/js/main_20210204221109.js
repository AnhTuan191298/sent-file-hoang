const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const KOL_STORAGE_KEY = 'kols'

const fullName = $('input[name="fullname"]')
const image = $('input[name="image"]')
const birth = $('input[name="birth"]')
const price = $('input[name="price"]')
const phone = $('input[name="phone"]')
const form = $('#form')
const kols = JSON.parse(localStorage.getItem(KOL_STORAGE_KEY)) || []
const kolList = $('#kol-list')

// Add kol
form.onsubmit = function(e) {
    e.preventDefault()
    $('.alert-update').classList.add('active')
    let kol = {
        fullName: fullName.value,
        image: image.value,
        birth: birth.value,
        price: price.value,
        phone: phone.value
    }

    kols.push(kol)
    localStorage.setItem(KOL_STORAGE_KEY, JSON.stringify(kols))
    renderKols()

}

function renderKols() {
    const html = kols.map(function(kol, index) {
       if (kols === []) {
           return `
            <tr>
                <td>Dữ liệu trống</td>
            </tr>
           `
       } else {
            return `
            <tr>
                <td>${index + 1}</td>
                
            </tr>
            `
       }
    })

    kolList.innerHTML = html.join('')

}

renderKols()