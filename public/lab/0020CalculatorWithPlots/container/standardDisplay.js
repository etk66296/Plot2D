class StandardDisplay extends Display {
  
  constructor(parentElement) {

    super(parentElement)


  }

  init() {

    super.init()

    this.containerElement.style.overflow = 'hidden'

  }

  destroy() {

    if(this.isInitialized) {

      while (this.containerElement.firstChild) {

        this.containerElement.removeChild(this.containerElement.firstChild)

      }

    }

    super.destroy()

  }

  appendChild(plot) {

    this.containerElement.appendChild(plot.displayElement)

  }
  
}