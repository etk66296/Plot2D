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

    // this.borderBottomElement =
    //   new DomBorderScaler(this.containerElement)

    // this.borderBottomElement.init(
    //   0,
    //   h + this.defaultHeight * 0.5,
    //   w,
    //   this.defaultHeight
    // )

    this.borderTopElement =
      new DomSingleDirBorderScaler(this.containerElement, 'N')
    this.borderTopElement.init(
      0,
      this.defaultHeight * (-0.5),
      w,
      this.defaultHeight
    )

    
  }
  
}