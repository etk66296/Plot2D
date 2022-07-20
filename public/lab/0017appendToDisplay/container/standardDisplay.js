class StandardDisplay extends Display {
  
  constructor(parentElement) {

    super(parentElement)


  }

  init() {

    super.init()

    this.containerElement.style.overflow = 'scroll'

  }

  appendChild(element) {

    this.containerElement.appendChild(element)
    
  }
  
}