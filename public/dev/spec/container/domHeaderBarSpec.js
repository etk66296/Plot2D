describe("DomHeaderBar", function() {
  var myDomHeaderBar

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

    let myEvent = {

      preventDefault: function() {},
      clientX: 100,
      clientY: 200
      

    }

  })


})
