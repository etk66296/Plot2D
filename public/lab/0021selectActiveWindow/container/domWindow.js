class DomWindow extends DomAbsolute {
  
  constructor(parentElement = null) {

    super(parentElement)

    this.domObjectTracker = null

    this.bgC = 'rgb(255, 255, 255)'
    this.activeWindow = false
    this.mouseIsHovering = false
    this.highlightColor = 'rgb(255, 72, 128)'
    this.noneHighlightColor = 'rgb(0, 0, 0)'

    this.topStretcher = null
    this.rightStretcher = null
    this.bottomStretcher = null
    this.leftStretcher = null

    this.topRightStretcher = null
    this.bottomRightStretcher = null
    this.bottomLeftStretcher = null
    this.topLeftStretcher = null

    this.headerBar = null
    this.controlPanel = null

    this.displayType = 'standard'
    this.display = null
    // this.contentContainerElement = null

    this.rigid = false

    this.defaultStretcherHeight = 8
    this.defaultStretcherWidth = 8

    this.callbackOnMouseOver = () => {

      if(!this.activeWindow) {

        this.containerElement.style.borderStyle = 'solid'
        this.containerElement.style.borderWidth = '2px'
        this.containerElement.style.borderColor = 'rgb(200, 60, 250)'
        this.mouseIsHovering = true

      }

    }

    this.callbackOnMouseOut = () => {

      if(!this.activeWindow) {

        this.containerElement.style.borderStyle = 'none'
        this.mouseIsHovering = false

      }

    }

    this.callbackOnMouseUp = () => {

      this.topStretcher.setW(this.containerElement.clientWidth)
      
      this.topRightStretcher.setX(this.containerElement.clientWidth)
  
      this.rightStretcher.setX(this.containerElement.clientWidth)
      this.rightStretcher.setH(this.containerElement.clientHeight)
      
      this.bottomRightStretcher
        .setX(this.containerElement.clientWidth)
      this.bottomRightStretcher
        .setY(this.containerElement.clientHeight)
  
      this.bottomStretcher.setY(this.containerElement.clientHeight)
      this.bottomStretcher.setW(this.containerElement.clientWidth)
  
      this.leftStretcher.setH(this.containerElement.clientHeight)
  
      this.bottomLeftStretcher
        .setY(this.containerElement.clientHeight)

      this.display.alignToParentSize(this.headerBar.defaultHeight)

    }

    this.callbackOnMouseDown = () => {

      let newZIndex = 0

      this.domObjectTracker.any.forEach((otherDomWindow) => {

        if(otherDomWindow.zIndex > newZIndex) {

          newZIndex = otherDomWindow.zIndex
          otherDomWindow.containerElement.style.borderColor = 
            otherDomWindow.noneHighlightColor
          otherDomWindow.activeWindow = false

        }
        
      })

      this.zIndex = newZIndex + 1
      this.containerElement.style.borderColor = this.highlightColor
      this.activeWindow = true

      this.setZIndex(this.zIndex)
    }

  }

  initDisplay() {
  
    this.display.init()

  }

  getWindowTheMouseIsHoveringOn() {

    this.domObjectTracker.any.forEach((domWindow) => {

      if(domWindow instanceof DomWindow) {

        return domWindow

      }

    })

    return null

  }

  initStretchers() {

    this.topStretcher.init(
      0,
      this.defaultStretcherHeight * (-1.0),
      this.w,
      this.defaultStretcherHeight
    )

    this.rightStretcher.init(
      this.w,
      0,
      this.defaultStretcherWidth,
      this.h
    )

    this.bottomStretcher.init(
      0,
      this.h,
      this.w,
      this.defaultStretcherHeight
    )

    this.leftStretcher.init(
      this.defaultStretcherWidth * (-1.0),
      0,
      this.defaultStretcherWidth,
      this.h
    )

    this.topRightStretcher.init(
      this.w,
      this.defaultStretcherHeight * (-1.0),
      this.defaultStretcherWidth,
      this.defaultStretcherHeight
    )

    this.bottomRightStretcher.init(
      this.w,
      this.h,
      this.defaultStretcherWidth,
      this.defaultStretcherHeight
    )

    this.bottomLeftStretcher.init(
      this.defaultStretcherWidth * (-1.0),
      this.h,
      this.defaultStretcherWidth,
      this.defaultStretcherHeight
    )

    this.topLeftStretcher.init(
      this.defaultStretcherWidth * (-1.0),
      this.defaultStretcherHeight * (-1.0),
      this.defaultStretcherWidth,
      this.defaultStretcherHeight
    )

    document.addEventListener('mouseup', this.callbackOnMouseUp)

  }

  initHeaderBar() {

    this.headerBar.init()
    this.headerBar.initMovability()

    this.display.alignToParentSize(this.headerBar.defaultHeight)

  }

  initControlPanel() {

    this.controlPanel.init()

  }

  init(x, y, w, h) {

    super.init()

    this.setX(x)
    this.setY(y)
    this.setW(w)
    this.setH(h)

    this.containerElement.style.borderStyle = 'solid'
    this.containerElement.style.borderWidth = '1px'
    this.containerElement.style.borderColor = this.noneHighlightColor
    this.containerElement.style.backgroundColor = 'rgb(0, 0, 0'

    this.topStretcher = new DomSingleDirBorderScaler(
      this.containerElement,
      'N'
    )

    this.rightStretcher = new DomSingleDirBorderScaler(
      this.containerElement,
      'E'
    )

    this.bottomStretcher = new DomSingleDirBorderScaler(
      this.containerElement,
      'S'
    )

    this.leftStretcher = new DomSingleDirBorderScaler(
      this.containerElement,
      'W'
    )

    this.topRightStretcher = new DomDoubleDirBorderScaler(
      this.containerElement,
      'NE'
    )

    this.bottomRightStretcher = new DomDoubleDirBorderScaler(
      this.containerElement,
      'SE'
    )

    this.bottomLeftStretcher = new DomDoubleDirBorderScaler(
      this.containerElement,
      'SW'
    )

    this.topLeftStretcher = new DomDoubleDirBorderScaler(
      this.containerElement,
      'NW'
    )

    this.headerBar = new DomHeaderBar(this.containerElement)
    this.controlPanel = new DomWindowControlPanel(this.containerElement, this)

    if(this.displayType === 'standard') {

      this.display = new StandardDisplay(this.containerElement)


    } else if (this.displayType === 'performance2D') {

      this.display = new Display2D(this.containerElement)

    }

    this.containerElement
      .addEventListener('mousedown', this.callbackOnMouseDown)

    this.containerElement.onmouseover = this.callbackOnMouseOver
    this.containerElement.onmouseout = this.callbackOnMouseOut

  }

  destroy() {

    if(this.isInitialized) {

      this.containerElement
        .removeEventListener('mousedown', this.callbackOnMouseDown)

        if(this.stretchersAreInitialized) {

          document.removeEventListener('mouseup', this.callbackOnMouseUp)
          this.stretchersAreInitialized = false

          this.topStretcher.destroy()
          this.rightStretcher.destroy()
          this.bottomStretcher.destroy()
          this.leftStretcher.destroy()

          this.topRightStretcher.destroy()
          this.bottomRightStretcher.destroy()
          this.bottomLeftStretcher.destroy()
          this.topLeftStretcher.destroy()

        }

        this.headerBar.destroy()
        this.display.destroy()
        this.controlPanel.destroy()

    }



    super.destroy()

  }



  assembleItWith(cfg = {}) {


    if (!('pos' in cfg)) {

      cfg.pos = { x: 100, y: 100 }
      
    }

    if (!('dim' in cfg)) {

      cfg.dim = { w: 320, h: 240 }
      
    }

    if ('displayType' in cfg) {

      this.displayType = cfg.displayType 
      
    }

    this.init(cfg.pos.x, cfg.pos.y, cfg.dim.w, cfg.dim.h)

    if (!('isStretchable' in cfg)) {

      cfg.isStretchable = true
      
    }

    if(cfg.isStretchable) {
      
      this.initStretchers()

    }

    this.initDisplay()


    if (!('headerBar' in cfg)) {

      cfg.headerBar = true
      
    }

    if(cfg.headerBar) {
      
      this.initHeaderBar()

    }

    if (!('controlPanel' in cfg)) {

      cfg.controlPanel = true
      
    }

    if(cfg.controlPanel) {
      
      this.initControlPanel()

    }


    return this
    
  }

  appendStage(stage) {

    this.display.appendChild(stage)

    stage.parentWindow = this

    stage.members.forEach((actor) => {

      actor.parentWindow = this

    }) 

  }

  hasTheMember(any) {

    this.display.members.forEach((member) => {

      if(member.id == any.id) {

        return true

      }

    })

    return false

  }
  
}