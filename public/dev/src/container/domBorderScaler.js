class DomBorderScaler extends DomAbsolute {
  
  constructor(parentElement = null) {

    super(parentElement)

    this.mouseIsDown = false

    this.edgeType = ''

    this.clickPositionOffset = { x: 0, y: 0 }
   
  }

  init(x, y, w, h) {

    super.init()

    this.setX(x)
    this.setY(y)
    this.setW(w)
    this.setH(h)
  }

  stretchParentFromTopBy(event) {

    let staticEdgeY = this.parentElement.offsetTop +
      this.parentElement.clientHeight

    let newHeight = staticEdgeY - event.clientY

    this.parentElement.style.top = String(event.clientY) + 'px'
    this.parentElement.style.height = String(newHeight) + 'px'
    
  }

}