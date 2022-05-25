class DomDoubleDirBorderScaler extends DomBorderScaler {
  
  constructor(parentElement = null, edgeType = 'NW') {

    super(parentElement, edgeType)
   
   
  }

  init(x, y, w, h) {

    super.init(x, y, w, h)

    this.containerElement.style.backgroundColor = 'rgb(123, 12, 234'
    this.containerElement.style.opacity = '1.0'
    
    if (this.edgeType === 'NE') {
      
      this.containerElement.style.cursor = 'ne-resize'

    } else if (this.edgeType === 'SE') {

      this.containerElement.style.cursor = 'se-resize'

    } else if (this.edgeType === 'SW') {

      this.containerElement.style.cursor = 'sw-resize'

    } else if (this.edgeType === 'NW') {

      this.containerElement.style.cursor = 'nw-resize'
      
    }

    document.addEventListener('mousemove', (e) => {

      e.preventDefault()

      if(this.mouseIsDown) {

        if (this.edgeType === 'NE') {

          this.stretchTopEdgeWithMouseEvent(e)
          this.stretchRightEdgeWithMouseEvent(e)

        } else if(this.edgeType === 'SE') {

          this.stretchBottomEdgeWithMouseEvent(e)
          this.stretchRightEdgeWithMouseEvent(e)

        } else if(this.edgeType === 'SW') {

          this.stretchBottomEdgeWithMouseEvent(e)
          this.stretchLeftEdgeWithMouseEvent(e)
      
        } else if (this.edgeType === 'NW') {

          this.stretchTopEdgeWithMouseEvent(e)
          this.stretchLeftEdgeWithMouseEvent(e)

        }

      }
    
    })
    
  }
  
}