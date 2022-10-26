describe("Primitive", function() {
  var myPrimitive

  beforeEach(function() {

    myPrimitive = new Primitive()

  })

  it("should extend Plot", function() {

    expect(myPrimitive.__proto__.__proto__.constructor.name)
      .toEqual('Plot')

  })

  it("should call the super class constructor", function() {

    spyOn(Plot, 'constructor').and.callThrough()
    Primitive.constructor(null)
    expect(Plot.constructor).toHaveBeenCalled()

  })

  describe("init", function() {

    it("should call the super class init function", function() {

      spyOn(Plot.prototype, 'init')
      myPrimitive.init()
      expect(Plot.prototype.init).toHaveBeenCalled()

    })

    it(`should create a new html div element`, function() {

      myPrimitive.init()
      expect(myPrimitive.displayElement.constructor.name)
        .toEqual('HTMLDivElement')

    })

    it(`should set the position style attribute of the display
      element to 'absolute'`, function() {

        myPrimitive.init()
        expect(myPrimitive.displayElement.style.position)
          .toEqual('absolute')

      }
    )
    it(`should set the overflow style of the display element to
      scroll`, function() {

        myPrimitive.init()
        expect(myPrimitive.displayElement.style.overflow)
          .toEqual('scroll')

      }
    )

    it(`should not allow to select text inside the displayElement`,
      function() {

        myPrimitive.init()
        expect(myPrimitive.displayElement.style.userSelect)
          .toEqual('none')

      }
    )

    it(`should set the x position to the arguemnts x value`,
      function() {

        spyOn(myPrimitive, 'setX')
        myPrimitive.init(1, 2)
        expect(myPrimitive.setX).toHaveBeenCalledWith(1)

      }
    )

    it(`should set the y position to the arguemnts y value`,
      function() {

        spyOn(myPrimitive, 'setY')
        myPrimitive.init(1, 2)
        expect(myPrimitive.setY).toHaveBeenCalledWith(2)

      }
    )

  })

  it(`should have a function setX`, function() {

      expect(myPrimitive.setX).toEqual(jasmine.any(Function))

    }
  )

  describe("setX", function() {

    it('should set the attribute x to the arguments value',
      function() {

        myPrimitive.isADomElement = false
        myPrimitive.setX(123)
        expect(myPrimitive.x).toEqual(123)

      }
    )

    it(`should set the style left attribute of the displayElement
      when the plot should be used as dom element`, function() {

        myPrimitive.isADomElement = true
        myPrimitive.displayElement = {
          style: {
            left: ''
         }
        }
        myPrimitive.setX(1, 2)
        expect(myPrimitive.displayElement.style.left).toEqual('1px')

      }
    )

  })

  it(`should have a function setY`, function() {

      expect(myPrimitive.setY).toEqual(jasmine.any(Function))

    }
  )

  describe("setY", function() {

    it('should set the attribute x to the arguments value',
      function() {

        myPrimitive.isADomElement = false
        myPrimitive.setY(123)
        expect(myPrimitive.y).toEqual(123)

      }
    )

    it(`should set the style top attribute of the displayElement
      when the plot should be used as dom element`, function() {

        myPrimitive.isADomElement = true
        myPrimitive.displayElement = {
          style: {
            top: ''
         }
        }
        myPrimitive.setY(2)
        expect(myPrimitive.displayElement.style.top).toEqual('2px')

      }
    )

  })

  it(`should have a function for setting up the plot for acting as
    a reporter onclick`, function() {

      expect(myPrimitive.actAsReporterOnclick)
        .toEqual(jasmine.any(Function))

    }
  )

  describe("actAsReporterOnclick", function() {

    it(`should call the super class ActAsReporter function for
      instantiating or adopt a passed reporter`, function() {

        let codeHandler = {
          publish: function() {}
        }

        myPrimitive.displayElement = { onclick: null }

        spyOn(Plot.prototype, 'actAsReporter')
        myPrimitive.actAsReporterOnclick(codeHandler)
        expect(Plot.prototype.actAsReporter).toHaveBeenCalledWith(codeHandler)

      }
    )

    it(`should set the onclick event function and call the appended
      code handlers publish function`, function() {

        let codeHandler = {
          publish: function() {}
        }

        myPrimitive.displayElement = { onclick: null }

        spyOn(codeHandler, 'publish')
        myPrimitive.actAsReporterOnclick(codeHandler)
        myPrimitive.displayElement.onclick()
        expect(codeHandler.publish).toHaveBeenCalled()

      }
    )

  })

  it(`should have a function for setting up the plot for acting as
    a publicist onclick`, function() {

      expect(myPrimitive.actAsPublicistOnclick)
        .toEqual(jasmine.any(Function))

    }
  )

  describe("actAsPublicistOnclick", function() {

    it(`should call the super class actAsPublicist function for
      instantiating or adopt a passed publicist`, function() {

        let codeHandler = {
          publish: function() {}
        }

        myPrimitive.displayElement = { onclick: null }

        spyOn(Plot.prototype, 'actAsPublicist')
        myPrimitive.actAsPublicistOnclick(codeHandler)
        expect(Plot.prototype.actAsPublicist)
          .toHaveBeenCalledWith(codeHandler)

      }
    )

    it(`should set the onclick event function and call the appended
      code handlers publish function`, function() {

        let codeHandler = {
          publish: function() {}
        }

        myPrimitive.displayElement = { onclick: null }

        spyOn(codeHandler, 'publish')
        myPrimitive.actAsPublicistOnclick(codeHandler)
        myPrimitive.displayElement.onclick()
        expect(codeHandler.publish).toHaveBeenCalled()

      }
    )

  })

  it(`should have a function for setting up the plot for acting as
    a toggle publicist onclick`, function() {

      expect(myPrimitive.actAsTogglePublicistOnclick)
        .toEqual(jasmine.any(Function))

    }
  )
  describe("actAsTogglePublicistOnclick", function() {

    it(`should call the super class actAsTogglePublicist function for
      instantiating or adopt a passed publicist`, function() {

        let codeHandler = {
          publish: function() {},
          toggle: function() {},
          publicationText: [ "" ]
        }

        myPrimitive.displayElement = {
          onclick: null,
          innerText: ""
        }

        spyOn(Plot.prototype, 'actAsTogglePublicist')
        myPrimitive.actAsTogglePublicistOnclick(codeHandler)
        expect(Plot.prototype.actAsTogglePublicist)
          .toHaveBeenCalledWith(codeHandler)

      }
    )

    it(`should set the onclick event function and call the appended
      code handlers toggle function`, function() {

        let codeHandler = {
          toggle: function() {},
          publicationIndex: 0,
          publicationText: ["jacksons tie"]
        }

        myPrimitive.displayElement = {
          innerText: "",
          onclick: null
        }

        spyOn(codeHandler, 'toggle')
        myPrimitive.actAsTogglePublicistOnclick(codeHandler)
        myPrimitive.displayElement.onclick()
        expect(codeHandler.toggle).toHaveBeenCalled()
        expect(myPrimitive.displayElement.innerText)
          .toEqual("jacksons tie")

      }
    )

  })

})