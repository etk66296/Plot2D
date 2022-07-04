class DomObjectTracker extends ObjectTracker {
  
  constructor() {

    super()

    this.zIndexCounter = 0

  }

  add(any) {

    super.add(any)
    any.domObjectTracker = this
    this.zIndexCounter++
    any.zIndex = this.zIndexCounter

  }

}