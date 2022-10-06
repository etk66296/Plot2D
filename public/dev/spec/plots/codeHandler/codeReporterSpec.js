describe("CodeReporter", function() {
  var myCodeReporter

  beforeEach(function() {

    myCodeReporter = new CodeReporter()

  })

  it("should extend CodeHandler", function() {

    expect(myCodeReporter.__proto__.__proto__.constructor.name)
      .toEqual('CodeHandler')

  })

  it("should call the super class constructor", function() {

    spyOn(CodeHandler, 'constructor').and.callThrough()
    CodeReporter.constructor(null)
    expect(CodeHandler.constructor).toHaveBeenCalled()

  })

  it("should set the attribute publication to the value emtystring",
    function() {

      expect(myCodeReporter.publication).toEqual("")

    }
  )

  it(`should instantiate an array object and safe it to the attribute
    subscribers`, function() {

      expect(myCodeReporter.subscribers).toEqual([])

    }
  )

  it(`should define an arrow function callbackOnPublish with an
    empty body`, function() {

      expect(myCodeReporter.callbackOnPublish)
        .toEqual(jasmine.any(Function))

    }
  )

  describe("init", function() {

    it("should call the super class init function", function() {

      spyOn(CodeHandler.prototype, 'init')
      myCodeReporter.init()
      expect(CodeHandler.prototype.init).toHaveBeenCalled()

    })

  })

})