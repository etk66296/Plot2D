class DomWindow extends DomAbsolute {
  
  constructor(parentElement = null) {

    super(parentElement)

    this.bgC = 'rgb(255, 255, 255)'

    this.topStretcherElem = null
    this.rightStretcherElem = null
    this.bottomStretcherElem = null
    this.leftStretcherElem = null

    this.topRightStretcherElem = null
    this.bottomRightStretcherElem = null
    this.bottomLeftStretcherElem = null
    this.topLeftStretcherElem = null

    this.defaultStretcherHeight = 8
    this.defaultStretcherWidth = 8
   
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


    this.topStretcherElem =
      new DomSingleDirBorderScaler(this.containerElement, 'N')
    this.topStretcherElem.init(
      0,
      this.defaultStretcherHeight * (-0.5),
      w,
      this.defaultStretcherHeight
    )

    this.rightStretcherElem =
      new DomSingleDirBorderScaler(this.containerElement, 'E')
    this.rightStretcherElem.init(
      w,
      0,
      this.defaultStretcherWidth,
      h
    )

    this.bottomStretcherElem =
      new DomSingleDirBorderScaler(this.containerElement, 'S')
    this.bottomStretcherElem.init(
      0,
      h - this.defaultStretcherHeight * 0.5,
      w,
      this.defaultStretcherHeight
    )

    this.leftStretcherElem =
      new DomSingleDirBorderScaler(this.containerElement, 'W')
    this.leftStretcherElem.init(
      0,
      0,
      this.defaultStretcherWidth,
      h
    )


    this.topRightStretcherElem =
      new DomDoubleDirBorderScaler(this.containerElement, 'NE')
    this.topRightStretcherElem.init(
      w + this.defaultStretcherWidth * (-0.5),
      this.defaultStretcherHeight * (-0.5),
      this.defaultStretcherWidth,
      this.defaultStretcherHeight
    )

    this.bottomRightStretcherElem =
      new DomDoubleDirBorderScaler(this.containerElement, 'SE')
    this.bottomRightStretcherElem.init(
      w + this.defaultStretcherWidth * (-0.5),
      h + this.defaultStretcherHeight * (-0.5),
      this.defaultStretcherWidth,
      this.defaultStretcherHeight
    )

    this.bottomLeftStretcherElem =
      new DomDoubleDirBorderScaler(this.containerElement, 'SW')
    this.bottomLeftStretcherElem.init(
      this.defaultStretcherWidth * (-0.5),
      h + this.defaultStretcherHeight * (-0.5),
      this.defaultStretcherWidth,
      this.defaultStretcherHeight
    )

    this.topLeftStretcherElem =
      new DomDoubleDirBorderScaler(this.containerElement, 'NW')
    this.topLeftStretcherElem.init(
      this.defaultStretcherWidth * (-0.5),
      this.defaultStretcherHeight * (-0.5),
      this.defaultStretcherWidth,
      this.defaultStretcherHeight
    )
    

    document.addEventListener('mouseup', (e) => {

      this.bottomStretcherElem.setY(
        this.containerElement.clientHeight - this.defaultStretcherHeight * 0.5
      )

      this.rightStretcherElem.setX(
        this.containerElement.clientWidth - this.defaultStretcherWidth * 0.5
      )

      this.topStretcherElem.setW(this.containerElement.clientWidth)
      this.rightStretcherElem.setH(this.containerElement.clientHeight)
      this.bottomStretcherElem.setW(this.containerElement.clientWidth)
      this.leftStretcherElem.setH(this.containerElement.clientHeight)


      this.topRightStretcherElem.setX(
        this.containerElement.clientWidth + this.defaultStretcherWidth * (-0.5)
      )
      this.topRightStretcherElem.setY(this.defaultStretcherHeight * (-0.5))
      this.bottomRightStretcherElem.setX(
        this.containerElement.clientWidth + this.defaultStretcherWidth * (-0.5)
      )
      this.bottomRightStretcherElem.setY(
        this.containerElement.clientHeight +
          this.defaultStretcherHeight * (-0.5)
      )
      this.bottomLeftStretcherElem.setX(this.defaultStretcherWidth * (-0.5))
      this.bottomLeftStretcherElem.setY(
        this.containerElement.clientHeight +
          this.defaultStretcherHeight * (-0.5)
      )
      this.topLeftStretcherElem.setX(this.defaultStretcherWidth * (-0.5))
      this.topLeftStretcherElem.setY(this.defaultStretcherHeight * (-0.5))
    
    })

    
  }
  
}