// const $ = document.querySelector.bind(document)
// const $$ = document.querySelectorAll.bind(document)

// const tabs = $$('.tab-item')
// const panes = $$('.tab-pane')

// for (let i = 0; i < tabs.length; i++) {
//     const tab = tabs[i]
//     const pane = panes[i]
    
//     tab.onclick = function () {
//         $('.tab-item.active').classList.remove('active')
//         $('.tab-pane.active').classList.remove('active')

//         this.classList.add('active')
//         pane.classList.add('active')
//     }
// }

const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const tabs = $$('.tab-item');
const panes = $$('.tab-pane');

for (let i = 0; i < tabs.length; i++) {
    const tab = tabs[i];
    const pane = panes[i]

    tab.onclick = function() {
        $('.tab-item.active').classList.remove('active')
        $('.tab-pane.active').classList.remove('active')

        this.classList.add('active')
        pane.classList.add('active')
    }
    
}