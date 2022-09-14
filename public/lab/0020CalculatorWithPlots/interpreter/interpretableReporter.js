class InterpretableReporter extends InterpretableHandler {
  
  constructor() {

    super()

    this.publication = ""

    this.subscribers = []

  }

  init() {

    super.init()
    
  }

  registerSubscriber(client) {

    this.subscribers.push(client)

  }

}