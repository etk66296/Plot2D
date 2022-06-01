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

    this.borderBottomElement = this.createHtmlElement('div')
    this.borderBottomElement.style.backgroundColor = '#000000'
    this.borderBottomElement.style.width = '5px'
    this.borderBottomElement.style.height = '5px'
    this.containerElement.appendChild(this.borderBottomElement)
    
  }
  
}