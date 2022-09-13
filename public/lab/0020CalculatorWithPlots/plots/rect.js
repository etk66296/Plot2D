class Rect extends Primitive {

  constructor() {

    super()

    this.w = 0
    this.h = 0

  }

  init(x, y, w, h) {

    super.init(x, y)

    this.setW(w)
    this.setH(h)
    this.displayElement.style.lineHeight = String(h) + 'px'
    this.displayElement.style.fontSize = String(h) + 'px'


  }

  setW(w) {

    this.w = w
    if(this.persistsAsDomElem) {      

      this.displayElement.style.width = String(w) + 'px'
      
    }

  }

  setH(h) {

    this.h = h
    if(this.persistsAsDomElem) {      

      this.displayElement.style.height = String(h) + 'px'
      
    }

  }

  
}