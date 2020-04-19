class AutoPlay {
  constructor() {
  }
  run(MediaPlayer) {
    if (!MediaPlayer.muted) {
      MediaPlayer.muted = true
    }

    MediaPlayer.playPause()
  }
}


export default AutoPlay