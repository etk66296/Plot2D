class FrameController extends Plot2DAny {
  
  constructor() {

    super()

    this.expectedFps = 60.0
    this.expectedFrameTimeMs = 1000 / this.expectedFps
    this.frameBeginTimeMs = 0.0
    this.frameEndTimeMs = 0.0
    this.actualframeEndTimeMs = 0.0
    this.frameDeltaMs = 0.0

    this.scenes = []

    this.stop = false
    
  }

  go() {

    if(!this.stop) {

      this.frameBeginTimeMs = performance.now()

      this.scenes.forEach((scene) => {

        scene.update()
        scene.draw()

      })

      this.frameEndTimeMs = performance.now()

      this.frameDeltaMs = this.frameEndTimeMs - this.frameBeginTimeMs

      if (this.frameDeltaMs < this.expectedFrameTimeMs) {

        window.setTimeout(() => {
          window.requestAnimationFrame(() => {})
        }, this.expectedFrameTimeMs - this.frameDeltaMs)

      }


    }

  }
  
}