const CodeHandleMode = {
  
  APPEND: 0,
  OVERWRITE: 1,
  DELETE: 2,
  EVALUATE: 3

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