class AutoPlay {
  constructor() {
  }
  run(MediaPlayer) {
    debugger
    if (!MediaPlayer.muted) {
      MediaPlayer.muted = true
    }

    MediaPlayer.playPause()
  }
}


export default AutoPlay