class StandardDisplay extends Display {
  
  constructor(parentElement) {

    super(parentElement)

  }

  init() {

    super.init()
    
    
  }

  appendChild(element) {

    this.containerElement.appendChild(element)

  }
  
}