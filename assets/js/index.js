import MediaPlayer from './MediaPlayer.js'
import AutoPlay from './plugins/AutoPlay.js'

const $video = document.querySelector('#video')
const $buttonPlay = document.querySelector('#button-play')
const $buttonMute = document.querySelector('#button-mute')

const player = new MediaPlayer({element: $video, plugins: [new AutoPlay()]})

$buttonPlay.onclick = () => player.playPause()
$buttonMute.onclick = () => player.muteUnmute()