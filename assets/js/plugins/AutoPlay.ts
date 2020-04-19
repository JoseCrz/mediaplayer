import MediaPlayer from '../MediaPlayer'

class AutoPlay {
  constructor() {
  }
  run(player: MediaPlayer) {
    if (!player.media.muted) {
      player.media.muted = true
    }

    player.playPause()
  }
}


export default AutoPlay