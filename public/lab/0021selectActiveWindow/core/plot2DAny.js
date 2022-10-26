class Plot2DAny {
  
  constructor() {

    this.id = -1
    
    this.tracker = null

    this.isInitialized = false

  }

  init() {

    this.isInitialized = true

  }

  destroy() {

    this.isInitialized = false

  }

  createHtmlElement(elementName) {

    return document.createElementNS(
      "http://www.w3.org/1999/xhtml",
      elementName
    )
    
  }
  
}