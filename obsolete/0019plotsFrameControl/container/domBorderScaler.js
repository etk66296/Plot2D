class DomBorderScaler extends DomAbsolute {
  
  constructor(parentElement = null) {

    super(parentElement)

    this.mouseIsDown = false

    this.edgeSide = ''

    this.clickPositionOffset = { x: 0, y: 0 }

    this.callbackOnMouseDown = (mouseDownEvent) => {

      mouseDownEvent.preventDefault()

      this.mouseIsDown = true
  
      this.clickPositionOffset.x =
        this.containerElement.offsetLeft - mouseDownEvent.clientX
  
      this.clickPositionOffset.y =
        this.containerElement.offsetTop - mouseDownEvent.clientY
  
  
    }
  
    this.callbackOnMouseUp = () => {
  
      this.mouseIsDown = false
      
    }
   
  }

  init(x, y, w, h) {

    super.init()

    this.setX(x)
    this.setY(y)
    this.setW(w)
    this.setH(h)

    this.containerElement.addEventListener(
      'mousedown',
      (event) => {
        this.callbackOnMouseDown(event)
      }
    )

    document.addEventListener(
      'mouseup',
      (event) => {
        this.callbackOnMouseUp(event)
      }
    )

    this.containerElement.style.backgroundColor = '#000000'
    this.containerElement.style.opacity = '0.2'

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