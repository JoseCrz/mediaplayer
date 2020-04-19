import MediaPlayer from '../MediaPlayer'

class AutoPause {
  private threshold: number
  player: MediaPlayer

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

  private intersectionHandler (entries: IntersectionObserverEntry[]) {
    const entry = entries[0]
    const isVisible = entry.intersectionRatio >= this.threshold

    if (isVisible) {
      this.player.media.play()
    } else {
      this.player.media.pause()
    }
  }

  private visibilityHandler () {
    const isVisible = document.visibilityState === 'visible'
    if (!isVisible) {
      this.player.media.pause()
    }
  }
}

export default AutoPause