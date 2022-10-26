describe("Plot", function() {
  var myPlot

  beforeEach(function() {

    myPlot = new Plot()

  })

  it("should extend Plot", function() {

    expect(myPlot.__proto__.__proto__.constructor.name)
      .toEqual('Plot2DAny')

  })

  it(`should have an attribute wouldLikeToBeUpdated`, function() {

    expect(myPlot.wouldLikeToBeUpdated).toEqual(true)

  })

  it(`should have an attribute wouldLikeToBeUpdated`, function() {

    expect(myPlot.wouldLikeToBeDrawn).toEqual(true)

  })

  it(`should have an attribute displayElement`, function() {

    expect(myPlot.displayElement).toEqual(null)

  })

  it(`should have an attribute for saving the x position`,
    function() {

      expect(myPlot.x).toEqual(0)

  })

  it(`should have an attribute for saving the y position`,
    function() {

      expect(myPlot.y).toEqual(0)

  })

  it(`should have ab boolen for define if the plot is a dom or
    performance element`, function() {

      expect(myPlot.isADomElement).toEqual(true)

    }
  )

  it(`shuld have a attribute codeHandler set to the null reference`,
    function() {

      expect(myPlot.codeHandler).toEqual(null)

    }
  )

  it(`should have a function for setting up the plot for acting
    as a codeReporter`, function() {

      expect(myPlot.actAsReporter).toEqual(jasmine.any(Function))

    }
  )

  describe("actAsReporter", function() {

    it(`should save the reference of a reporter passed with the
      argument list to the attribute codeHandler`, function() {

        myPlot.actAsReporter("REPORTEROBJECT")
        expect(myPlot.codeHandler).toEqual("REPORTEROBJECT")

      }
    )

    it(`should instantiate a new CodeReporter when there is no
      Reporter in the argument list`, function() {

        myPlot.actAsReporter()
        expect(myPlot.codeHandler.constructor.name)
          .toEqual('CodeReporter')

      }
    )

  })

  it(`should have a function for setting up the plot for acting
    as a codePublicist`, function() {

      expect(myPlot.actAsPublicist).toEqual(jasmine.any(Function))

    }
  )

  describe("actAsPublicist", function() {

    it(`should save the reference of a publicist passed with the
      argument list to the attribute codeHandler`, function() {

        myPlot.actAsPublicist("REPORTEROBJECT")
        expect(myPlot.codeHandler).toEqual("REPORTEROBJECT")

      }
    )

    it(`should instantiate a new CodePublicist when there is no
      Publicist in the argument list`, function() {

        myPlot.actAsPublicist()
        expect(myPlot.codeHandler.constructor.name)
          .toEqual('CodePublicist')

      }
    )

  })

  it(`should have a function for setting up the plot for acting
    as a codeTogglePublicist`, function() {

      expect(myPlot.actAsTogglePublicist)
        .toEqual(jasmine.any(Function))

    }
  )

  describe("actAsTogglePublicist", function() {

    it(`should save the reference of a reporter passed with the
      argument list to the attribute codeHandler`, function() {

        myPlot.actAsTogglePublicist("REPORTEROBJECT")
        expect(myPlot.codeHandler).toEqual("REPORTEROBJECT")

      }
    )

    it(`should instantiate a new CodeTogglePublicist when there is no
      Publicist in the argument list`, function() {

        myPlot.actAsTogglePublicist()
        expect(myPlot.codeHandler.constructor.name)
          .toEqual('CodeTogglePublicist')

      }
    )

  })

  it(`should have a function for setting up the plot for acting
    as a codeReader`, function() {

      expect(myPlot.actAsReader)
        .toEqual(jasmine.any(Function))

    }
  )

  describe("actAsReader", function() {

    it(`should save the reference of a reporter passed with the
      argument list to the attribute codeHandler`, function() {

        myPlot.actAsReader("REPORTEROBJECT")
        expect(myPlot.codeHandler).toEqual("REPORTEROBJECT")

      }
    )

    it(`should instantiate a new CodeReader when there is no
      Reader in the argument list`, function() {

        myPlot.actAsReader()
        expect(myPlot.codeHandler.constructor.name)
          .toEqual('CodeReader')

      }
    )

  })


})