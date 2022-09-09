class StandardDisplay extends Display {
  
  constructor(parentElement) {

    super(parentElement)


  }

  init() {

    super.init()

    this.containerElement.style.overflow = 'scroll'

  }

  destroy() {

    if(this.isInitialized) {

      while (this.containerElement.firstChild) {

        this.containerElement.removeChild(this.containerElement.firstChild)

      }

    }

    super.destroy()

  }

  appendChild(plotStage) {

    if(plotStage.constructor.name === "DomStage") {

      plotStage.members.forEach(member => {

        this.containerElement.appendChild(member.displayElement())

      })

    }
    
  }
  
}