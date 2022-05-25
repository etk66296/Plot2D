class DomBorderScaler extends DomAbsolute {
  
  constructor(parentElement = null) {

    super(parentElement)

    this.mouseIsDown = false

    this.edgeType = ''

    this.clickPositionOffset = { x: 0, y: 0 }
   
  }

}