describe("DomHeaderBar", function() {
  var myDomHeaderBar
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

    myDomHeaderBar = new DomHeaderBar(
      document.createElementNS("http://www.w3.org/1999/xhtml", 'div')
    )


  })

  it("should extend DomAbsolute", function() {

    expect(myDomHeaderBar.__proto__.__proto__.constructor.name)
      .toEqual('DomAbsolute')

  })

  it(`should have an attribute mouseIsDown, which is set with a
    mouse down event on the header bar container element`,
    function() {

      expect(myDomHeaderBar.mouseIsDown).toEqual(false)

    }
  )

  it(`should have an object attribute for saving the offset of the
    click position on a mouse down event on the conatiner element`,
    function() {

      expect(myDomHeaderBar.clickPositionOffset.x).toEqual(0)
      expect(myDomHeaderBar.clickPositionOffset.y).toEqual(0)

    }
  )

  it(`should have a function callbackOnMouseDown, which is called
    with a mouse down event on the container element`, function() {

      expect(myDomHeaderBar.callbackOnMouseDown)
        .toEqual(jasmine.any(Function))

    }
  )

  describe("callbackOnMouseDown", function() {

    let myEvent = {

      preventDefault: function() {},
      clientX: 100,
      clientY: 200
      

    }

    it(`should prevent to call the default action`, function() {

      spyOn(myEvent, 'preventDefault')
      myDomHeaderBar.callbackOnMouseDown(myEvent)
      expect(myEvent.preventDefault).toHaveBeenCalled()

    })

    it(`should set the attribute mouseIsDown to true`, function() {
     
      myDomHeaderBar.callbackOnMouseDown(myEvent)

      expect(myDomHeaderBar.mouseIsDown).toEqual(true)

    })

    it(`should save the delta between the top left corner and the
      mouse click position passed form the event parameter object`,
      function() {

        myDomHeaderBar.parentElement = {
          offsetLeft: 54,
          offsetTop: 67
        }
        myDomHeaderBar.callbackOnMouseDown(myEvent)
        expect(myDomHeaderBar.clickPositionOffset.x).toEqual(-46)
        expect(myDomHeaderBar.clickPositionOffset.y).toEqual(-133)

      }
    )

  })

  it(`should have a function callbackOnMouseUp`, function() {

    expect(myDomHeaderBar.callbackOnMouseUp)
      .toEqual(jasmine.any(Function))

  })

  describe("callbackOnMouseUp", function() {

    let myEvent = {

      preventDefault: function() {},
      clientX: 100,
      clientY: 200
      

    }

    it(`should call the passed events preventDefault function`,
      function() {

        spyOn(myEvent, 'preventDefault')
        myDomHeaderBar.callbackOnMouseUp(myEvent)
        expect(myEvent.preventDefault).toHaveBeenCalled()

      }
    )

    it(`should reset the mouseIsDown calss attribute`, function() {

      myDomHeaderBar.mouseIsDown = true
      expect(myDomHeaderBar.mouseIsDown).toEqual(true)
      myDomHeaderBar.callbackOnMouseUp(myEvent)
      expect(myDomHeaderBar.mouseIsDown).toEqual(false)


    })

  })

  it(`should have a function that is called with mouse move events`,
    function() {

      expect(myDomHeaderBar.callbackOnMouseMove)
        .toEqual(jasmine.any(Function))

    }
  )

  describe("callbackOnMouseMove", function() {

    let myEvent

    beforeEach(function() {

      myDomHeaderBar = new DomHeaderBar(testDiv)

      myDomHeaderBar.parentElement.style.left = '250px'
      myDomHeaderBar.parentElement.style.top = '450px'

      myEvent = {

        preventDefault: function() {},
        clientX: 100,
        clientY: 200
        
  
      }

    })

    

    it(`should set the parents element left style attribute when
      the attribute mouseIsDown is set`, function() {

        myDomHeaderBar.mouseIsDown = true

        myDomHeaderBar.clickPositionOffset.x = 230
        
        myDomHeaderBar.callbackOnMouseMove(myEvent)

        expect(myDomHeaderBar.parentElement.style.left).toEqual('330px')

      }
    )

    it(`should set the parents element top style attribute when
    the attribute mouseIsDown is set`, function() {

        myDomHeaderBar.mouseIsDown = true

        myDomHeaderBar.clickPositionOffset.y = 234

        myDomHeaderBar.callbackOnMouseMove(myEvent)

        expect(myDomHeaderBar.parentElement.style.top).toEqual('434px')

      }
    )

    it(`should not update the top and left style attribute of the
      parent element, when the mouseIsDown is cleared`, function() {

        myDomHeaderBar.clickPositionOffset.x = 462
        myDomHeaderBar.clickPositionOffset.y = 145

        myDomHeaderBar.callbackOnMouseMove(myEvent)

        expect(myDomHeaderBar.parentElement.style.top)
          .toEqual('450px')
        expect(myDomHeaderBar.parentElement.style.left)
          .toEqual('250px')

      }
    )

  })

  describe("init", function() {

    it(`should inizialize the x position, y position, the width and
      the height of the container element`, function() {

        spyOn(myDomHeaderBar, 'setX')
        spyOn(myDomHeaderBar, 'setY')
        spyOn(myDomHeaderBar, 'setW')
        spyOn(myDomHeaderBar, 'setH')
        myDomHeaderBar.init(12, 13, 14, 15)

        expect(myDomHeaderBar.setX).toHaveBeenCalledWith(12)
        expect(myDomHeaderBar.setY).toHaveBeenCalledWith(13)
        expect(myDomHeaderBar.setW).toHaveBeenCalledWith(14)
        expect(myDomHeaderBar.setH).toHaveBeenCalledWith(15)

      }
    )

    it(`should set a default background color`, function() {

      myDomHeaderBar.init(1, 2, 3, 4)
      expect(myDomHeaderBar.containerElement.style.backgroundColor)
        .toEqual('rgb(68, 0, 68)')

    })

    it(`should set the height style attribute to a defualt of 30ox`,
      function() {
        myDomHeaderBar.init(1, 2, 3, 4)
        expect(myDomHeaderBar.containerElement.style.height)
          .toEqual('30px')
      }
    )

    it(`should append the elemnt to the parents element`, function() {

      spyOn(myDomHeaderBar.parentElement, 'appendChild')
      myDomHeaderBar.init(1, 2, 3, 4)
      expect(myDomHeaderBar.parentElement.appendChild)
        .toHaveBeenCalledWith(myDomHeaderBar.containerElement)

    })
    
  })

  it(`should have a function for initialize the event Listeners`,
    function() {

      expect(myDomHeaderBar.initMovability).toEqual(
        jasmine.any(Function)
      )

    }
  )

  describe('initMovability', function() {

    it(`should add the callbackOnMouseDown function to a
      containerElement mousedown event`, function() {

        myDomHeaderBar.init(1, 2, 3, 4)
        spyOn(myDomHeaderBar.containerElement, 'addEventListener')
        myDomHeaderBar.initMovability()
        expect(myDomHeaderBar.containerElement.addEventListener)
          .toHaveBeenCalledWith(
            'mousedown',
            myDomHeaderBar.callbackOnMouseDown
          )

      }
    )

    it(`should add a mouseup event to the document which should call
      the funtion callbackOnMouseUp`, function() {

        myDomHeaderBar.init(1, 2, 3, 4)
        spyOn(document, 'addEventListener')
        myDomHeaderBar.initMovability()
        expect(document.addEventListener).toHaveBeenCalledWith(
          'mouseup',
          myDomHeaderBar.callbackOnMouseUp
        )

      }
    )

    it(`should add a mousemove event to the document which should call
      the funtion callbackOnMouseMove`, function() {

        myDomHeaderBar.init(1, 2, 3, 4)
        spyOn(document, 'addEventListener')
        myDomHeaderBar.initMovability()
        expect(document.addEventListener).toHaveBeenCalledWith(
          'mousemove',
          myDomHeaderBar.callbackOnMouseMove
        )

      }
    )

  })


})
