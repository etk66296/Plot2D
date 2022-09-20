class CodeToggleReporter extends CodeReporter {
  
  constructor(clientElement) {

    super(clientElement)

    this.publication = ""

    this.subscribers = []

    this.appendAsFunction = false
    this.overwriteOnPublicate = false

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
      
      subscriber.interpretableHandler.facePublication(this.publication, this.overwriteOnPublicate, this.appendAsFunction)

    })

  }

}