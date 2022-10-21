class Display extends DomContainer {
  
  constructor(parentElement) {

    super(parentElement)

  }

  init() {

    super.init()

    this.containerElement.style.position = 'absolute'

    this.containerElement.style.width =
      this.parentElement.style.width

    this.containerElement.style.height =
      this.parentElement.style.height

  }

  destroy() {

    super.destroy()

  }

  alignToParentSize(offsetFromTop = 0) {

    this.containerElement.style.width =
      this.parentElement.style.width

    this.containerElement.style.top = String(offsetFromTop) + 'px'

    this.containerElement.style.height =
      String(this.parentElement.clientHeight - 
          offsetFromTop) + 'px'

  }
  
}