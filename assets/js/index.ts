import MediaPlayer from './MediaPlayer'
import AutoPlay from './plugins/AutoPlay'
import AutoPause from './plugins/AutoPause'
import Ads from './plugins/Ads'

const $video = document.querySelector('#video')
const $buttonPlay: HTMLElement = document.querySelector('#button-play')
const $buttonMute: HTMLElement = document.querySelector('#button-mute')

const player = new MediaPlayer({
  element: $video, 
  plugins: [new AutoPlay(), new AutoPause(), new Ads()]
})

$buttonPlay.onclick = () => player.playPause()
$buttonMute.onclick = () => player.muteUnmute()
// if ('serviceWorker' in navigator) {
//   navigator.serviceWorker.register('/sw.js').catch(error => console.log(error))
// }