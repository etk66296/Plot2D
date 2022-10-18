describe("CodeReader", function() {
  var myCodeReader

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

    expect(myCodeReader.shiftDeleteCommandToTheDutyFront)
      .toEqual(jasmine.any(Function))

  })

  describe("shiftDeleteCommandToTheDutyFront", function() {

    it(`should place the DELETE command to the front of the duty
      list`, function() {
      let duty = ["other duty"]
      duty = myCodeReader.shiftDeleteCommandToTheDutyFront(duty)
      expect(duty).toEqual([  CodeHandleMode.DELETE, "other duty" ])
    })

  })

  it(`should have a function facePublication for processing the
    received publication`, function() {

    expect(myCodeReader.facePublication)
      .toEqual(jasmine.any(Function))

  })

  describe("facePublication", function() {

    it(`should append the delete cammand to the front of the passed
      duty array when the deleteWithNextPublication flag is set`,
      function() {

        myCodeReader.deleteWithNextPublication = true
        spyOn(myCodeReader, 'shiftDeleteCommandToTheDutyFront')
          .and.callThrough()
        myCodeReader.facePublication("publication", [])
        expect(myCodeReader.shiftDeleteCommandToTheDutyFront)
          .toHaveBeenCalledWith([ CodeHandleMode.DELETE ])

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

    it(`should overwrite the readers receivedPublication attribute
      on the duty CodeHandler.OVERWRITE`, function() {

        myCodeReader.receivedPublications = "obsolete publication"

        myCodeReader.facePublication(
          'new publication',
          [ CodeHandleMode.OVERWRITE ]
        )

        expect(myCodeReader.receivedPublications)
          .toEqual("new publication")
        
      }
    )

    it(`should set the received publication to an empty string,
      when the present command is CodeHandleMode.DELETE`, function() {

        myCodeReader.receivedPublications = "obsolete publication"

        myCodeReader.facePublication(
          'new publication',
          [ CodeHandleMode.DELETE ]
        )

        expect(myCodeReader.receivedPublications)
          .toEqual("")

      }
    )

    it(`should recall the facePublication function, but in the first
      argument with the publication instead of the receicved
      publication`, function() {

        myCodeReader.receivedPublications = "obsolete publication"

        spyOn(myCodeReader, 'facePublication').and.callThrough()

        myCodeReader.facePublication(
          'new publication',
          [ CodeHandleMode.DELETE, CodeHandleMode.OVERWRITE ]
        )

        expect(myCodeReader.facePublication).toHaveBeenCalledTimes(2)
        expect(myCodeReader.receivedPublications)
          .toEqual('new publication')

      }
    )

    it(`should evaluate the publication before saving it to the
      recevied publication attribute`, function() {

        myCodeReader.facePublication(
          'Math.sqrt(9)',
          [ CodeHandleMode.EVALUATE ]
        )

        expect(myCodeReader.receivedPublications).toEqual('3')

      }
    )

    it(`should set the delteWithNextPublication flag when a duty
      DELETE_WITH_NEXT_PUBLICATION arrives`, function() {

        myCodeReader.receivedPublications = "obsolete publication"

        myCodeReader.facePublication(
          '',
          [ CodeHandleMode.DELETE_WITH_NEXT_PUBLICATION ]
        )

        myCodeReader.facePublication(
          'dummy',
          [ -1 ]
        )

        expect(myCodeReader.receivedPublications).toEqual('')

      }
    )

    it(`should append the publication to the received publication
      with a bracket at the end, when the duty is set to
      APPEND_AS_FUNCTION`, function() {

        myCodeReader.facePublication(
          'function(',
          [ CodeHandleMode.APPEND_AS_FUNCTION ]
        )

        expect(myCodeReader.receivedPublications)
          .toEqual('function()')

      }
    )

    it(`should append the publication to the received publication
    attribute as default with all poisitve duty ids`, function() {

      myCodeReader.receivedPublications = ""

      myCodeReader.facePublication(
        '4',
        [ CodeHandleMode.APPEND ]
      )

      myCodeReader.facePublication(
        '+',
        [ 99 ]
      )

      expect(myCodeReader.receivedPublications)
          .toEqual('4+')

    })

    it(`should call facePublication as long as there are dutys in
      the queue`, function() {

        spyOn(myCodeReader, 'facePublication').and.callThrough()

        myCodeReader.facePublication('4', [
          CodeHandleMode.APPEND,
          CodeHandleMode.EVALUATE,
          CodeHandleMode.DELETE
        ])

        expect(myCodeReader.facePublication).toHaveBeenCalledTimes(3)

      }
    )

    it(`should call the callback function
      callbackAfterReadingAllPublications when all duties are done`,
      function() {
        spyOn(myCodeReader, 'callbackAfterReadingAllPublications')
        myCodeReader.facePublication('', [])
        expect(myCodeReader.callbackAfterReadingAllPublications)
          .toHaveBeenCalled()
      }
    )

  })

})