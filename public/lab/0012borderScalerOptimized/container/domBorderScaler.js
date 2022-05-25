class DomBorderScaler extends DomAbsolute {
  
  constructor(parentElement = null, edgeType = '') {

    super(parentElement)

    this.bgC = 'rgb(0, 0, 0)'

    this.mouseIsDown = false
    this.clickPositionOffset = { x: 0, y: 0 }

    this.edgeType = edgeType
   
  }

  init(x, y, w, h) {

    super.init()

    this.setX(x)
    this.setY(y)
    this.setW(w)
    this.setH(h)

    this.containerElement.style.backgroundColor = this.bgC
    this.containerElement.style.opacity = '0.0'
    this.containerElement.style.position = 'absolute'

    this.containerElement.addEventListener('mousedown', (e) => {

      this.mouseIsDown = true

      this.clickPositionOffset.x =
        this.containerElement.offsetLeft - e.clientX
      this.clickPositionOffset.y =
        this.containerElement.offsetTop - e.clientY

    })

    document.addEventListener('mouseup', (e) => {

      this.mouseIsDown = false

    })

  }

  
  stretchTopEdgeWithMouseEvent(e) {

    let staticEdgeY = this.parentElement.offsetTop +
      this.parentElement.clientHeight

    let newHeight = staticEdgeY - e.clientY
          
    this.parentElement.style.top = String(e.clientY) + 'px'
    this.parentElement.style.height = String(newHeight) + 'px'

  }

  stretchRightEdgeWithMouseEvent(e) {

    this.containerElement.style.left  =
      (e.clientX + this.clickPositionOffset.x) + 'px'

    this.clickPositionOffset.x

    this.parentElement.style.width =
      String(e.clientX + this.clickPositionOffset.x) + 'px'

  }

  stretchBottomEdgeWithMouseEvent(e) {
    
    this.containerElement.style.top  =
      (e.clientY + this.clickPositionOffset.y) + 'px'

    this.clickPositionOffset.y

    this.parentElement.style.height =
      String(e.clientY + this.clickPositionOffset.y) + 'px'

  }

  stretchLeftEdgeWithMouseEvent(e) {

    let staticEdgeX = this.parentElement.offsetLeft +
    this.parentElement.clientWidth

    let newWidth = staticEdgeX - e.clientX
  
    this.parentElement.style.left = String(e.clientX) + 'px'
    this.parentElement.style.width = String(newWidth) + 'px'

  }

}