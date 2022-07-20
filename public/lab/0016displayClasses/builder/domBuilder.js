class DomBuilder extends Builder {
  
  constructor(domObjectTracker) {

    super()

    this.productionLine
    this.domObjectTracker = domObjectTracker

  }


  produceWindowOn(parentDomElement) {

    this.productionLine = new DomWindow(parentDomElement)
    this.domObjectTracker.add(this.productionLine)

    return this

  }

  and() {

    return this.productionLine

  }

  

}