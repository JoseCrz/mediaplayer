class MediaPlayer {
  constructor(config = {}) {
    this.media = config.element
    this.plugins = config.plugins || []
    this._initPlugins()
  }
  _initPlugins () {
    this.plugins.forEach(plugin => plugin.run(this))
  }

  playPause () {
    this.media.paused ? this.media.play() : this.media.pause()
  }

  mute () {
    this.media.muted = true
  }
  
  unmute () {
    this.media.muted = false
  }
}

export default MediaPlayer