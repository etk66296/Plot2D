class Rect extends Primitive {

  constructor(x, y, w, h) {

    super(x, y)

    this.w = w
    this.h = h

  }

  init() {

    super.init()

    this.setW(this.w)
    this.setH(this.h)
    this.displayElement.style.lineHeight = String(this.h) + 'px'
    this.displayElement.style.fontSize = String(this.h) + 'px'


  }

  setW(w) {

    this.w = w
    if(this.isADomElement) {      

      this.displayElement.style.width = String(w) + 'px'
      
    }

  }

  setH(h) {

    this.h = h
    if(this.isADomElement) {      

      this.displayElement.style.height = String(h) + 'px'
      
    }

  }

  
}