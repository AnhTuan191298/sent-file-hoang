const $ = document.querySelector.bind(document)
        const $$ = document.querySelectorAll.bind(document)
        const KOL_STORAGE_KEY = 'kols'
        const kolApp = {
            kols: JSON.parse(localStorage.getItem(KOL_STORAGE_KEY)) || [],
            add: function(kol) {
                this.kols.push(kol)
            },
            update: function(index, kol) {
                this.kols[index] = kol
            },
            delete: function(index) {
                this.kols.splice(index, 1)
            },
            save: function() {
                localStorage.setItem(KOL_STORAGE_KEY, JSON.stringify(this.kols))
            },
            render: function() {
                // if (!this.kols.length) {
                //     return $('#kol-list').innerHTML = `
                //         <tr>
                //             <td style="text-align: center" colspan="6">Danh sách trống</td>
                //         </tr>
                //     `
                // }
                const htmls = this.kols.map(function (kol, index) {
                    return `
                        <tr>
                            <td>${index + 1}</td>
                            <td>${kol.fullname}</td>
                            <td>
                                <img class="avatar" src="${kol.image}" alt="">
                            </td>
                            <td>${kol.birth}</td>
                            <td>${kol.price}đ</td>
                            <td>${kol.phone}</td>
                            <td>
                                <a class="edit-kol" data-index="${index}" href="#">Sửa</a>    
                                <a class="delete-kol" data-index="${index}" href="#">Xóa</a>    
                            </td>
                        </tr>
                    `
                })
                if (htmls.length > 0) {
                    $('#kol-list').innerHTML = htmls.join('')
                } else {
                    $('#kol-list').innerHTML = `
                        <tr>
                            <td style="text-align: center" colspan="7">Danh sách trống</td>
                        </tr>
                    `
                }
            },
            start: function() {
                this.render()

                const modal = $('.modal')
                const modalCancel = $('.modal__btn--cancel')
                const modalOk = $('.modal__btn--ok')

                const form = $('#form')
                const kolWrap = $('#kol-wrap')
                

                const fullname = $('#fullname')
                const image = $('#image')
                const birth = $('#birth')
                const price = $('#price')
                const phone = $('#phone')

                let tmpIndex

                modalCancel.onclick = function() {
                    modal.classList.remove('show')
                }

                modalOk.onclick = function() {
                    kolApp.delete(tmpIndex)
                    kolApp.save()
                    kolApp.render()
                    modal.classList.remove('show')
                }

                kolWrap.onclick = function(e) {
                    const isClickedDelete = e.target.matches('.delete-kol')
                    const isClickedEdit = e.target.matches('.edit-kol')
                    if (isClickedDelete) {
                        // const index = e.target.getAttribute('data-index')
                        const index = e.target.dataset.index
                        tmpIndex = index
                        // Show modal confirm
                        modal.classList.add('show')
                    }

                    if (isClickedEdit) {
                        const index = e.target.dataset.index
                        tmpIndex = index
                    }
                }

                // On form submit
                form.onsubmit = function (e) {
                    e.preventDefault()
                    const kol = {
                        fullname: fullname.value,
                        image: image.value,
                        birth: birth.value,
                        price: price.value,
                        phone: phone.value,
                    }
                    kolApp.add(kol)
                    kolApp.save()
                    kolApp.render()
                    // Reset form
                    e.target.reset()
                }
            }
        }
        kolApp.start()