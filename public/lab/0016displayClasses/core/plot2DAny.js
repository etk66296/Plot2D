class Plot2DAny {
  
  constructor() {

    this.id = -1
    
    this.tracker = null

  }

  createHtmlElement(elementName) {

    return document.createElementNS(
      "http://www.w3.org/1999/xhtml",
      elementName
    )
    
  }
  
}