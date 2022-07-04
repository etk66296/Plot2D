class DomContainer extends Container {
  
  constructor(parentElement = null) {

    super()

    this.parentElement = parentElement
    this.containerElement = null

    this.zIndex = 0
    this.updateZIndex = false

  }

  init() {

    this.containerElement = this.createHtmlElement('div')

    this.parentElement.appendChild(this.containerElement)


  }

  setZIndex(index) {
    this.zIndex = index
    this.containerElement.style.zIndex = String(index)
    console.log(this.id, this.containerElement.style.zIndex)
  }
  
}