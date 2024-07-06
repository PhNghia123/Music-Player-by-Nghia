const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const heading = $('header h2')
const cdThumb = $('.cd-thumb')
const audio = $('#audio')
const btnPlay = $('.btn-toggle-play')
const player = $('.player')
const progress = $('#progress')
const nextBtn = $('.btn-next')
const prevBtn = $('.btn-prev')
const randomBtn = $('.btn-random')
const repeatBtn = $('.btn-repeat')
const playlist = $('.playlist')
const app = {
    currentIndex : 0,
    isPlaying: false,
    isRandom: false,
    isRepeat: false,
    songs : [
        {
            name: 'Chạy ngay đi',
            singer: 'Sơn Tùng M-TP',
            path: './assets/music/song1- CHẠY NGAY ĐI  RUN NOW  SƠN TÙNG MTP  Official Music Video.mp3',
            image: 'https://i.ytimg.com/vi/32sYGCOYJUM/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBQQWdJ4iFO2aqQnC80DVA0kUgKjQ'
        },
        {
            name: 'Phía sau một cô gái',
            singer: 'Soobin Hoàng Sơn',
            path: './assets/music/song2- PHÍA SAU MỘT CÔ GÁI  Soobin Hoàng Sơn  OFFICIAL Lyric Video .mp3',
            image: 'https://i.ytimg.com/vi/j__Q13iAxNk/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLChnwOSW0BWAyRGaupLqQ4cv3Wbyg'
        },
        {
            name: 'Tặng Một Món Quà',
            singer: 'Pháo vs J Jade',
            path: './assets/music/song3- Phaos VS J Jade  Tặng Một Món Quà  Team Wowy  Rap Việt  Mùa 2 MV Lyrics.mp3',
            image: 'https://i.ytimg.com/vi/3Hs_02-4yI0/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAR4swOX9n6r5dailiJ131UKIlJgA'
        },
        {
            name: 'Khóa ly biệt',
            singer: 'Anh Tú',
            path: './assets/music/song4- Khóa Ly Biệt  Anh Tú  Thà là Ô Thước xin đừng cách biệt âm dương.mp3',
            image: 'https://i.ytimg.com/vi/rJabgOChWiM/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDy731_bTvQv5OgTGrEnP347vc96A'
        },
        {
            name: 'Anh thôi nhân nhượng',
            singer: 'Kiều Chi Cover',
            path: './assets/music/song5- ANH THÔI NHÂN NHƯỢNG  AN CLOCK KIỀU CHI COVER.mp3',
            image: 'https://i.ytimg.com/vi/NaQnFcDKFiM/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA-GgH5d8czyjWVIHY7vZPZ1rkfQg'
        },
        {
            name: 'Nơi này có anh',
            singer: 'Sơn Tùng M-TP',
            path: './assets/music/song6- NƠI NÀY CÓ ANH  OFFICIAL MUSIC VIDEO  SƠN TÙNG MTP.mp3',
            image: 'https://i.ytimg.com/vi/FN7ALfpGxiI/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDwwxu3h8KvIrNUs7C6MRJCZfjwiA'
        },
        {
            name: 'Hãy trao cho anh',
            singer: 'Sơn Tùng M-TP',
            path: './assets/music/song7- SƠN TÙNG MTP  HÃY TRAO CHO ANH ft Snoop Dogg  Official MV.mp3',
            image: 'https://i.ytimg.com/vi/knW7-x7Y7RE/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAnU4rb1T09_8_z3VwCei3da7UU0w'
        },
        {
            name: 'Chúng ta không thuộc về nhau',
            singer: 'Sơn Tùng M-TP',
            path: './assets/music/song8- Chúng Ta Không Thuộc Về Nhau  Official Music Video  Sơn Tùng MTP.mp3',
            image: 'https://i.ytimg.com/vi/qGRU3sRbaYw/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA-IFOHGCJF0WxtARzId0oJ3CaGGw'
        },
        {
            name: 'Đừng làm trái tim anh đau',
            singer: 'Sơn Tùng M-TP',
            path: './assets/music/song9- SƠN TÙNG MTP  ĐỪNG LÀM TRÁI TIM ANH ĐAU  OFFICIAL MUSIC VIDEO.mp3',
            image: 'https://i.ytimg.com/vi/abPmZCZZrFA/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAKKkxyzooXkasYWnLdJchzMqBICg'
        },
        {
            name: 'There\'s No One At All',
            singer: 'Sơn Tùng M-TP',
            path: './assets/music/song10- SƠN TÙNG MTP  THERES NO ONE AT ALL ANOTHER VERSION  OFFICIAL MUSIC VIDEO.mp3',
            image: 'https://i.ytimg.com/vi/Bd0Gwku-shI/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC0yDonc-lgzFmcRP7Qrn5QpCoTpg'
        }
    ],
    render : function() {
        const htmls = this.songs.map(function(song, index) {
            return `
                <div class="song" data-index="${index}">
                    <div class="thumb"
                        style="background-image: url('${song.image}');"></div>
                    <div class="body">
                        <h3 class="title">${song.name}</h3>
                        <p class="author">${song.singer}</p>
                    </div>
                    <div class="option">
                        <i class="fas fa-ellipsis-h"></i>
                    </div>
                </div>
            `;
        });
        $('.playlist').innerHTML = htmls.join('');
    },
    handleEvents : function() {
        const _this = this
        // xử lý cd quay và dừng
        const cdThumbAnimate = cdThumb.animate([
            {transform: 'rotate(360deg)'}
        ], {
            duration: 10000,
            iterations: Infinity
        })
        cdThumbAnimate.pause()
        //xử lý phóng to, thu nhỏ cd
        const cdWidth = $('.cd').offsetWidth;
        const cd = $('.cd');
        document.onscroll = function() {
            const scrollTop = window.scrollY || document.documentElement.scrollTop;
            cd.style.width = (cdWidth - scrollTop) > 0 ? (cdWidth - scrollTop) + 'px' : 0;
            cd.style.opacity = (cdWidth - scrollTop) / cdWidth; 
        }
        //xử lý khi click play/pause 
        btnPlay.onclick = function() {
            if (_this.isPlaying) {
            audio.pause()
            } else {
            audio.play()
            }
            _this.activeSong()
            _this.scrollIntoView()
        }
        audio.onplay = function() {
            player.classList.add('playing')
            _this.isPlaying = true
            cdThumbAnimate.play();
        }
        audio.onpause = function() {
            cdThumbAnimate.pause();
            player.classList.remove('playing')
            _this.isPlaying = false
        }
        // xử lý thanh progress
        audio.ontimeupdate = function() {
            if (audio.duration) {
                progress.value = audio.currentTime / audio.duration * 100
            } 
        }
        // xử lý khi tua music 
        progress.onchange = function(event) {
            audio.currentTime = event.target.value / 100 * audio.duration
        }
        // xử lý khi next, prev bài hát
        nextBtn.onclick = function () {
            if (_this.isRandom) {
                _this.playRandomSong()
                audio.play()
            } else {
                _this.nextSong()
                audio.play()
            }
            _this.activeSong();
            _this.scrollIntoView()
        }
        prevBtn.onclick = function () {
            if (_this.isRandom) {
                _this.playRandomSong()
            } else {
                _this.prevSong()
            }
            audio.play()
            _this.activeSong();
            _this.scrollIntoView()
        }
        //xử lý khi ấn nút randomBtn 
        randomBtn.onclick = function() {
            _this.isRandom = !_this.isRandom
            randomBtn.classList.toggle('active', _this.isRandom)
        }
        //xử lý khi audio ended chuyển bài khác
        audio.onended = function() {
            if (_this.isRepeat) {
                _this.playRepeatSong() 
                // có thể dùng
                // audio.play()
            } else {
                nextBtn.click()
            }
        }
        // xử lý khi ấn nút repeat
        repeatBtn.onclick = function() {
            _this.isRepeat = !_this.isRepeat
            repeatBtn.classList.toggle('active', _this.isRepeat)
        }
        // xử lý khi chọn và phát bài hát
        playlist.onclick = function(e) {
            const songNode = e.target.closest('.song:not(.active)')
            if(songNode || e.target.closest('.option')) {
                if (songNode) {
                    _this.currentIndex = Number(songNode.getAttribute('data-index'))
                    _this.loadCurrentSong()
                    _this.activeSong()
                    audio.play()
                }
            }
        }
    },
    getCurrentSong: function() {
        return (this.songs[this.currentIndex]);
    },
    loadCurrentSong: function() {
        heading.innerText = this.getCurrentSong().name
        cdThumb.style.backgroundImage = `url(${this.getCurrentSong().image})`
        audio.src = this.getCurrentSong().path
    },
    nextSong : function() {
        this.currentIndex++
        if (this.currentIndex >= this.songs.length) {
            this.currentIndex = 0
        }
        this.loadCurrentSong()
    },
    prevSong : function() {
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
        } while (newIndex === this.currentIndex)
        this.currentIndex = newIndex
        this.loadCurrentSong()
    },
    playRepeatSong: function() {
        this.loadCurrentSong()
        audio.play()
    },
    activeSong: function() {
        const _this = this
        const songActive = $$('.song')
        songActive.forEach(function(cur, index) {
            cur.classList.remove('active')
            if (index === _this.currentIndex) {
                cur.classList.add('active')
            }
        })
    },
    scrollIntoView: function() {
        setTimeout(function() {
            $('.song.active').scrollIntoView({
                behavior: 'smooth',
                block: 'nearest'
            })
        }, 300)
    },
    start: function() {
        this.handleEvents();
        this.loadCurrentSong();
        this.render();
    }
}
app.start();