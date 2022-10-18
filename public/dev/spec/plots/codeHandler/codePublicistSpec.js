describe("CodePublicist", function() {
  var myCodePublicist

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

    myCodePublicist = new CodePublicist()

  })

  it("should extend CodeHandler", function() {

    expect(myCodePublicist.__proto__.__proto__.constructor.name)
      .toEqual('CodeHandler')

  })

  it("should call the super class constructor", function() {

    spyOn(CodeHandler, 'constructor').and.callThrough()
    CodePublicist.constructor(null)
    expect(CodeHandler.constructor).toHaveBeenCalled()

  })

  it(`should have a string attribute for saving the received
  publications`, function() {

      expect(myCodePublicist.receivedPublications).toEqual("")

    }
  )

  it(`should have an array as attribute for the reporters the reader
    is following`, function() {

      expect(myCodePublicist.reporters).toEqual([])

    }
  )

  it(`should have a boolean attribute which is a flag for marking
    the current recieved publication to be deleted with the next
    publication`, function() {

      expect(myCodePublicist.deleteWithNextPublication).toEqual(false)

    }
  )

  it(`should have an attribute publication initialized with
    ampty string`, function() {

      expect(myCodePublicist.publication).toEqual("")

    }
  )

  it(`should have an empty array as attribute named subscribers`,
    function() {

      expect(myCodePublicist.subscribers).toEqual([])

    }
  )

  it(`should have a boolean attribute appendParamsMode`, function() {

    expect(myCodePublicist.appendParamsMode).toEqual(false)

  })

  it(`should have an attribute appendParamsCount`, function() {

    expect(myCodePublicist.appendParamsCount).toEqual(0)

  })

  it(`should define a callback function
    callbackAfterReadingAllPublications`, function() {

      expect(myCodePublicist.callbackAfterReadingAllPublications)
        .toEqual(jasmine.any(Function))

    }
  )

  it(`should define a callback function callbackBeforeParticipate`,
    function() {

      expect(myCodePublicist.callbackBeforeParticipate)
        .toEqual(jasmine.any(Function))

    }
  )

  describe("init", function() {

    it("should call the super class init function", function() {

      spyOn(CodeHandler.prototype, 'init')
      myCodePublicist.init()
      expect(CodeHandler.prototype.init).toHaveBeenCalled()

    })

  })

  it("should have a function for register subscribers", function() {

    expect(myCodePublicist.registerSubscriber).toEqual(jasmine.any(Function))

  })

  describe("registerSubscriber", function() {

    it(`should loop trough the passed arguments and push them to the
    subscribers attribute`, function() {

      myCodePublicist.registerSubscriber("one", "two", "three")

      expect(myCodePublicist.subscribers).toEqual(["one", "two", "three"])

    })

  })

  it(`should have a function shift DELETE command`, function() {

    expect(myCodePublicist.shiftDeleteCommandToTheDutyFront)
      .toEqual(jasmine.any(Function))

  })

  describe("shiftDeleteCommandToTheDutyFront", function() {

    it(`should place the DELETE command to the front of the duty
      list`, function() {
      let duty = ["other duty"]
      duty = myCodePublicist.shiftDeleteCommandToTheDutyFront(duty)
      expect(duty).toEqual([  CodeHandleMode.DELETE, "other duty" ])
    })

  })

  it(`should have a function facePublication for processing the
    received publication`, function() {

    expect(myCodePublicist.facePublication)
      .toEqual(jasmine.any(Function))

  })

  describe("facePublication", function() {

    it(`should append the delete command to the front of the passed
      duty array when the deleteWithNextPublication flag is set`,
      function() {

        myCodePublicist.deleteWithNextPublication = true
        spyOn(myCodePublicist, 'shiftDeleteCommandToTheDutyFront')
          .and.callThrough()
        myCodePublicist.facePublication("publication", [])
        expect(myCodePublicist.shiftDeleteCommandToTheDutyFront)
          .toHaveBeenCalledWith([ CodeHandleMode.DELETE ])

      }
    )

    it(`should reset the flag deleteWithNextPublication when it was
      set`, function() {

        myCodePublicist.deleteWithNextPublication = true
        myCodePublicist.facePublication("publication", [])
        expect(myCodePublicist.deleteWithNextPublication)
          .toEqual(false)

      }
    )

    it(`should overwrite the readers receivedPublication attribute
      on the duty CodeHandler.OVERWRITE`, function() {

        myCodePublicist.receivedPublications = "obsolete publication"

        myCodePublicist.facePublication(
          'new publication',
          [ CodeHandleMode.OVERWRITE ]
        )

        expect(myCodePublicist.receivedPublications)
          .toEqual("new publication")
        
      }
    )

    it(`should set the received publication to an empty string,
      when the present command is CodeHandleMode.DELETE`, function() {

        myCodePublicist.receivedPublications = "obsolete publication"

        myCodePublicist.facePublication(
          'new publication',
          [ CodeHandleMode.DELETE ]
        )

        expect(myCodePublicist.receivedPublications)
          .toEqual("")

      }
    )

    it(`should recall the facePublication function, but in the first
      argument with the publication instead of the receicved
      publication`, function() {

        myCodePublicist.receivedPublications = "obsolete publication"

        spyOn(myCodePublicist, 'facePublication').and.callThrough()

        myCodePublicist.facePublication(
          'new publication',
          [ CodeHandleMode.DELETE, CodeHandleMode.OVERWRITE ]
        )

        expect(myCodePublicist.facePublication).toHaveBeenCalledTimes(2)
        expect(myCodePublicist.receivedPublications)
          .toEqual('new publication')

      }
    )

    it(`should evaluate the publication before saving it to the
      recevied publication attribute`, function() {

        myCodePublicist.facePublication(
          'Math.sqrt(9)',
          [ CodeHandleMode.EVALUATE ]
        )

        expect(myCodePublicist.receivedPublications).toEqual('3')

      }
    )

    it(`should append close all brackets before evaluate when the
      object is in appendParamsMode`, function() {

        myCodePublicist.appendParamsMode = true

        myCodePublicist.facePublication(
          'Math.sqrt(Math.sqrt(81',
          [ CodeHandleMode.EVALUATE ]
        )

        expect(myCodePublicist.receivedPublications).toEqual('3')

      }
    )

    it(`should set the delteWithNextPublication flag when a duty
      DELETE_WITH_NEXT_PUBLICATION arrives`, function() {

        myCodePublicist.receivedPublications = "obsolete publication"

        myCodePublicist.facePublication(
          '',
          [ CodeHandleMode.DELETE_WITH_NEXT_PUBLICATION ]
        )

        myCodePublicist.facePublication(
          'dummy',
          [ -1 ]
        )

        expect(myCodePublicist.receivedPublications).toEqual('')

      }
    )

  })


})