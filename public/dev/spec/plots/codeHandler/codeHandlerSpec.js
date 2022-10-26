describe("CodeHandler", function() {
  var myCodeHandler

  beforeEach(function() {

    myCodeHandler = new CodeHandler()

  })

  it("should extend Plot2DAny", function() {

    expect(myCodeHandler.__proto__.__proto__.constructor.name)
      .toEqual('Plot2DAny')

  })

  it("should call the super class constructor", function() {

    spyOn(Plot2DAny, 'constructor').and.callThrough()
    CodeHandler.constructor(null)
    expect(Plot2DAny.constructor).toHaveBeenCalled()

  })

  it(`should accept an parameter and pass it to an attribute
    clientElement`, function() {

      let clientElement = {}
      let tmpCodeHandler = new CodeHandler(clientElement)
      expect(tmpCodeHandler.clientElement).toEqual(clientElement)

    }
  )

  describe("init", function() {

    it("should call the init function of the super calss",
      function() {

        spyOn(Plot2DAny.prototype, 'init')
        myCodeHandler.init()
        expect(Plot2DAny.prototype.init).toHaveBeenCalled()

      }
    )

  })

})

describe("CodeHandleMode", function() {

  it("should define the code handle modes", function() {
    
    expect(CodeHandleMode.APPEND).toEqual(0)
    expect(CodeHandleMode.APPEND_AS_FUNCTION_INJECT_PRESENT).toEqual(1)
    expect(CodeHandleMode.APPEND_AS_FUNCTION).toEqual(2)
    expect(CodeHandleMode.APPEND_AS_FUNCTION_EXPECT_PARAMS).toEqual(3)
    expect(CodeHandleMode.OVERWRITE).toEqual(4)
    expect(CodeHandleMode.DELETE_WITH_NEXT_PUBLICATION).toEqual(5)
    expect(CodeHandleMode.DELETE).toEqual(6)
    expect(CodeHandleMode.EVALUATE).toEqual(7)
    expect(CodeHandleMode.PUBLISH).toEqual(8)
  
  })

})