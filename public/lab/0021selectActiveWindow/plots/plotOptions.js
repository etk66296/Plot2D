class PlotOptions extends Plot2DAny {
  
  constructor(parentPlot) {

    super()

    this.displayElement = null

    this.parentPlot = parentPlot

    this.clickPositionOffset = { x: 0, y: 0 }

    this.mouseIsDown = false

    this.x = 0
    this.y = 0

    this.windowOffsetX = 0
    this.windowOffsetY = 0

    this.zIndex = 0


    this.radius = 8

    this.callbackOnMouseDown = (mouseDownEvent) => {

      mouseDownEvent.preventDefault()

      this.mouseIsDown = true

      this.clickPositionOffset.x =
        this.displayElement.offsetLeft - mouseDownEvent.clientX
      
      this.clickPositionOffset.y =
      this.parentPlot.displayElement.offsetTop - mouseDownEvent.clientY

      document.body.appendChild(this.parentPlot.displayElement)

      this.parentPlot.setX(this.x)
      this.parentPlot.setY(this.y)

      this.displayElement.style.zIndex = String(this.zIndex)
      
    }

    this.callbackOnMouseUp = (mouseUpEvent) => {

      mouseUpEvent.preventDefault()
  
      this.mouseIsDown = false

      // this.parentPlot.parentWindow =
      //   this.parentPlot.parentWindow.getWindowTheMouseIsHoveringOn()

      // console.log(this.parentPlot.parentWindow.display.members)
      
    }

    this.callbackOnMouseMove = (mouseMoveEvent) => {

      mouseMoveEvent.preventDefault()
  
      if (this.mouseIsDown) {

        // this.setX(mouseMoveEvent.clientX)
        // this.setY(mouseMoveEvent.clientY)

        // this.parentPlot.setX(mouseMoveEvent.clientX)
        // this.parentPlot.setY(mouseMoveEvent.clientY)

        // this.parentPlot.displayElement.style.left =
        //   String(mouseMoveEvent.clientX +
        //     this.clickPositionOffset.x) + 'px'

        // this.parentPlot.displayElement.style.top =
        //   String(mouseMoveEvent.clientY +
        //     this.clickPositionOffset.y) + 'px'

      }
      
    }
    
  }

  init() {

    super.init()

    this.displayElement = this.createHtmlElement('div')

    document.body.appendChild(this.displayElement)
      
    this.displayElement.style.position = 'absolute'
    this.displayElement.style.overflow = 'hidden'
    this.displayElement.style.userSelect =  'none'
    this.displayElement.style.height =  String(2 * this.radius) + 'px'
    this.displayElement.style.width =  String(2 * this.radius) + 'px'
    this.displayElement.style.backgroundColor = 'rgb(0, 255, 0)'
    this.displayElement.style.borderRadius =  '50%'
    this.displayElement.style.textAlign = 'center'
    this.displayElement.style.verticalAlign = 'middle'
    this.displayElement.style.lineHeight = String(2 * this.radius) + 'px'
    this.displayElement.style.fontWeight = 'bold'
    this.displayElement.innerText = '+'

    this.displayElement
      .addEventListener('mousedown', this.callbackOnMouseDown)

    document.addEventListener('mouseup', this.callbackOnMouseUp)

    document.addEventListener('mousemove', this.callbackOnMouseMove)

    this.zIndex = this.parentPlot.zIndex + 1

    this.setX(this.parentPlot.parentWindow.x + this.parentPlot.parentDisplay.containerElement.offsetLeft + this.parentPlot.x)
    this.setY(this.parentPlot.parentWindow.y + this.parentPlot.parentDisplay.containerElement.offsetTop + this.parentPlot.y)


  }

  setX(x) {

    this.x = x
    this.displayElement.style.left = String(x) + 'px'

  }

  setY(y) {

    this.y = y
    this.displayElement.style.top = String(y) + 'px'

  }


}