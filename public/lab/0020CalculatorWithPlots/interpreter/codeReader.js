class CodeReader extends CodeHandler {
  
  constructor(clientElement) {

    super(clientElement)

    this.receivedPublications = ""
    this.reporters = []
    this.delteWithNextPublication = false

    this.callbackOnReadPublication = () => {

    }

  }

  init() {

    super.init()
    
  }

  facePublication(publication, duty, dutyIndex = 0) {

    if(this.delteWithNextPublication) {
      duty.unshift(CodeHandleMode.DELETE)
      this.delteWithNextPublication = false
    }

    console.log("<< received publication")

    let mode = duty[dutyIndex]

    if(mode == CodeHandleMode.OVERWRITE) {
      
      this.receivedPublications = publication

      console.log("overwrite", this.receivedPublications)

    } else if (mode == CodeHandleMode.DELETE) {

      this.receivedPublications = ""

      console.log("delete", this.receivedPublications)

      if(dutyIndex < (duty.length - 1)) {

        this.facePublication(publication, duty, dutyIndex += 1)

        return
        
      }

    } else if (mode == CodeHandleMode.EVALUATE) {

      this.receivedPublications = String(eval(publication))

      console.log("evaluate", this.receivedPublications)

    } else if (mode == CodeHandleMode.DELETE_WITH_NEXT_PUBLICATION) {

      this.delteWithNextPublication = true

      console.log("overwrite_with_next_publication", this.receivedPublications)

    } else {

      if(mode == CodeHandleMode.APPEND_AS_FUNCTION) {

        this.receivedPublications = publication + '(' + this.receivedPublications + ')'

        console.log("append_as_function", this.receivedPublications)

      } else {
        
        this.receivedPublications += publication

        console.log("append", this.receivedPublications)

      }

    }

    if(dutyIndex < (duty.length - 1)) {

      this.facePublication(this.receivedPublications, duty, dutyIndex += 1)
      
    } else {

      this.callbackOnReadPublication()

    }

  }
  
}