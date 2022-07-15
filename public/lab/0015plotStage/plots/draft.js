class Draft extends Plot {
  
  constructor(domCompatible) {

    super()

    this.domCompatible = domCompatible
    this.domCompatible.style.position = "absolute"


  }

  getDomCompatible() {

    return this.domCompatible

  }

  update() {

  }

  draw() {

  }
  
}