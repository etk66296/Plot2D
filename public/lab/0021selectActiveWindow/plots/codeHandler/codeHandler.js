const CodeHandleMode = {
  
  APPEND: 0,
  APPEND_AS_FUNCTION_INJECT_PRESENT: 1,
  APPEND_AS_FUNCTION: 2,
  APPEND_AS_FUNCTION_EXPECT_PARAMS: 3,
  OVERWRITE: 4,
  DELETE_WITH_NEXT_PUBLICATION: 5,
  DELETE: 6,
  EVALUATE: 7,
  PUBLISH: 8

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