class DomSingleDirBorderScaler extends DomBorderScaler {
  
  constructor(parentElement = null, edgeType) {

    super(parentElement, edgeType)
   
  }

  init(x, y, w, h) {

    super.init(x, y, w, h)

    if (this.edgeType === 'N') {
      
      this.containerElement.style.cursor = 'n-resize'

    } else if (this.edgeType === 'E') {

      this.containerElement.style.cursor = 'e-resize'

    } else if (this.edgeType === 'S') {

      this.containerElement.style.cursor = 's-resize'

    } else if (this.edgeType === 'W') {

      this.containerElement.style.cursor = 'w-resize'
      
    }

    document.addEventListener('mousemove', (e) => {

      e.preventDefault()

      if(this.mouseIsDown) {

        if (this.edgeType === 'N') {

          this.stretchTopEdgeWithMouseEvent(e)

        } else if(this.edgeType === 'W') {

          this.stretchLeftEdgeWithMouseEvent(e)

        } else if(this.edgeType === 'S') {

          this.stretchBottomEdgeWithMouseEvent(e)

        } else if (this.edgeType === 'E') {

          this.stretchRightEdgeWithMouseEvent(e)

        }

      }

    })
    
  }
  
}