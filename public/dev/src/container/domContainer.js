class DomContainer extends Container {
  
  constructor(parentElement = null) {

    super()

    this.parentElement = parentElement
    this.containerElement = null

  }

  init() {

    this.containerElement = this.createHtmlElement('div')

    this.parentElement.appendChild(this.containerElement)

  }
  
}