class Display extends DomContainer {
  
  constructor(parentElement) {

    super(parentElement)

  }

  init() {

    super.init()

    this.containerElement.style.position = 'absolute'
    this.containerElement.style.overflow = 'scroll'

  }
  
}