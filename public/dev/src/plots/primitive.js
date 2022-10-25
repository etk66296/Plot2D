class Primitive extends Plot {
  
  constructor() {

    super()
    
  }

  init(x, y) {

    super.init()

    this.displayElement = this.createHtmlElement('div')

    this.displayElement.style.position = 'absolute'
    this.displayElement.style.overflow = 'scroll'
    this.displayElement.style.userSelect =  'none'

    this.setX(x)
    this.setY(y)

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

  // actAsReporterOnclick(reporter = null) {
  //   super.actAsReporter(reporter)

  //   this.displayElement.onclick = () => {
  //     this.codeHandler.publish()
  //   }
  // }

  // actAsPublicistOnclick(reporter = null) {
  //   super.actAsPublicist(reporter)

  //   this.displayElement.onclick = () => {
      
  //     this.codeHandler.publish()

  //   }
    
  // }

  // actAsTogglePublicistOnclick(reporter = null) {

  //   super.actAsTogglePublicist(reporter)

  //   this.displayElement.onclick = () => {
      
  //     this.codeHandler.toggle()

  //     this.displayElement.innerText = this.codeHandler.publicationText[this.codeHandler.publicationIndex]
      
  //   }
    
  // }
  

  // // setCallbackOnPublish(callback) {

  // //   this.callbackOnPublish = callback
  // //   this.displayElement.onclick = this.callbackOnPublish

  // // }
  
}