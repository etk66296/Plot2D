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

    this.defaultStretcherHeight = 8
    this.defaultStretcherWidth = 8

  }

  initStretchers() {

    this.topStretcher.init(
      0,
      this.defaultStretcherHeight * 0.5,
      this.w,
      this.defaultStretcherHeight
    )

    this.rightStretcher.init(
      this.w,
      0,
      this.defaultStretcherWidth * 0.5,
      this.h
    )

    this.bottomStretcher.init(
      0,
      this.h,
      this.w,
      this.defaultStretcherHeight * 0.5
    )

    this.leftStretcher.init(
      0,
      0,
      this.defaultStretcherWidth * 0.5,
      this.h
    )

    this.topRightStretcher.init(
      this.w + this.defaultStretcherWidth * 0.5,
      this.defaultStretcherHeight * (-0.5),
      this.defaultStretcherWidth,
      this.defaultStretcherHeight
    )

    this.bottomRightStretcher.init(
      this.w + this.defaultStretcherWidth * 0.5,
      this.h + this.defaultStretcherHeight * 0.5,
      this.defaultStretcherWidth,
      this.defaultStretcherHeight
    )

    this.bottomLeftStretcher.init(
      this.defaultStretcherWidth * (-0.5),
      this.h + this.defaultStretcherWidth * 0.5,
      this.defaultStretcherWidth,
      this.defaultStretcherHeight
    )

    this.topLeftStretcher.init(
      this.defaultStretcherWidth * (-0.5),
      this.defaultStretcherHeight * (-0.5),
      this.defaultStretcherWidth,
      this.defaultStretcherHeight
    )

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
    
  }
  
}