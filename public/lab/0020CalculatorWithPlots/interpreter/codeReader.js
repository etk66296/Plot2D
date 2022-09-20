class CodeReader extends CodeHandler {
  
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

  facePublication(publication, overwrite) {

    if(overwrite) {
      
      this.receivedPublications = publication

    } else {

      this.receivedPublications += publication

    }
      
    this.callbackOnReadPublication()
    
  }
  
}