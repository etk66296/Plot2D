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

  it(`should define an arrow function callbackBeforePublish with an
    empty body`, function() {

      expect(myCodeReporter.callbackBeforePublish)
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

  it("should have a function for register subscribers", function() {

    expect(myCodeReporter.registerSubscriber).toEqual(jasmine.any(Function))

  })

  describe("registerSubscriber", function() {

    it(`should loop trough the passed arguments and push them to the
    subscribers attribute`, function() {

      myCodeReporter.registerSubscriber("one", "two", "three")

      expect(myCodeReporter.subscribers).toEqual(["one", "two", "three"])

    })

  })

  it(`should have a function publish for trigger the subscribers to
    face the reporters publication`, function() {

      expect(myCodeReporter.publish).toEqual(jasmine.any(Function))

    }
  )

  describe("publish", function() {

    it("should call the callback function callbackBeforePublish",
      function() {

        spyOn(myCodeReporter, "callbackBeforePublish")
        myCodeReporter.publish()
        expect(myCodeReporter.callbackBeforePublish)
          .toHaveBeenCalled()

      }
    )

    it(`should call the face publication function of all
      subscribers`, function() {

        myCodeReporter.publication = "do something"

        myCodeReporter.subscribers = [
          { plotObject: { codeHandler: {
            facePublication: (publication, duty) => {},
          } }, duty: "DELETE"},
          { plotObject: { codeHandler: {
            facePublication: () => {}
          } }, duty: "EVALUATE" },
          { plotObject: { codeHandler: {
            facePublication: () => {}
          } }, duty: "APPEND" },
        ]

        spyOn(myCodeReporter.subscribers[0]
          .plotObject.codeHandler, 'facePublication')
        spyOn(myCodeReporter.subscribers[1]
          .plotObject.codeHandler, 'facePublication')
        spyOn(myCodeReporter.subscribers[2]
          .plotObject.codeHandler, 'facePublication')

        myCodeReporter.publish()

        expect(myCodeReporter.subscribers[0].plotObject.codeHandler
          .facePublication)
          .toHaveBeenCalledWith(myCodeReporter.publication, "DELETE")
        expect(myCodeReporter.subscribers[1].plotObject.codeHandler
          .facePublication)
          .toHaveBeenCalledWith(myCodeReporter.publication, "EVALUATE")
        expect(myCodeReporter.subscribers[2].plotObject.codeHandler
          .facePublication)
          .toHaveBeenCalledWith(myCodeReporter.publication, "APPEND")
      }
    )

  })

})