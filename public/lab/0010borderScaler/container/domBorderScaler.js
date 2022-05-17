class DomBorderScaler extends DomAbsolute {
  
  constructor(parentElement = null) {

    super(parentElement)

    this.bgC = 'rgb(0, 0, 0)'

    this.mouseIsDown = false
    this.clickPositionOffset = { x: 0, y: 0 }
   
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
    this.containerElement.style.cursor = 's-resize'

    this.containerElement.onmousedown = (e) => {
     
      this.mouseIsDown = true

      this.clickPositionOffset.x =
        this.containerElement.offsetLeft - e.clientX
      this.clickPositionOffset.y =
        this.containerElement.offsetTop - e.clientY

    }

    document.onmouseup = (e) => {

      this.mouseIsDown = false

    }

    document.onmousemove = (e) => {

      e.preventDefault()
      if(this.mouseIsDown) {

        this.containerElement.style.left =
          (e.clientX + this.clickPositionOffset.x) + 'px'
        this.containerElement.style.top  =
          (e.clientY + this.clickPositionOffset.y) + 'px'

        
        this.parentElement.style.height = String(e.clientY + this.clickPositionOffset.y) + 'px'

      }

    }

    

    
  }
  
}