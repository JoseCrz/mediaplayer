class MediaPlayer {
  constructor(config = {}) {
    this.media = config.element
    this.plugins = config.plugins || []
    this._initPlugins()
  }
  _initPlugins () {
    const _this = this
    const player = {
      playPause: () => this.playPause(),
      media: this.media,
      get muted() {
        return _this.media.muted
      },
      set muted(value) {
        _this.media.muted = value
      }
    }

    this.plugins.forEach(plugin => plugin.run(player))
  }

  playPause () {
    this.media.paused ? this.media.play() : this.media.pause()
  }

  muteUnmute () {
    this.media.muted ? this.unmute() : this.mute()
  }

  mute () {
    this.media.muted = true
  }
  
  unmute () {
    this.media.muted = false
  }
}

export default MediaPlayer