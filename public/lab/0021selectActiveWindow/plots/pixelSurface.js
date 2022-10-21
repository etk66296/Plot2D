class PixelSurface extends Draft {
  
  constructor(htmlImageElement = null) {

    super()

    this.htmlImageElement = htmlImageElement
 
  }

  displayElement() {

    return this.htmlImageElement

  }
  
}