const audio = document.getElementById('audio')
const audioContainer = document.getElementById('music-cont')

const play = document.getElementById('play');
const next = document.getElementById('next');
const previous = document.getElementById('prev')


// audio list
const audios = [
    {path: './Music/Leslie Odom Jr. & Sia - Cold (Lyric Video).mp3'}, 
    {path: './Music/Kygo - Raging ft. Kodaline (Official Lyric Video).mp3'},
    {path: './Music/Davido - Holy Ground (Official Audio) ft. Nicki Minaj.mp3'}
]


let audioindex = 1;

// functions

// load music to audio
function loadAudio(song){
    audio.src = song
}

function playMusic(){
    audioContainer.classList.add('play')
    audio.play()
}

function pauseMusic(song){
    audioContainer.classList.remove('play')
    audio.pause()
}

function nextMusic(){
    audioindex ++
    if(audioindex > audios.length - 1){
        audioindex = 0
    }
    loadAudio(audios[audioindex].path)

    audio.play()
}

function previousMusic(){
    audioindex --
    if(audioindex < 0){
        audioindex = audios.length - 1
    }
    loadAudio(audios[audioindex].path)

    audio.play()
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