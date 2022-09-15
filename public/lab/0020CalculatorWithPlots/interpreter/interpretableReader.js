class InterpretableReader extends InterpretableHandler {
  
  constructor(clientElement) {

    super(clientElement)

    this.receivedPublications = ""
    this.reporters = []

    this.callbackOnReadPublication = () => {

    }

  }

  init() {

    super.init()
    
  }

  subscribeAtReporter(reporter) {

    this.reporters.push(reporter)

    reporter.interpretableHandler.registerSubscriber(this)

  }

  facePublication(publication) {

    this.receivedPublications += publication
    this.callbackOnReadPublication()
    
  }
  
}