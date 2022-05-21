class DomSingleDirBorderScaler extends DomBorderScaler {
  
  constructor(parentElement = null, edgeType = 'N') {

    super(parentElement)

    this.edgeType = edgeType
   
  }

  init(x, y, w, h) {

    super.init(x, y, w, h)

    document.onmousemove = (e) => {

      e.preventDefault()
      if(this.mouseIsDown) {

        // this.containerElement.style.left =
        //   (e.clientX + this.clickPositionOffset.x) + 'px'
        // this.containerElement.style.top  =
        //   (e.clientY + this.clickPositionOffset.y) + 'px'

        
        if (this.edgeType === 'N') {
          
          let staticEdgeY = this.parentElement.offsetTop +
            this.parentElement.clientHeight

            console.log(Math.abs(e.clientY - this.clickPositionOffset.y))

            let newHeight = staticEdgeY - e.clientY
          
            this.parentElement.style.top =
              String(e.clientY) + 'px'
            this.parentElement.style.height = String(newHeight) + 'px'



        }

       
        //   String(e.clientY + this.clickPositionOffset.y) + 'px'

      }

    }
    
  }
  
}