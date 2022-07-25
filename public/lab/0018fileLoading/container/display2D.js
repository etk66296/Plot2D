class Display2D extends PerformanceDisplay {
  
  constructor(parentElement) {

    super(parentElement)

  }

  init() {

    super.init()

    this.context = this.containerElement.getContext('2d')

  }

  appendChild(element) {


    if(element.constructor.name === 'PerformanceStage') {

      element.members.forEach((stageMember) => {

        this.context.drawImage(stageMember.asCnavasElement(), 0, 0)

      })

    }

    
  }
  
}