const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const playlist = $('.playlist')

const app = {
    songs: [
        {
            name: 'Save your tear',
            singer: 'Weedknd',
            path: './assets/audio/save_your_tear.mp3',
            img: './assets/img/save-your-tear.jpg'
        },
        {
            name: 'Nếu một ngày',
            singer: '29BROS X EM LỀU',
            path: './assets/audio/neu_mot_ngay.mp3',
            img: './assets/img/neu-mot-ngay.jpg'
        },
        {
            name: 'instagram',
            singer: 'DEAN',
            path: './assets/audio/instagram.mp3',
            img: './assets/img/instagram.jpg'
        },
        {
            name: 'LẦN CUỐI',
            singer: 'Ngọt',
            path: './assets/audio/lan_cuoi.mp3',
            img: './assets/img/lan-cuoi.jpg'
        },
        {
            name: 'Blue Tequila',
            singer: 'Táo',
            path: './assets/audio/blue_tequila.mp3',
            img: './assets/img/tequila.jpg'
        },
        {
            name: 'Someone that I used to know',
            singer: 'Gotye Feat. Kimbra',
            path: './assets/audio/somebody_that_i_used_to_know.mp3',
            img: './assets/img/somebody.jpg'
        },
        {
            name: 'Circles',
            singer: 'Post Malone',
            path: './assets/audio/circles.mp3',
            img: './assets/img/circles.jpg'
        },
        {
            name: 'Bài này chill phết',
            singer: 'Đen - ft. MIN',
            path: './assets/audio/bai_nay_chill_phet.mp3',
            img: './assets/img/chill.jpg'
        },
        {
            name: 'Lover boy',
            singer: 'Phum Viphurit',
            path: './assets/audio/lover_boy.mp3',
            img: './assets/img/lover-boy.jpg'
        },
        {
            name: 'She said',
            singer: 'WEAN - ft. NAOMI',
            path: './assets/audio/she_said.mp3',
            img: './assets/img/she-said.jpg'
        },
    ],
    render: function() {
        const htmls = this.songs.map(function(song, index) {
            return `
            <div class="song">
                <div class="thumb" style="background-image: url('${song.img}')">
                </div>
                <div class="body">
                <h3 class="title">${song.name}</h3>
                <p class="author">${song.singer}</p>
                </div>
                <div class="option">
                <i class="fas fa-ellipsis-h"></i>
                </div>
            </div>
            `
        })
        playlist.innerHTML = htmls.join('')
    },
    start: function() {
        this.render()
    }
}

app.start()