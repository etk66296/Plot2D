class InterpretableReporter extends InterpretableHandler {
  
  constructor(clientElement) {

    super(clientElement)

    this.publication = ""

    this.subscribers = []

  }

  init() {

    super.init()
    
  }

  registerSubscriber() {

    for (let i = 0; i < arguments.length; i++){

      this.subscribers.push(arguments[i])

    }

  }

  publish() {

    this.subscribers.forEach(subscriber => {

      subscriber.interpretableHandler.facePublication(this.publication)

    })

  }

}