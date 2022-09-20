class CodePublicist extends CodeHandler {
  
  constructor(clientElement) {

    super(clientElement)

    this.receivedPublications = ""
    this.publication = ""
    this.reporters = []
    this.subscribers = []

    this.foward = false

    this.callbackOnReadPublication = () => {

    }

    this.callbackOnParticipate = () => {

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

  facePublication(publication, overwrite) {

    if(overwrite) {
      
      this.receivedPublications = publication

    } else {

      this.receivedPublications += publication

    }
 
    this.callbackOnReadPublication()
   
    if(this.forward) {
        
      this.publish()

    }

  }

  publish() {

    this.callbackOnParticipate()
   
    this.publication = this.receivedPublications
    
    this.subscribers.forEach(subscriber => {
 
      subscriber.plotObject.codeHandler.facePublication(this.publication, subscriber.overwrite)

    })

  }

  
}