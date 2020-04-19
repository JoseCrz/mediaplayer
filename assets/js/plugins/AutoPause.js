class AutoPause {
  constructor() {
    this.threshold = .50
    this.intersectionHandler = this.intersectionHandler.bind(this)
    this.visibilityHandler = this.visibilityHandler.bind(this)
  }
  run (player) {
    this.player = player
    const observer = new IntersectionObserver(this.intersectionHandler, {
      threshold: this.threshold
    })

    observer.observe(player.media)
    document.addEventListener('visibilitychange', this.visibilityHandler)
  }

  intersectionHandler (entries) {
    const entry = entries[0]

    const isVisible = entry.intersectionRatio >= this.threshold

    if (isVisible) {
      this.player.media.play()
    } else {
      this.player.media.pause()
    }
  }

  visibilityHandler () {
    const isVisible = document.visibilityState === 'visible'
    if (!isVisible) {
      this.player.media.pause()
    }
  }
}

export default AutoPause