class CodeTogglePublicist extends CodePublicist {
  
  constructor(clientElement) {

    super(clientElement)

    this.receivedPublications = ""
    this.publication = ""
    this.reporters = []
    this.subscribers = []

    this.evaluate = false

    this.appendAsFunction = false
    this.overwriteOnPublicate = false
    this.foward = false

    // this.symbolToEvaluate = "="

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

  facePublication(publication, overwrite = false, appendAsFunction = false) {

    if(overwrite) {

      this.receivedPublications = ""

    }


    if(appendAsFunction) {

      this.receivedPublications = publication + '(' + this.receivedPublications + ')'

    } else { // as operator

      this.receivedPublications += publication
      
    }

      
    this.callbackOnReadPublication()
   
    if(this.forward) {
        
      this.publish()

    }

  }

  publish() {

    this.callbackOnParticipate()
   

    if(this.evaluate) {
      
      this.publication = String(eval(this.receivedPublications))

      
    } else {
      
      this.publication = this.receivedPublications
      
    }

   
    
    this.subscribers.forEach(subscriber => {
 
      subscriber.codeHandler.facePublication(this.publication, this.overwriteOnPublicate, this.appendAsFunction)

    })

    // this.receivedPublications = ""

  }

  
}