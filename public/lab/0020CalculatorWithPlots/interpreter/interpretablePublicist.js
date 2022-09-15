class InterpretablePublicist extends InterpretableHandler {
  
  constructor(clientElement) {

    super(clientElement)

    this.receivedPublications = ""
    this.publication = ""
    this.reporters = []
    this.subscribers = []

    this.callbackOnReadPublication = () => {

    }

    this.callbackOnParticipate = () => {

    }

  }

  init() {

    super.init()
    
  }

  // subscribeAtReporter(reporter) {

  //   this.reporters.push(reporter)

  //   reporter.interpretableHandler.registerSubscriber(this)

  // }

  registerSubscriber() {

    for (let i = 0; i < arguments.length; i++){

      this.subscribers.push(arguments[i])

    }

  }

  facePublication(publication) {

    this.receivedPublications += publication
    this.callbackOnReadPublication()

  }

  publish() {

    this.callbackOnParticipate()

    this.publication = eval(this.receivedPublications)
    
    this.subscribers.forEach(subscriber => {

      subscriber.interpretableHandler.facePublication(this.publication)

    })

  }
  
}