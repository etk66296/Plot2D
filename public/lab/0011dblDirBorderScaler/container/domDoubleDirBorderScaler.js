class DomDoubleDirBorderScaler extends DomBorderScaler {
  
  constructor(parentElement = null, edgeType = 'NW') {

    super(parentElement)

    this.edgeType = edgeType
   
   
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


          let staticEdgeY = this.parentElement.offsetTop +
            this.parentElement.clientHeight

          let newHeight = staticEdgeY - e.clientY
          
          this.parentElement.style.top = String(e.clientY) + 'px'
          this.parentElement.style.height = String(newHeight) + 'px'


          this.containerElement.style.left  =
          (e.clientX + this.clickPositionOffset.x) + 'px'

          this.clickPositionOffset.x

          this.parentElement.style.width =
            String(e.clientX + this.clickPositionOffset.x) + 'px'


       
        } else if(this.edgeType === 'SE') {

          this.containerElement.style.top  =
          (e.clientY + this.clickPositionOffset.y) + 'px'

          this.clickPositionOffset.y

          this.parentElement.style.height =
            String(e.clientY + this.clickPositionOffset.y) + 'px'

          this.containerElement.style.left  =
          (e.clientX + this.clickPositionOffset.x) + 'px'

          this.clickPositionOffset.x

          this.parentElement.style.width =
            String(e.clientX + this.clickPositionOffset.x) + 'px'


        } else if(this.edgeType === 'SW') {

          this.containerElement.style.top  =
          (e.clientY + this.clickPositionOffset.y) + 'px'

          this.clickPositionOffset.y

          this.parentElement.style.height =
            String(e.clientY + this.clickPositionOffset.y) + 'px'

          let staticEdgeX = this.parentElement.offsetLeft +
            this.parentElement.clientWidth

          let newWidth = staticEdgeX - e.clientX
          
          this.parentElement.style.left = String(e.clientX) + 'px'
          this.parentElement.style.width = String(newWidth) + 'px'

      
        } else if (this.edgeType === 'NW') {

          let staticEdgeY = this.parentElement.offsetTop +
            this.parentElement.clientHeight

          let newHeight = staticEdgeY - e.clientY
          
          this.parentElement.style.top = String(e.clientY) + 'px'
          this.parentElement.style.height = String(newHeight) + 'px'

          let staticEdgeX = this.parentElement.offsetLeft +
            this.parentElement.clientWidth

          let newWidth = staticEdgeX - e.clientX
          
          this.parentElement.style.left = String(e.clientX) + 'px'
          this.parentElement.style.width = String(newWidth) + 'px'

        }

      }
    
    })
    
  }
  
}