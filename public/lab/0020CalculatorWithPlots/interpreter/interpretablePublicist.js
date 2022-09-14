class InterpretablePublicist extends InterpretableHandler {
  
  constructor() {

    super()

    this.see = ""
    this.reporters = []

  }

  init() {

    super.init()
    
  }

  subscribeAtReporter(reporter) {

    this.reporters.push(reporter)

    reporter.interpretableHandler.registerSubscriber(this)

  }
  
}