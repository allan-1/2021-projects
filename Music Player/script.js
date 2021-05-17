const play = document.getElementById('play');
const next = document.getElementById('next');
const previous = document.getElementById('previous')

play.addEventListener('click', playMusic)
next.addEventListener('click', nextBtn)

const audios = [
    {path: './Music/Leslie Odom Jr. & Sia - Cold (Lyric Video).mp3'}, 
    {path: './Music/Kygo - Raging ft. Kodaline (Official Lyric Video).mp3'},
    {path: './Music/Davido - Holy Ground (Official Audio) ft. Nicki Minaj.mp3'}
]


var i = 0
var currentsong = audios[i].path

function playMusic(song){
    const audio = new Audio(song);
    audio.play()
}

function nextBtn(){
    let counter = i + 1
    i = counter
    // let music = audios[i].path
    // currentsong = music
    // // playMusic(music)
    // console.log(currentsong)
}
console.log(i)