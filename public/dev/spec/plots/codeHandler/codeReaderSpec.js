describe("CodeReader", function() {
  var myCodeReader

  beforeEach(function() {

    myCodeReader = new CodeReader()

  })

  it("should extend CodeHandler", function() {

    expect(myCodeReader.__proto__.__proto__.constructor.name)
      .toEqual('CodeHandler')

  })

  it("should call the super class constructor", function() {

    spyOn(CodeHandler, 'constructor').and.callThrough()
    CodeReader.constructor(null)
    expect(CodeHandler.constructor).toHaveBeenCalled()

  })

  it(`should have a string attribute for saving the received
    publications`, function() {

      expect(myCodeReader.receivedPublications).toEqual("")

    }
  )

  it(`should have an array as attribute for the reporters the reader
    is following`, function() {

      expect(myCodeReader.reporters).toEqual([])

    }
  )

  it(`should have a boolean attribute which is a flag for marking
    the current recieved publication to be deleted with the next
    publication`, function() {

      expect(myCodeReader.deleteWithNextPublication).toEqual(false)

    }
  )

  it(`should define a callback function
    callbackAfterReadingAllPublications`, function() {

      expect(myCodeReader.callbackAfterReadingAllPublications)
        .toEqual(jasmine.any(Function))

    }
  )

  describe("init", function() {

    it("should call the super class init function", function() {

      spyOn(CodeHandler.prototype, 'init')
      myCodeReader.init()
      expect(CodeHandler.prototype.init).toHaveBeenCalled()

    })

  })

  
  it(`should have a function shift DELETE command`, function() {

    expect(myCodeReader.shiftDeleteCommand)
      .toEqual(jasmine.any(Function))

  })

  describe("shiftDeleteCommand", function() {

    it(`should place the DELETE command to the front of the duty
      list`, function() {
      let duty = ["other duty"]
      duty = myCodeReader.shiftDeleteCommand(duty)
      expect(duty).toEqual([6, "other duty"])
    })

  })

  describe("facePublication", function() {

    it(`should append the delete cammand to the front of the passed
      duty array when the deleteWithNextPublication flag is set`,
      function() {

        myCodeReader.deleteWithNextPublication = true
        spyOn(myCodeReader, 'shiftDeleteCommand')
        myCodeReader.facePublication("publication", [])
        expect(myCodeReader.shiftDeleteCommand)
          .toHaveBeenCalledWith([])

      }
    )

    it(`should reset the flag deleteWithNextPublication when it was
      set`, function() {

        myCodeReader.deleteWithNextPublication = true
        myCodeReader.facePublication("publication", [])
        expect(myCodeReader.deleteWithNextPublication)
          .toEqual(false)

      }
    )

  })

  it(`should have a function facePublication for processing the
    received publication`, function() {

    expect(myCodeReader.facePublication)
      .toEqual(jasmine.any(Function))

  })

})