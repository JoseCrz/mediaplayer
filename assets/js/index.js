import MediaPlayer from './MediaPlayer.js'
import AutoPlay from './plugins/AutoPlay.js'

const $video = document.querySelector('#video')
const $button = document.querySelector('#button')

const player = new MediaPlayer({element: $video, plugins: [new AutoPlay()]})

$button.onclick = () => player.playPause()