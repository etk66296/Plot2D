class CodeTogglePublicist extends CodePublicist {
  
  constructor(clientElement) {

    super(clientElement)

    this.publication = []
    this.publicationText = []
    this.publicationIndex = 0

  }

  init() {

    super.init()

    this.publicationIndex = 0
    
  }

  toggle() {

    this.publicationIndex += 1

    if(this.publicationIndex > (this.publication.length - 1)) {

      this.publicationIndex = 0

    }
    
  }

  publish() {

    this.callbackBeforeParticipate()
   
    
    this.subscribers.forEach((subscriber, index) => {
      
      let publication = this.receivedPublications + this.publication[this.publicationIndex]

      subscriber.plotObject.codeHandler.facePublication(publication, subscriber.duty)

    })

  }

  
}