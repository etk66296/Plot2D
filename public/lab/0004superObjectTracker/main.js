class Plot2DAny {

  constructor() {

    this.id = -1
    this.objectTracker = undefined

  }

}

class ObjectTracker extends Plot2DAny{

  constructor() {

    super()

    this.id = 0
    this.objectTracker = this

    this.objectIdCounter = 0
    this.objectList = [this]
    
  }

  add(any) {

    this.objectIdCounter += 1
    any.objectTracker = this
    any.id = this.objectIdCounter
    this.objectList.push(any)

  }

}

class Sprite extends Plot2DAny {
  constructor() {
    super()
  }
}

class Plot2D extends Plot2DAny{

  constructor() {

    super()
    this.objectTracker = undefined 

  }

  getSubscriptionList() {

    return this.objectTracker.objectList

  }

  init() {

    this.objectTracker = new ObjectTracker()
    this.subscribe(this)

  }

  subscribe(plot2DAny) {

    for(let i = 0; i < arguments.length; i++) {
      
      this.objectTracker.add(arguments[i])

    }

  }
}
