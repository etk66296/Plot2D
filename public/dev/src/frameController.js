class FrameController extends Plot2DAny {
  
  constructor() {

    super()

    this.expectedFps = 60.0
    this.expectedFrameTimeMs = 1000 / this.expectedFps
    this.frameStartTimeMs = 0.0
    this.frameStopTimeMs = 0.0
    this.actualFrameStopTimeMs = 0.0
    this.frameDeltaMs = 0.0
    
  }

  go() {
    
  }
  
}