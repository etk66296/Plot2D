class Display extends DomContainer {
  
  constructor(parentElement) {

    super(parentElement)

  }

  init() {

    super.init()
    
    this.containerElement.style.position = 'absolute'
    this.containerElement.style.overflow = 'scroll'
    this.containerElement.style.color = 'rgb(255, 255, 255)'
    this.containerElement.style.width = 
      this.parentElement.style.width
    this.containerElement.style.height =
      this.parentElement.style.height

  }

  resize(headerBarHeight = 0) {
    this.containerElement.style.width = 
      this.parentElement.style.width

    this.containerElement.style.height =
      String(this.parentElement.clientHeight -
        headerBarHeight) + 'px'
  }
  
}