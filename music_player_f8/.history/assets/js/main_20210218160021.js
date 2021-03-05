const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

/*
    1. Render song
    2. Scroll Top
    3. Play / Pause / Seek
    4. CD retate
    5. Next/Prev
    6. Random
    7. Next / Repeat when ended 
    8. Active song
    9. Scroll active song into view
    10. Play song when click
*/

const player = $('.player')
const playlist = $('.playlist')
const heading = $('header h2')
const cdThumb = $('.cd-thumb')
const audio = $('#audio')
const cd = $('.cd')
const playBtn = $('.btn-toggle-play')
const progress = $('#progress')
const nextBtn = $('.btn-next')
const prevBtn = $('.btn-prev')
const randomBtn = $('.btn-random')
const repeatBtn = $('.btn-repeat')

const app = {
    currentIndex: 0,
    isPlaying: false,
    isRandom: false,
    isRepeat: false,
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
            <div class="song ${index === app.currentIndex ? 'active' : ''}">
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
    defineProperties:function() {
        Object.defineProperty(this, 'currentSong', {
            get: function() {
                return this.songs[this.currentIndex]
            }
        })
    },
    handleEvents: function() {
        const _this= this
        const cdWidth = cd.offsetWidth

        // Xử lý CD quay/dừng
        const cdThumbAnimate = cdThumb.animate([
            {transform: 'rotate(360deg)'}
        ], {
            duration: 10000, //10 second
            iterations: Infinity
        })
        cdThumbAnimate.pause()

        // Xứ lý phóng to thu nhỏ CD
        document.onscroll = function() {
            const scrollTop = window.scrollY || document.documentElement.scrollTop
            const newCdWidth = cdWidth - scrollTop

            if (newCdWidth > 0) {
                cd.style.width = newCdWidth + 'px'
            } else if (newCdWidth < 0) {
                cd.style.width = 0 + 'px'
            }

            cd.style.opacity = newCdWidth / cdWidth
        }

        // Xử lý khi click play
        playBtn.onclick = function() {
            if (_this.isPlaying) {
                audio.pause()
            } else {
                audio.play()
            }
            
        }

        // Khi song được play
        audio.onplay = function() {
            _this.isPlaying = true
            player.classList.add('playing')
            cdThumbAnimate.play()
        }

         // Khi song bị pause
         audio.onpause = function() {
            _this.isPlaying = false
            player.classList.remove('playing')
            cdThumbAnimate.pause()
        }

        // Khi tiến độ bài hát thay đổi
        audio.ontimeupdate = function() {
            if (audio.duration) {
                const progressPercent = Math.floor(audio.currentTime / audio.duration * 100)
                progress.value = progressPercent
            }
        }

        // Xử lý khi tua song
        progress.onchange = function(e) {
            const seekTime = audio.duration / 100 * e.target.value
            audio.currentTime = seekTime
        }

        // Khi next song
        nextBtn.onclick = function() {
            if (_this.isRandom) {
                _this.playRandomSong()
            } else {
                _this.nextSong()
            }
            audio.play()
            _this.render()
            _this.scrollToActiveSong()
        }

        // Khi prev song
        prevBtn.onclick = function() {
            if (_this.isRandom) {
                _this.playRandomSong()
            } else {
                _this.prevSong()
            }
            audio.play()
            _this.render()
            _this.scrollToActiveSong()
        }

        // Xử lý bật/tắt random
        randomBtn.onclick = function() {
            _this.isRandom = !_this.isRandom
            randomBtn.classList.toggle('active', _this.isRandom )
        }
        
        // Xử lý phát lặp lại 1 song
        repeatBtn.onclick = function() {
            _this.isRepeat = !_this.isRepeat
            repeatBtn.classList.toggle('active', _this.isRepeat )
        }

        // Xử lý next song khi audio ended
        audio.onended = function(e) {
            if (_this.isRepeat) {
                audio.play()
            } else {
                nextBtn.click()
            }
        }

    },
    scrollToActiveSong: function() {
        setTimeout(() => {
            $('.song.active').scrollInooView({
                behavior: 'smooth',
                block: 'nearest'
            })
        }, 300)
    },
    loadCurrentSong: function() {

        heading.textContent = this.currentSong.name
        cdThumb.style.backgroundImage = `url('${this.currentSong.img}')`
        audio.src = this.currentSong.path
    },
    nextSong: function() {
        this.currentIndex++
        if (this.currentIndex >= this.songs.length) {
            this.currentIndex = 0
        }
        this.loadCurrentSong()
    },
    prevSong: function() {
        this.currentIndex--
        if (this.currentIndex < 0) {
            this.currentIndex = this.songs.length - 1
        }
        this.loadCurrentSong()
    },
    playRandomSong: function() {
        let newIndex
        do {
            newIndex = Math.floor(Math.random() * this.songs.length)
        } while(newIndex === this.currentIndex)

        this.currentIndex = newIndex
        this.loadCurrentSong()
    },
    start: function() {
        // Định nghĩa các thuộc tính cho Object
        this.defineProperties()

        // Xử lý các sự kiện (DOM Events)
        this.handleEvents()

        // Tải thông tin bài hát đầu tiên vào UI khu chạy ứng dụng
        this.loadCurrentSong()

        // Render play list
        this.render()
    }
}

app.start()