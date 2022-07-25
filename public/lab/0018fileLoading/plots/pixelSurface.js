class PixelSurface extends Draft {
  
  constructor(image) {

    super()

    this.image = image
 
  }

  asDomElement() {

    return this.image

  }

  asCnavasElement() {

    return this.image
    
  }
  
}