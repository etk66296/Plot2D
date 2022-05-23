class DomWindow extends DomAbsolute {
  
  constructor(parentElement = null) {

    super(parentElement)

    this.bgC = 'rgb(255, 255, 255)'

    this.borderTopElement = null
    this.borderRightElement = null
    this.borderBottomElement = null
    this.borderLeftElement = null

    this.angleTopRightElement = null
    this.angleBottomRightElement = null
    this.angleBottomLeftElement = null
    this.angleTopLeftElement = null

    this.defaultHeight = 8
    this.defaultWidth = 8
   
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


    this.borderTopElement =
      new DomSingleDirBorderScaler(this.containerElement, 'N')
    this.borderTopElement.init(
      0,
      this.defaultHeight * (-0.5),
      w,
      this.defaultHeight
    )

    this.borderRightElement =
      new DomSingleDirBorderScaler(this.containerElement, 'E')
    this.borderRightElement.init(
      w,
      0,
      this.defaultWidth,
      h
    )

    this.borderBottomElement =
      new DomSingleDirBorderScaler(this.containerElement, 'S')
    this.borderBottomElement.init(
      0,
      h - this.defaultHeight * 0.5,
      w,
      this.defaultHeight
    )

    this.borderLeftElement =
      new DomSingleDirBorderScaler(this.containerElement, 'W')
    this.borderLeftElement.init(
      0,
      0,
      this.defaultWidth,
      h
    )
    

    document.addEventListener('mouseup', (e) => {

      this.borderBottomElement.setY(
        this.containerElement.clientHeight - this.defaultHeight * 0.5
      )

      this.borderRightElement.setX(
        this.containerElement.clientWidth - this.defaultWidth * 0.5
      )

      this.borderTopElement.setW(this.containerElement.clientWidth)
      this.borderRightElement.setH(this.containerElement.clientHeight)
      this.borderBottomElement.setW(this.containerElement.clientWidth)
      this.borderLeftElement.setH(this.containerElement.clientHeight)
    
    })

    
  }
  
}