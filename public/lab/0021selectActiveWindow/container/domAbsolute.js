class DomAbsolute extends DomContainer {
  
  constructor(parentElement = null) {

    super(parentElement)

    this.x = 0
    this.y = 0
    this.w = 0
    this.h = 0
   
  }

  init() {

    super.init()
    this.containerElement.style.position = 'absolute'
    this.containerElement.style.width = String(this.w) + 'px'
    this.containerElement.style.height = String(this.h) + 'px'
    
  }

  destroy() {

    super.destroy()

  }

  setX(x) {

    this.x = x
    this.containerElement.style.left = String(this.x) + 'px'

  }

  setY(y) {

    this.y = y
    this.containerElement.style.top = String(this.y) + 'px'
    
  }

  setW(w) {

    this.w = w
    this.containerElement.style.width = String(this.w) + 'px'

  }

  setH(h) {

    this.h = h
    this.containerElement.style.height = String(this.h) + 'px'

  }
  
}