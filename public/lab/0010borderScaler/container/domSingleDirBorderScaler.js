class DomSingleDirBorderScaler extends DomBorderScaler {
  
  constructor(parentElement = null, edgeType = 'N') {

    super(parentElement)

    this.edgeType = edgeType
   
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

        // this.containerElement.style.left =
        //   (e.clientX + this.clickPositionOffset.x) + 'px'

       

        if (this.edgeType === 'N') {

          let staticEdgeY = this.parentElement.offsetTop +
            this.parentElement.clientHeight

          let newHeight = staticEdgeY - e.clientY
          
          this.parentElement.style.top = String(e.clientY) + 'px'
          this.parentElement.style.height = String(newHeight) + 'px'

        } else if(this.edgeType === 'W') {

          let staticEdgeX = this.parentElement.offsetLeft +
            this.parentElement.clientWidth

          let newWidth = staticEdgeX - e.clientX
          
          this.parentElement.style.left = String(e.clientX) + 'px'
          this.parentElement.style.width = String(newWidth) + 'px'

        } else if(this.edgeType === 'S') {

          this.containerElement.style.top  =
          (e.clientY + this.clickPositionOffset.y) + 'px'

          this.clickPositionOffset.y

          this.parentElement.style.height =
            String(e.clientY + this.clickPositionOffset.y) + 'px'

        } else if (this.edgeType === 'E') {

          
          this.containerElement.style.left  =
          (e.clientX + this.clickPositionOffset.x) + 'px'

          this.clickPositionOffset.x

          this.parentElement.style.width =
            String(e.clientX + this.clickPositionOffset.x) + 'px'


        }

      }

    })
    
  }
  
}