class Plot2D extends Plot2DAny {
  
  constructor() {

    super()

    this.objectTracker = null
    this.frameCtrl = null

  }

  init() {
    this.objectTracker = new ObjectTracker()
    this.frameCtrl = new FrameController()
  }
  
}