class DomDoubleDirBorderScaler extends DomBorderScaler {
  
  constructor(parentElement, edgeSide) {

    super(parentElement)

    if( edgeSide != 'NE' &&
        edgeSide != 'SE' &&
        edgeSide != 'SW' &&
        edgeSide != 'NW') {
      console.error(
        String(edgeSide) +
          " is not a valid edge side string " +
          "(allowed: NE, SE, SW, NW)")
    }

    this.edgeSide = edgeSide

    this.callbackOnMouseMove = (mouseMoveEventObj) => {

      mouseMoveEventObj.preventDefault()
  
      
      if(this.mouseIsDown) {
  
        if(this.edgeSide === 'NE') {
  
          this.stretchParentFromTopBy(mouseMoveEventObj)
          this.stretchParentFromRightBy(mouseMoveEventObj)
  
        } else if(this.edgeSide === 'SE') {
  
          this.stretchParentFromBottomBy(mouseMoveEventObj)
          this.stretchParentFromRightBy(mouseMoveEventObj)
  
        } else if(this.edgeSide === 'SW') {
  
          this.stretchParentFromBottomBy(mouseMoveEventObj)
          this.stretchParentFromLeftBy(mouseMoveEventObj)
  
        } else if(this.edgeSide === 'NW') {
  
          this.stretchParentFromTopBy(mouseMoveEventObj)
          this.stretchParentFromLeftBy(mouseMoveEventObj)
  
        }
  
      }
  
    }
  
   
  }

  
  init(x, y, w, h) {

    super.init(x, y, w, h)

    if(this.edgeSide === 'NE') {

      this.containerElement.style.cursor = 'ne-resize'

    } else if(this.edgeSide === 'SE') {

      this.containerElement.style.cursor = 'se-resize'

    } else if(this.edgeSide === 'SW') {

      this.containerElement.style.cursor = 'sw-resize'

    } else if(this.edgeSide === 'NW') {

      this.containerElement.style.cursor = 'nw-resize'

    }

    document.addEventListener('mousemove', this.callbackOnMouseMove)

  }

  destroy() {

    
    if(this.isInitialized) {
      
      document.removeEventListener('mousemove', this.callbackOnMouseMove)
      
    }
    
    super.destroy()
    
  }



}