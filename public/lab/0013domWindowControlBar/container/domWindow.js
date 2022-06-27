class DomWindow extends DomAbsolute {
  
  constructor(parentElement = null) {

    super(parentElement)

    this.bgC = 'rgb(255, 255, 255)'

    this.topStretcher = null
    this.rightStretcher = null
    this.bottomStretcher = null
    this.leftStretcher = null

    this.topRightStretcher = null
    this.bottomRightStretcher = null
    this.bottomLeftStretcher = null
    this.topLeftStretcher = null

    this.rigid = false

    this.contentContainerElement = null
   
    this.headerBar = null
    this.headerBarDefaultHeight = 30

    this.defaultStretcherHeight = 8
    this.defaultStretcherWidth = 8

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

      this.contentContainerElement.style.width = 
        this.containerElement.style.width

      this.contentContainerElement.style.height =
        String(this.containerElement.clientHeight -
          this.headerBarDefaultHeight) + 'px'

      this.headerBar.containerElement.style.width =
        this.containerElement.style.width

    }

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

    this.headerBar = new DomHeaderBar(
      this.containerElement
    )

    this.headerBar.init(
      0,
      0,
      this.containerElement.clientWidth,
      this.headerBarDefaultHeight
    )

    this.contentContainerElement.style.height = 
      String(this.containerElement.clientHeight -
        this.headerBarDefaultHeight) + 'px'
    this.contentContainerElement.style.top = 
      String(this.headerBarDefaultHeight) + 'px'
  }

  init(x, y, w, h) {

    super.init()

    this.setX(x)
    this.setY(y)
    this.setW(w)
    this.setH(h)

    this.containerElement.style.borderStyle = 'solid'
    this.containerElement.style.borderWidth = '1px'
    this.containerElement.style.borderColor = 'rgb(0, 0, 0)'
    

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

    this.contentContainerElement = this.createHtmlElement("div")
    this.contentContainerElement.style.overflow = 'scroll'
    this.contentContainerElement.style.width = 
      this.containerElement.style.width
    this.contentContainerElement.style.height =
      String(this.containerElement.clientHeight) + 'px'
      this.contentContainerElement.style.position = 'absolute'
    this.containerElement.appendChild(this.contentContainerElement)

    // this.headerBar = this.createHtmlElement("div")
    // this.containerElement.appendChild(this.headerBar)
    // this.headerBar.style.width = this.containerElement.style.width
    // this.headerBar.style.position = 'absolute'
    // this.headerBar.style.height = '28px'
    // this.headerBar.style.top = '0px'
    // this.headerBar.style.backgroundColor = '#00AA33'

    
  }

  appendChild(childObject) {

    this.contentContainerElement.appendChild(childObject)

  }
  
}