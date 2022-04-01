class FrameController extends Plot2DAny {
  
  constructor() {

    super()

    this.expectedFps = 60.0
    this.expectedFrameTimeMs = 1000 / this.expectedFps
    this.frameBeginTimeMs = 0.0
    this.frameEndTimeMs = 0.0
    this.actualframeEndTimeMs = 0.0
    this.frameDeltaMs = 0.0

    this.stages = []

    this.stop = false
    this.stepsLeftToStop = -1
    this.stuntGoRecursion = false

    
  }

  go() {

    if(!this.stop) {

      this.frameBeginTimeMs = performance.now()

      this.stages.forEach((scene) => {

        scene.update()
        scene.draw()

      })

      this.frameEndTimeMs = performance.now()

      this.frameDeltaMs = this.frameEndTimeMs - this.frameBeginTimeMs

      if(this.stepsLeftToStop == 0) {
        this.stuntGoRecursion = true
      }
      if (this.stepsLeftToStop > -1) {
        this.stepsLeftToStop -= 1
      }

      if (this.stuntGoRecursion) {

        this.stuntGoRecursion = false

      } else if (this.frameDeltaMs < this.expectedFrameTimeMs) {

        window.setTimeout(() => {

          this.actualframeEndTimeMs = performance.now()

          window.requestAnimationFrame(this.go.bind(this))
        }, this.expectedFrameTimeMs - this.frameDeltaMs)

      } else {

        this.actualframeEndTimeMs = performance.now()

        window.requestAnimationFrame(this.go.bind(this))

      }


    }

  }
  
}