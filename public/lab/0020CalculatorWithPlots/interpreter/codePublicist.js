class CodePublicist extends CodeHandler {
  
  constructor(clientElement) {

    super(clientElement)

    this.receivedPublications = ""
    this.publication = ""
    this.reporters = []
    this.subscribers = []

    this.delteWithNextPublication = false

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

  facePublication(publication, duty, dutyIndex = 0) {

    if(this.delteWithNextPublication) {
      duty.unshift(CodeHandleMode.DELETE)
      this.delteWithNextPublication = false
    }

    let mode = duty[dutyIndex]

    if(mode == CodeHandleMode.OVERWRITE) {
      
      this.receivedPublications = publication

      console.log("overwrite", this.receivedPublications)

    } else if (mode == CodeHandleMode.DELETE) {

      this.receivedPublications = ""

      console.log("delete", this.receivedPublications, "publication" , publication)

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

    } else if(mode == CodeHandleMode.APPEND_AS_FUNCTION) {

      let numberOfOpenBrackets = (this.receivedPublications.match(/\(/g) || []).length

      console.log("number of brackets", this.receivedPublications, numberOfOpenBrackets)

      if(numberOfOpenBrackets > 0) {

        for(let i = 0; i < numberOfOpenBrackets; i++) {
          
          this.receivedPublications += ')'

        }

      }
      
      this.receivedPublications = publication + this.receivedPublications + ')'
      
      console.log("append_as_function", this.receivedPublications)

    } else if(mode == CodeHandleMode.APPEND){
        
        this.receivedPublications += publication

        console.log("append", this.receivedPublications)

    } else if(mode == CodeHandleMode.PUBLISH) {

      console.log("mode == CodeHandleMode.PUBLISH")
        
      this.publish()

    }

    if(dutyIndex < (duty.length - 1)) {

      this.facePublication(this.receivedPublications, duty, dutyIndex += 1)
      
    } else {

      this.callbackOnReadPublication()
      
    }

  }

  publish() {

    this.callbackOnParticipate()
   
    
    this.subscribers.forEach(subscriber => {
      
      let publication = this.receivedPublications + this.publication
      
      console.log("-->", publication, "<--")
      subscriber.plotObject.codeHandler.facePublication(publication, subscriber.duty)

    })

  }

  
}