class Primitive extends Plot {
  
  constructor() {

    super()

    this.displayElement = null

    this.x = 0
    this.y = 0

    
  }

  init(x, y) {

    super.init()

    this.displayElement = this.createHtmlElement('div')

    this.displayElement.style.position = 'absolute'
    // this.displayElement.style.overflow = 'scroll'
    this.displayElement.style.userSelect =  'none'

    this.setX(x)
    this.setY(y)

    this.setBackgroundColor()
    this.setBorder()

    this.displayElement.style.textAlign = 'center'

    this.displayElement.onmouseover = () => {
      this.displayElement.style.color = "#ffffff"
    }

    this.displayElement.onmouseout = () => {
      this.displayElement.style.color = "#000000"
    }

  }

  setX(x) {

    this.x = x
    if(this.persistsAsDomElem) {

      this.displayElement.style.left = String(x) + 'px'

    }


  }

  setY(y) {

    this.y = y
    if(this.persistsAsDomElem) {      

      this.displayElement.style.top = String(y) + 'px'

    }

  }

  setBackgroundColor(color = '#8a4182') {

    this.displayElement.style.backgroundColor = color

  }

  setBorder(border = '1px solid #ffffff') {

    this.displayElement.style.border = border

  }

  setText(text) {
    this.displayElement.innerText = text
  }

  setTextAlign(orientation) {

    this.displayElement.style.textAlign = orientation

  }

  setFontSize(sizeInPixel) {

    this.displayElement.style.fontSize = sizeInPixel

  }

  actAsReporterOnclick(reporter = null) {
    super.actAsReporter(reporter)

    this.displayElement.onclick = () => {
      this.codeHandler.publish()
    }
  }

  actAsPublicistOnclick(reporter = null) {
    super.actAsPublicist(reporter)

    this.displayElement.onclick = () => {
      
      this.codeHandler.publish()

    }
    
  }

  actAsTogglePublicistOnclick(reporter = null) {

    super.actAsTogglePublicist(reporter)

    this.displayElement.onclick = () => {
      
      this.codeHandler.toggle()

      this.displayElement.innerText = this.codeHandler.publicationText[this.codeHandler.publicationIndex]
      
    }
    
  }
  

  // setCallbackOnPublish(callback) {

  //   this.callbackOnPublish = callback
  //   this.displayElement.onclick = this.callbackOnPublish

  // }
  
}