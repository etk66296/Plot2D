class Any {
  constructor() {

    this.trackerId = -1

  }

  createElementNS(elementName) {

    return document.createElementNS("http://www.w3.org/1999/xhtml", elementName)

  }



}