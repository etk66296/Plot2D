class CodeReader extends CodeHandler {
  
  constructor(clientElement) {

    super(clientElement)

    this.receivedPublications = ""
    this.reporters = []
    this.deleteWithNextPublication = false

    this.callbackAfterReadingAllPublications = () => {}

  }

  init() {

    super.init()
    
  }

  shiftDeleteCommandToTheDutyFront(duty) {

    duty.unshift(CodeHandleMode.DELETE)

    return duty

  }

  facePublication(publication, duty, dutyIndex = 0) {

    if(this.deleteWithNextPublication) {

      duty = this.shiftDeleteCommandToTheDutyFront(duty)
      this.deleteWithNextPublication = false

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

      this.receivedPublications = String(eval(publication))

    } else if (mode == CodeHandleMode.DELETE_WITH_NEXT_PUBLICATION) {

      this.deleteWithNextPublication = true

    } else {

      if(mode == CodeHandleMode.APPEND_AS_FUNCTION) {

        this.receivedPublications = publication + this.receivedPublications + ')'

      } else if(mode > -1) {
        
        this.receivedPublications += publication

      }

    }

    if(dutyIndex < (duty.length - 1)) {

      this.facePublication(this.receivedPublications, duty, dutyIndex += 1)
      
    } else {

      this.callbackAfterReadingAllPublications()

    }

  }
  
}