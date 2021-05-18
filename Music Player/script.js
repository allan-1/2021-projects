const audio = document.getElementById('audio')
const audioContainer = document.getElementById('music-cont')

const title = document.getElementById('title')

const play = document.getElementById('play');
const next = document.getElementById('next');
const previous = document.getElementById('prev')


// audio list
const audios = [
    {
        title: 'Sia - cold',
        path: './Music/Leslie Odom Jr. & Sia - Cold (Lyric Video).mp3'
    }, 
    {
        title: 'Kodaline - Raging',
        path: './Music/Kygo - Raging ft. Kodaline (Official Lyric Video).mp3'
    },
    {
        title: 'Davido - holy Ground ft Nicki Minaj',
        path: './Music/Davido - Holy Ground (Official Audio) ft. Nicki Minaj.mp3'
    }
]


let audioindex = 1;

// load song into dom first
loadAudio(audios[audioindex].path, audios[audioindex].title)

// functions

// load music to audio
function loadAudio(song, musictitle){
    audio.src = song
    title.innerText = musictitle
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
    loadAudio(audios[audioindex].path, audios[audioindex].title)
    playMusic()
}

function previousMusic(){
    audioindex --
    if(audioindex < 0){
        audioindex = audios.length - 1
    }
    loadAudio(audios[audioindex].path, audios[audioindex].title)
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