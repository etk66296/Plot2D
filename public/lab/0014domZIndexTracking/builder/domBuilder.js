class DomBuilder extends Builder {
  
  constructor(domObjectTracker) {

    super()

    this.domObjectTracker = domObjectTracker
  

  }

  createWindow(parent, cfg = {x: 100, y: 100, w: 320, h: 240}) {

    let winInstance = new DomWindow(parent)
    winInstance.init(cfg.x, cfg.y, cfg.w, cfg.h)
    winInstance.initStretchers()
    winInstance.initContentContainer()
    winInstance.initHeaderBar()
    winInstance.domObjectTracker = this.domObjectTracker
    this.domObjectTracker.add(winInstance)

    return winInstance
  

  }
  
}