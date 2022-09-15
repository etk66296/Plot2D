class InterpretableReporter extends InterpretableHandler {
  
  constructor(clientElement) {

    super(clientElement)

    this.publication = ""

    this.subscribers = []

    this.callbackOnPublish = () => {

    }

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

    this.callbackOnPublish()

    this.subscribers.forEach(subscriber => {

      subscriber.interpretableHandler.facePublication(this.publication)

    })

  }

}