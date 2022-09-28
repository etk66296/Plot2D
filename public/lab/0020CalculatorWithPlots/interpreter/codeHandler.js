const CodeHandleMode = {
  
  APPEND: 0,
  APPEND_AS_FUNCTION: 1,
  OVERWRITE: 2,
  DELETE_WITH_NEXT_PUBLICATION: 3,
  DELETE: 4,
  EVALUATE: 5,
  PUBLISH: 6

}

class CodeHandler extends Plot2DAny {
  
  constructor(clientElement) {

    super()

    this.clientElement = clientElement

  }

  init() {

    super.init()
    
  }
  
}