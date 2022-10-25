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

})