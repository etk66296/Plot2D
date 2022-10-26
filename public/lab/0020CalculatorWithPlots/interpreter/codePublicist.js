class CodePublicist extends CodeHandler {
  
  constructor(clientElement) {

    super(clientElement)

    this.receivedPublications = ""
    this.publication = ""
    this.reporters = []
    this.subscribers = []

    this.delteWithNextPublication = false
    this.appendParamsMode = false
    this.appendParamsCount = 0

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

    } else if (mode == CodeHandleMode.DELETE) {

      this.receivedPublications = ""

      if(dutyIndex < (duty.length - 1)) {

        this.facePublication(publication, duty, dutyIndex += 1)

        return
        
      }

    } else if (mode == CodeHandleMode.EVALUATE) {

      if(this.appendParamsMode) {

        let numberOfOpenBrackets = (publication.match(/\(/g) || []).length

        if(numberOfOpenBrackets > 0) {

          for(let i = 0; i < numberOfOpenBrackets; i++) {
          
            publication += ')'

          }

        }

        this.appendParamsMode = false
        this.appendParamsCount = 0

      }

      this.receivedPublications = String(eval(publication))


    } else if (mode == CodeHandleMode.DELETE_WITH_NEXT_PUBLICATION) {

      this.delteWithNextPublication = true

    } else if(mode == CodeHandleMode.APPEND_AS_FUNCTION) {

      let numberOfOpenBrackets = (this.receivedPublications.match(/\(/g) || []).length

      if(numberOfOpenBrackets > 0) {

        for(let i = 0; i < numberOfOpenBrackets; i++) {
          
          this.receivedPublications += ')'

        }

      }
      
      this.receivedPublications = publication + this.receivedPublications + ')'
      

    } else if(mode == CodeHandleMode.APPEND_AS_FUNCTION_INJECT_PRESENT) {

      this.receivedPublications = publication.replace(/\.\+/, this.receivedPublications)
      this.appendParamsMode = true
      this.appendParamsCount += 1

    } else if(mode == CodeHandleMode.APPEND_AS_FUNCTION_EXPECT_PARAMS) {
      
      this.receivedPublications = publication + this.receivedPublications + ', '
      this.appendParamsMode = true
      

    }  else if(mode == CodeHandleMode.APPEND){
          
          this.receivedPublications += publication

    } else if(mode == CodeHandleMode.PUBLISH) {

        
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
      
      subscriber.plotObject.codeHandler.facePublication(publication, subscriber.duty)

    })

  }

  
}