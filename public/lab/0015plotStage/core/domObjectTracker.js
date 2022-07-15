class DomObjectTracker extends ObjectTracker {
  
  constructor() {

    super()

    this.zIndexCounter = 0

  }

  add(domObject) {
    
    domObject.domObjectTracker = this

    super.add(domObject)

    this.zIndexCounter += 1

    domObject.zIndex = this.zIndexCounter

  }
  
}