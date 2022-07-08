class DomBuilder extends Builder {
  
  constructor() {

    super()

    this.productionLine

  }


  produceWindowOn(parentDomElement) {

    this.productionLine = new DomWindow(parentDomElement)

    return this

  }

  and() {

    return this.productionLine

  }

  

}