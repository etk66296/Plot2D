class Display2D extends PerformanceDisplay {
  
  constructor(parentElement) {

    super(parentElement)

  }

  init() {

    super.init()

    this.context = this.containerElement.getContext('2d')

  }

  appendChild(plotStage) {

    if(plotStage.constructor.name === "PerformanceStage") {

      plotStage.members.forEach(member => {

        this.context.drawImage(member.displayElement(), 0, 0)

      })

    }

  }

  destroy() {

    if(this.isInitialized) {

    
    }

    super.destroy()

  }
  
}