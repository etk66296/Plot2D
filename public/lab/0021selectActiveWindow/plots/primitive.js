class Primitive extends Plot {
  
  constructor(x, y) {

    super()

    this.x = x
    this.y = y
    
  }

  init() {

    super.init()

    this.displayElement = this.createHtmlElement('div')

    this.displayElement.style.position = 'absolute'
    this.displayElement.style.overflow = 'scroll'
    this.displayElement.style.userSelect =  'none'

    this.setX(this.x)
    this.setY(this.y)

  }

  setX(x) {

    this.x = x

    if(this.isADomElement) {

      this.displayElement.style.left = String(x) + 'px'

    }

  }

  setY(y) {

    this.y = y
    
    if(this.isADomElement) {

      this.displayElement.style.top = String(y) + 'px'

    }

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
  
}