class Display2D extends PerformanceDisplay {
  
  constructor(parentElement) {

    super(parentElement)

  }

  init() {

    super.init()

    this.context = this.containerElement.getContext('2d')

  }
  
}