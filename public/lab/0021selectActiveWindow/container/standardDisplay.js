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

      plotStage.id = this.stageIdCounter
      this.stageIdCounter++
      this.members.push(plotStage)

      plotStage.members.forEach(member => {

        member.appendTo(this)

      })

    }
    
  }
  
}