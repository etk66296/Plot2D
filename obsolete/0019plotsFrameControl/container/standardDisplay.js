class StandardDisplay extends Display {
  
  constructor(parentElement) {

    super(parentElement)


  }

  init() {

    super.init()

    this.containerElement.style.overflow = 'scroll'

  }

  appendChild(plotStage) {

    if(plotStage.constructor.name === "DomStage") {

      plotStage.members.forEach(member => {

        this.containerElement.appendChild(member.displayElement())

      })

    }
    
  }
  
}