describe("DomBorderScaler", function() {
  var myDomBorderScaler
  var testDiv
  var testContainer

  beforeAll(function() {

    testContainer = document.getElementById('TestContainer')
    testDiv = document.createElementNS(
      "http://www.w3.org/1999/xhtml", 'div'
    )

    testContainer.appendChild(testDiv)

  })

  afterAll(function() {
    testContainer.removeChild(testDiv)
    testDiv.remove()
    testContainer.style.height = '0px'
  })

  beforeEach(function() {

    myDomBorderScaler = new DomBorderScaler(
      document.createElementNS("http://www.w3.org/1999/xhtml", 'div')
    )

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
      expect(myDomBorderScaler.edgeSide).toEqual('')
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

    it(`should add a mouseDown event listener to the
      container element`, function() {
      
      spyOn(myDomBorderScaler, 'callbackOnMouseDown')
      myDomBorderScaler.init(100, 100, 200, 400)
      /*
        due to the container element is created in the init
        function a few lines above the listener is tested by
        dispatching it after the initialization
      */
      myDomBorderScaler.containerElement
        .dispatchEvent(new Event('mousedown'))
      expect(myDomBorderScaler.callbackOnMouseDown)
        .toHaveBeenCalledWith(jasmine.any(Object))

    })

    it(`should add a mouseUp event listener to the document`,
      function() {

        spyOn(document, 'addEventListener')
        myDomBorderScaler.init(1, 2, 3, 4)
        expect(document.addEventListener)
          .toHaveBeenCalledWith(
            'mouseup',
            jasmine.any(Function)
          )

      }
    )

  })

  describe("destroy", function() {

    it(`should call the destroy function of the super class`,
      function() {

        let containerElement = {
          removeEventListener: function(eventType, callback) {

          }
        }
        myDomBorderScaler.containerElement = containerElement
        spyOn(DomAbsolute.prototype, 'destroy')
        myDomBorderScaler.destroy()
        expect(DomAbsolute.prototype.destroy).toHaveBeenCalled()

    })

    it(`should remove the containerElement mousedown event listener`,
      function() {

        spyOn(DomAbsolute.prototype, 'destroy')
        let containerElement = {
          removeEventListener: function(eventType, callback) {

          }
        }
        myDomBorderScaler.containerElement = containerElement
        spyOn(containerElement, 'removeEventListener')
        myDomBorderScaler.isInitialized = true
        myDomBorderScaler.destroy()
        expect(myDomBorderScaler.containerElement.removeEventListener)
          .toHaveBeenCalledWith('mousedown', myDomBorderScaler.callbackOnMouseDown)
      }
    )

    it(`should remove the documents mouseup event listener`,
      function() {

        spyOn(DomAbsolute.prototype, 'destroy')

        let containerElement = {
          removeEventListener: function(eventType, callback) {

          }
        }
        myDomBorderScaler.containerElement = containerElement

        spyOn(document, 'removeEventListener')
        myDomBorderScaler.isInitialized = true
        myDomBorderScaler.destroy()
        expect(document.removeEventListener)
          .toHaveBeenCalledWith('mouseup', myDomBorderScaler.callbackOnMouseUp)

      }
    )

    it(`should not try to remove event listeners when the object is
      not initialized`, function() {

        let containerElement = {
          removeEventListener: function(eventType, callback) {

          }
        }
        myDomBorderScaler.containerElement = containerElement
        spyOn(containerElement, 'removeEventListener')
        spyOn(document, 'removeEventListener')
        myDomBorderScaler.isInitialized = false
        myDomBorderScaler.destroy()
        expect(myDomBorderScaler.containerElement.removeEventListener)
          .not.toHaveBeenCalled()
        expect(document.removeEventListener)
          .not.toHaveBeenCalled()

      }
    )

  })

  it(`should have a method for stretching the parent element in its
    height from the top border`,
    function() {

      expect(myDomBorderScaler.stretchParentFromTopBy)
        .toEqual(jasmine.any(Function))

    }
  )

  describe("stretchParentFromTopBy", function() {

    var myDomBorderScaler
    var event
    

    beforeAll(function() {

      myDomBorderScaler = new DomBorderScaler(testDiv)

      myDomBorderScaler.parentElement.style.height = '100px'
      myDomBorderScaler.parentElement.style.top = '10px'

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

        // the expected value depends on the random test execution
        let expectation = '135px'
        if(myDomBorderScaler.parentElement.clientHeight == 135) {
          expectation = '170px'
        }

        myDomBorderScaler.stretchParentFromTopBy(event)
        expect(myDomBorderScaler.parentElement.style.height)
          .toEqual(expectation)

      }
    )

  })

  it(`should have a method for stretching the parent element in its
    height from the bottom border`,
    function() {

      expect(myDomBorderScaler.stretchParentFromBottomBy)
        .toEqual(jasmine.any(Function))

    }
  )

  describe("stretchParentFromBottomBy", function() {

    var myDomBorderScaler
    var event

    beforeEach(function() {

      var testDiv = document.getElementById('TestContainer')

      myDomBorderScaler = new DomBorderScaler(testDiv)

      myDomBorderScaler.clickPositionOffset.y = 234

      event = { clientY: 267 }

    })


    it(`should set the parentElement height style to the new
      stretched height`, function() {

        myDomBorderScaler.stretchParentFromBottomBy(event)
        expect(myDomBorderScaler.parentElement.style.height)
          .toEqual('501px')

      }
    )

  })

  it(`should have a method for stretching the parent element in its
  width from the left border`,
  function() {

      expect(myDomBorderScaler.stretchParentFromLeftBy)
        .toEqual(jasmine.any(Function))

    }
  )

  describe("stretchParentFromLeftBy", function() {

    var myDomBorderScaler
    var event

    beforeEach(function() {

      var testDiv = document.getElementById('TestContainer')

      myDomBorderScaler = new DomBorderScaler(testDiv)

      myDomBorderScaler.parentElement.style.width = '450px'
      myDomBorderScaler.parentElement.style.left = '250px'

      event = { clientX: 123 }

    })

    it(`should take an argument which is an object reference to an
      event and this event must have an attribute clientX. The value
      of clientX is set to the parentElement top style attribute`,
      function() {

        myDomBorderScaler.stretchParentFromLeftBy(event)
        expect(myDomBorderScaler.parentElement.style.left).toEqual('123px')

      }
    )

    it(`should set the parentElement height style to the new
      stretched width`, function() {

        myDomBorderScaler.stretchParentFromLeftBy(event)
        expect(myDomBorderScaler.parentElement.style.width)
          .toEqual('335px')

      }
    )

  })

  it(`should have a method for stretching the parent element in its
    width from the bottom border`,
    function() {

      expect(myDomBorderScaler.stretchParentFromRightBy)
        .toEqual(jasmine.any(Function))

    }
  )

  describe("stretchParentFromRightBy", function() {

    var myDomBorderScaler
    var event

    beforeEach(function() {

      var testDiv = document.getElementById('TestContainer')

      myDomBorderScaler = new DomBorderScaler(testDiv)

      myDomBorderScaler.clickPositionOffset.x = 234

      event = { clientX: 267 }

    })


    it(`should set the parentElement width style to the new
      stretched width`, function() {

        myDomBorderScaler.stretchParentFromRightBy(event)
        expect(myDomBorderScaler.parentElement.style.width)
          .toEqual('501px')

      }
    )

  })

  it(`should have a function which is called with an mouse down
    event on the html element itself`,
  function() {

    expect(myDomBorderScaler.callbackOnMouseDown)
      .toEqual(jasmine.any(Function))

    }
  )

  describe('callbackOnMouseDown', function() {

    it(`should call the events prevent default function`,

      function() {

        let mouseDownEvent = {
          clientX: 20,
          clientY: 30,
          preventDefault: () => {}
        }

        myDomBorderScaler.init(100, 100, 100, 100)
        spyOn(mouseDownEvent, 'preventDefault')
        myDomBorderScaler.callbackOnMouseDown(mouseDownEvent)
        expect(mouseDownEvent.preventDefault).toHaveBeenCalled()


      }
    )

    it('should set the attribute mouseIsDown to true', function() {

      let mouseDownEvent = {
        clientX: 20,
        clientY: 30,
        preventDefault: () => {}
      }


      myDomBorderScaler.init(100, 100, 100, 100)
      myDomBorderScaler.callbackOnMouseDown(mouseDownEvent)
      expect(myDomBorderScaler.mouseIsDown).toEqual(true)

    })


    it(`should save the X click position in the member object
      clickPositionOffset. The position is the difference between
      the elements left offset and the mouse X click position`,
      function() {

      let mouseDownEvent = {
        clientX: 40,
        clientY: 30,
        preventDefault: () => {}
      }

      myDomBorderScaler.init(100, 100, 100, 100)

      myDomBorderScaler.callbackOnMouseDown(mouseDownEvent)


      expect(myDomBorderScaler.clickPositionOffset.x).toEqual(-40)
    })

    it(`should save the Y click position in the member object
      clickPositionOffset. The position is the difference between
      the elements top offset and the mouse Y click position`,
      function() {

      let mouseDownEvent = {
        clientX: 40,
        clientY: 30,
        preventDefault: () => {}
      }

      myDomBorderScaler.init(100, 100, 100, 100)
      myDomBorderScaler.callbackOnMouseDown(mouseDownEvent)
      expect(myDomBorderScaler.clickPositionOffset.y).toEqual(-30)

    })

  })

  it(`should have a function which is called with an mouse up
    event on the whole document`,
  function() {

    expect(myDomBorderScaler.callbackOnMouseUp)
      .toEqual(jasmine.any(Function))

    }
  )

  describe('callbackOnMouseUp', function() {

    it(`should reset the attribute mouseIsDown`, function() {

      myDomBorderScaler.mouseIsDown = true
      myDomBorderScaler.callbackOnMouseUp()
      expect(myDomBorderScaler.mouseIsDown).toEqual(false)

    })

    

  })



})