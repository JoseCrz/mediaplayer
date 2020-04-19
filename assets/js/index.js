import MediaPlayer from './MediaPlayer.js'
import AutoPlay from './plugins/AutoPlay.js'
import AutoPause from './plugins/AutoPause.js'

const $video = document.querySelector('#video')
const $buttonPlay = document.querySelector('#button-play')
const $buttonMute = document.querySelector('#button-mute')

const player = new MediaPlayer({element: $video, plugins: [new AutoPlay(), new AutoPause()]})

$buttonPlay.onclick = () => player.playPause()
$buttonMute.onclick = () => player.muteUnmute()