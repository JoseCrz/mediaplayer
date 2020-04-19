class AutoPause {
  constructor() {
    this.threshold = .25
    this.intersectionHandler = this.intersectionHandler.bind(this)
  }
  run (player) {
    this.player = player
    const observer = new IntersectionObserver(this.intersectionHandler, {
      threshold: this.threshold
    })

    try {
      observer.observe(player.media)

    } catch (error) {
      console.log(error)
    }
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
}

export default AutoPause