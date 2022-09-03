class DomSingleDirBorderScaler extends DomBorderScaler {
  
  constructor(parentElement, edgeSide) {

    super(parentElement)

    if( edgeSide != 'N' &&
        edgeSide != 'E' &&
        edgeSide != 'S' &&
        edgeSide != 'W') {
      console.error(
        String(edgeSide) +
          " is not a valid edge side character (allowed: N, E, S, W)")
    }

    this.edgeSide = edgeSide

  }

  callbackOnMouseMove(mouseMoveEventObj) {

    mouseMoveEventObj.preventDefault()

    if(this.mouseIsDown) {
      if(this.edgeSide === 'N') {

        this.stretchParentFromTopBy(mouseMoveEventObj)

      } else if(this.edgeSide === 'S') {

        this.stretchParentFromBottomBy(mouseMoveEventObj)

      } else if(this.edgeSide === 'W') {

        this.stretchParentFromLeftBy(mouseMoveEventObj)

      } else if(this.edgeSide === 'E') {

        this.stretchParentFromRightBy(mouseMoveEventObj)

      }
    }


  }

  init(x, y, w, h) {

    super.init(x, y, w, h)

    if(this.edgeSide === 'N') {

      this.containerElement.style.cursor = 'n-resize'

    } else if(this.edgeSide === 'S') {

      this.containerElement.style.cursor = 's-resize'

    } else if(this.edgeSide === 'E') {

      this.containerElement.style.cursor = 'e-resize'

    } else if (this.edgeSide === 'W') {

      this.containerElement.style.cursor = 'w-resize'

    }

    document.addEventListener('mousemove', this.callbackOnMouseMove)

  }

  destroy() {
  
    if(this.isInitialized) {
      
      document.addEventListener('mousemove', this.callbackOnMouseMove)
      
    }
    
    super.destroy()
    
  }

  
}