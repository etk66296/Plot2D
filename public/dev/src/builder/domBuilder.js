class DomBuilder extends Builder {
  
  constructor() {

    super()

    this.productionLine

  }


  produceWindow(parentDomElement) {

    this.productionLine = new DomWindow(parentDomElement)

    return this.productionLine

  }

  

}