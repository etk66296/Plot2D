describe("DomBorderScaler", function() {
  var myDomBorderScaler

  beforeEach(function() {

    myDomBorderScaler = new DomBorderScaler()

  })

  it("should extend DomAbsolute", function() {

    expect(myDomBorderScaler.__proto__.__proto__.constructor.name)
      .toEqual('DomAbsolute')

  })

  it(`should have an attribute which is set to true when die mouse was
    clicked ontop of the element`, function() {

      expect(myDomBorderScaler.mouseIsDown).toBeDefined()
      expect(myDomBorderScaler.mouseIsDown).toBe(false)

    }
  )

  it(`should have an attribute for saving the edge type which should
    be initial an empty string`, function() {
      expect(myDomBorderScaler.edgeType).toEqual('')
    }
  )

  it(`should have an attribute for saving the mouse offset coordiantes
    when it was clicked on the element`, function() {

      expect(myDomBorderScaler.clickPositionOffset).toBeDefined()

    }
  )

  describe("clickPositionOffset", function() {

    it(`should have an key for saving the x click pos.`, function() {

      expect(myDomBorderScaler.clickPositionOffset.x).toBeDefined()
      
    })

    it(`should have an key for saving the y click pos.`, function() {

      expect(myDomBorderScaler.clickPositionOffset.y).toBeDefined()

    })

  })

  describe("init", function() {

    var myDomBorderScaler

    beforeEach(function() {

      myDomBorderScaler = new DomBorderScaler(document.createElementNS(
        "http://www.w3.org/1999/xhtml",
        'div'
      ))
  
    })

    it("sould call the parents init function", function() {

      spyOn(myDomBorderScaler.__proto__.__proto__, 'init').and.callThrough()
      myDomBorderScaler.init()
      expect(myDomBorderScaler.__proto__.__proto__.init).toHaveBeenCalled()

    })

    it(`should take first argument for the x position of the
      border scaler element and call the setX function of the
      super class`, function() {

        spyOn(myDomBorderScaler, 'setX')
        myDomBorderScaler.init(2)
        expect(myDomBorderScaler.setX).toHaveBeenCalledWith(2)

      }
    )

    it(`should take a second argument for the y position of the
      border scaler element and call the setY function of the
      super class`, function() {

        spyOn(myDomBorderScaler, 'setY')
        myDomBorderScaler.init(3, 4)
        expect(myDomBorderScaler.setY).toHaveBeenCalledWith(4)

      }
    )

    it(`should take a third argument for the width of the
      border scaler element and call the setW function of the
      super class`, function() {

        spyOn(myDomBorderScaler, 'setW')
        myDomBorderScaler.init(3, 4, 100)
        expect(myDomBorderScaler.setW).toHaveBeenCalledWith(100)

      }
    )

    it(`should take a fourth argument for the width of the
      border scaler element and call the setH function of the
      super class`, function() {

        spyOn(myDomBorderScaler, 'setH')
        myDomBorderScaler.init(3, 4, 100, 200)
        expect(myDomBorderScaler.setH).toHaveBeenCalledWith(200)

      }
    )

  })

  it("should have a method, which is able to take an event object",
    function() {

      expect(myDomBorderScaler.stretchParentFromTopBy)
        .toEqual(jasmine.any(Function))

    }
  )

  describe("stretchParentFromTopBy", function() {

    var myDomBorderScaler
    var event

    beforeEach(function() {

      var testDiv = document.getElementById('TestContainer')

      myDomBorderScaler = new DomBorderScaler(testDiv)

      myDomBorderScaler.parentElement.style.height = '450px'
      myDomBorderScaler.parentElement.style.top = '250px'

      event = { clientY: 123 }

    })

    it(`should take an argument which is an object reference to an
      event and this event must have an attribute clientY. The value
      of clientY is set to the parentElement top style attribute`,
      function() {

        myDomBorderScaler.stretchParentFromTopBy(event)
        expect(myDomBorderScaler.parentElement.style.top).toEqual('123px')

      }
    )

    it(`should set the parentElement height style to the new
      stretched height`, function() {

        myDomBorderScaler.stretchParentFromTopBy(event)
        console.log(myDomBorderScaler.parentElement)
        expect(myDomBorderScaler.parentElement.style.height)
          .toEqual('577px')

      }
    )

  })


})