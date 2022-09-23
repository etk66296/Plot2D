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

  facePublication(publication, mode) {

    if(mode == CodeHandleMode.OVERWRITE) {
      
      this.receivedPublications = publication

    } else if (mode == CodeHandleMode.DELETE) {

      this.receivedPublications = ""

    } else if (mode == CodeHandleMode.EVALUATE) {

      try {
        
        this.receivedPublications = String(eval(publication))

      } catch {

        this.receivedPublications = "ERROR"

      }


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
   
    let publication = this.receivedPublications + this.publication
    
    this.subscribers.forEach(subscriber => {

      subscriber.plotObject.codeHandler.facePublication(publication, subscriber.mode)

    })

  }

  
}