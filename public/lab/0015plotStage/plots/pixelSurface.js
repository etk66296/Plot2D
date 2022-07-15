class PixelSurface extends Draft {
  
  constructor(image) {

    super(image)

    this.wouldLikeToBeDrawn = false

    this.pos = { x: 0, y: 0 }

    this.v = { x: 1, y: 1 }

  }

  update() {    

    if (this.pos.x > (this.renderSurface.clientWidth - 85)) {
      this.pos.x = this.renderSurface.clientWidth - 85
      this.v.x = -1
    }

    if (this.pos.y > (this.renderSurface.clientHeight - 54)) {
      this.pos.y = this.renderSurface.clientHeight - 54
      this.v.y = -1
    }

    if (this.pos.x < 0) {
      this.pos.x = 0
      this.v.x = 1
    }

    if (this.pos.y < 0) {
      this.pos.y = 0
      this.v.y = 1
    }

    this.pos.x += this.v.x
    this.pos.y += this.v.y

    // console.log(this.pos.x, this.pos.y, this.renderSurface.clientWidth)

    this.domCompatible.style.left = String(this.pos.x) + 'px'
    this.domCompatible.style.top = String(this.pos.y) + 'px'

  }

  draw() {

  }
  
}