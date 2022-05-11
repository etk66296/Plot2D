class DomAbsolute extends DomContainer {
  
  constructor(parentElement = null) {

    super(parentElement)

    this.posX = 0
    this.posY = 0
   
  }

  init() {

    super.init()
    this.containerElement.style.position = 'absolute'
    
  }
  
}