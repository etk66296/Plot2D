class DomBorderScaler extends DomAbsolute {
  
  constructor(parentElement = null) {

    super(parentElement)

    this.mouseIsDown = false

    this.edgeSide = ''

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

  stretchParentFromBottomBy(event) {

    this.parentElement.style.height =
      String(event.clientY + this.clickPositionOffset.y) + 'px'

  }

  stretchParentFromLeftBy(event) {

    let staticEdgeX = this.parentElement.offsetLeft +
      this.parentElement.clientWidth

    let newWidth = staticEdgeX - event.clientX
  
    this.parentElement.style.left = String(event.clientX) + 'px'
    this.parentElement.style.width = String(newWidth) + 'px'

  }

  stretchParentFromRightBy(event) {

    this.parentElement.style.width =
      String(event.clientX + this.clickPositionOffset.x) + 'px'

  }

}