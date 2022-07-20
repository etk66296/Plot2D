class DomContainer extends Container {
  
  constructor(parentElement = null) {

    super()

    this.parentElement = parentElement
    this.containerElement = null

    this.elementType = 'div'

    this.zIndex = 0

  }

  init() {

    this.containerElement = this.createHtmlElement(this.elementType)

    this.parentElement.appendChild(this.containerElement)


  }

  setZIndex(index) {

    this.zIndex = index

    this.containerElement.style.zIndex = String(index)
    
  }
  
}