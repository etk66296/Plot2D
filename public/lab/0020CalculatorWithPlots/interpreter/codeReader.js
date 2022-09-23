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

  facePublication(publication, mode) {

    if(mode == CodeHandleMode.OVERWRITE) {
      
      this.receivedPublications = publication

    } else if (mode == CodeHandleMode.DELETE) {

      this.receivedPublications = ""

    } else if (mode == CodeHandleMode.EVALUATE) {

      this.receivedPublications = String(eval(publication))

    } else {

      this.receivedPublications += publication

    }
      
    this.callbackOnReadPublication()
    
  }
  
}