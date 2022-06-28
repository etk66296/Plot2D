class DomHeaderBar extends DomAbsolute {
  
  constructor(parentElement = null) {

    super(parentElement)

    this.mouseIsDown = false

    this.clickPositionOffset = { x: 0, y: 0 }

    this.callbackOnMouseDown = (mouseDownEvent) => {

      mouseDownEvent.preventDefault()

      this.mouseIsDown = true

      this.clickPositionOffset.x =
        this.parentElement.offsetLeft - mouseDownEvent.clientX
      
      this.clickPositionOffset.y =
        this.parentElement.offsetTop - mouseDownEvent.clientY
      
    }

    this.callbackOnMouseUp = (mouseUpEvent) => {

      mouseUpEvent.preventDefault()
  
      this.mouseIsDown = false
      
    }

    this.callbackOnMouseMove = (mouseMoveEvent) => {
  
      if (this.mouseIsDown) {

        this.parentElement.style.left =
          String(mouseMoveEvent.clientX +
            this.clickPositionOffset.x) + 'px'

        this.parentElement.style.top =
          String(mouseMoveEvent.clientY +
            this.clickPositionOffset.y) + 'px'

      }
      
    }

   
  }

  initMovability() {

    this.containerElement
      .addEventListener('mousedown', this.callbackOnMouseDown)

    document.addEventListener('mouseup', this.callbackOnMouseUp)

    document.addEventListener('mousemove', this.callbackOnMouseMove)

  }

  init(x, y, w, h) {

    super.init()

    this.setX(x)
    this.setY(y)
    this.setW(w)
    this.setH(h)

    this.containerElement.style.backgroundColor = '#440044'
    this.containerElement.style.height = '30px'

  }

}