class PerformanceDisplay extends Display {
  
  constructor(parentElement) {

    super(parentElement)

    this.elementType = 'canvas'

    this.context = null


  }

  init() {

    super.init()

  }

  destroy() {

    if(this.isInitialized) {

   
    }

    super.destroy()

  }
  
}