class DomObjectTracker extends ObjectTracker {
  
  constructor() {

    super()

    this.zIndexCounter = 0

  }

  add(domObject) {

    super.add(domObject)

    domObject.domObjectTracker = this

    this.zIndexCounter += 1

    domObject.zIndex = this.zIndexCounter

  }
  
}