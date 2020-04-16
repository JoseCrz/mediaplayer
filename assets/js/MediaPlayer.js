function MediaPlayer (config = {}) {
  this.media = config.element
}

MediaPlayer.prototype.play = function () {
  this.media.paused ? this.media.play() : this.media.pause()
}

export default MediaPlayer