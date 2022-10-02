const CodeHandleMode = {
  
  APPEND: 0,
  APPEND_AS_FUNCTION: 1,
  APPEND_AS_FUNCTION_EXPECT_PARAM: 2,
  OVERWRITE: 3,
  DELETE_WITH_NEXT_PUBLICATION: 4,
  DELETE: 5,
  EVALUATE: 6,
  PUBLISH: 7

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