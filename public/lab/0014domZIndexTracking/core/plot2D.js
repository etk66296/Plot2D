class Plot2D extends Plot2DAny {
  
  constructor() {

    super()

    this.domObjectTracker = null
    this.plotObjectTracker = null
    this.frameCtrl = null

  }

  init() {

    this.domObjectTracker = new DomObjectTracker()
    this.plotObjectTracker = new PlotObjectTracker()
    this.frameCtrl = new FrameController()
    
  }  
  
}