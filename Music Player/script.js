const audio = document.getElementById('audio')
const audioContainer = document.getElementById('music-cont')

const image = document.getElementById('image')

const title = document.getElementById('title')

const play = document.getElementById('play');
const next = document.getElementById('next');
const previous = document.getElementById('prev')


// audio list
const audios = [
    {
        title: 'Sia - cold',
        path: './Music/Leslie Odom Jr. & Sia - Cold (Lyric Video).mp3',
        image: './images/cold.jpeg'
    }, 
    {
        title: 'Kodaline - Raging',
        path: './Music/Kygo - Raging ft. Kodaline (Official Lyric Video).mp3',
        image: './images/raging.jpeg'
    },
    {
        title: 'Davido - holy Ground ft Nicki Minaj',
        path: './Music/Davido - Holy Ground (Official Audio) ft. Nicki Minaj.mp3',
        image: './images/holy ground.jpeg'
    }
]


let audioindex = 1;

// load song into dom first
loadAudio(audios[audioindex].path, audios[audioindex].title, audios[audioindex].image)

// functions

// load music to audio
function loadAudio(song, musictitle, songimage){
    audio.src = song
    title.innerText = musictitle
    image.src = songimage
}

function playMusic(){
    audioContainer.classList.add('play')
    audio.play()
}

function pauseMusic(){
    audioContainer.classList.remove('play')
    audio.pause()
}

function nextMusic(){
    audioindex ++
    if(audioindex > audios.length - 1){
        audioindex = 0
    }
    loadAudio(audios[audioindex].path, audios[audioindex].title, audios[audioindex].image)
    playMusic()
}

function previousMusic(){
    audioindex --
    if(audioindex < 0){
        audioindex = audios.length - 1
    }
    loadAudio(audios[audioindex].path, audios[audioindex].title, audios[audioindex].image)
    playMusic()
}

// event listeners
play.addEventListener('click', ()=>{
    const isPlaying = audioContainer.classList.contains('play')
    if(isPlaying){
        pauseMusic()
    }else{
        playMusic()
    }
})

next.addEventListener('click', nextMusic)
previous.addEventListener('click', previousMusic)