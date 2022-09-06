describe("DomWindowControlPanel", function() {
  var myDomWindowControlPanel
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

    myDomWindowControlPanel = new DomWindowControlPanel(testDiv,
      {
        setX: function(value) {},
        setY: function(value) {},
        setW: function(value) {},
        setH: function(value) {},
        callbackOnMouseUp: function() {}
      }
    )

  })

  it("should extend DomAbsolute", function() {

    expect(myDomWindowControlPanel.__proto__.__proto__.constructor.name)
      .toEqual('DomAbsolute')

  })

  it(`should have an attribute client window, which is set by the
    second argument of the constructor`, function() {

      let tmpControlPanel = new DomWindowControlPanel(testDiv, "Hello")
      expect(tmpControlPanel.clientWindow).toEqual("Hello")

    }
  )

  it(`should have an attribute defaultHeight, which is initialized to
    0`, function() {

      expect(myDomWindowControlPanel.defaultHeight).toEqual(0)

    }
  )

  it(`should have an attribute defaultWidth, which is initialized to
    0`, function() {

      expect(myDomWindowControlPanel.defaultWidth).toEqual(0)

    }
  )

  it(`should have an attribute backgroundColor, which is initialized to
    '#5c307a'`, function() {

      expect(myDomWindowControlPanel.backgroundColor).toEqual('#5c307a')

    }
  )

  it(`should have an attribute borderColor, which is initialized to
    '#c08ee3'`, function() {

      expect(myDomWindowControlPanel.borderColor).toEqual('#c08ee3')

    }
  )

  it(`should have an attribute color, which is initialized to
    '#c5b5d0'`, function() {

      expect(myDomWindowControlPanel.color).toEqual('#c5b5d0')

    }
  )

  it(`should have an attribute colorOnMouseOver, which is initialized to
    '#f1e7f9'`, function() {

      expect(myDomWindowControlPanel.colorOnMouseOver).toEqual('#f1e7f9')

    }
  )

  it(`should have an attribute ctrlWidth, which is initialized to
    0`, function() {

      expect(myDomWindowControlPanel.ctrlWidth).toEqual(0)

    }
  )

  it(`should have an attribute ctrlHeight, which is initialized to
    0`, function() {

      expect(myDomWindowControlPanel.ctrlHeight).toEqual(0)

    }
  )

  it(`should have an attribute ctrlMarginTop, which is initialized to
    0`, function() {

      expect(myDomWindowControlPanel.ctrlMarginTop).toEqual(0)

    }
  )

  it(`should have an attribute ctrlMarginLeft, which is initialized to
    0`, function() {

      expect(myDomWindowControlPanel.ctrlMarginLeft).toEqual(0)

    }
  )

  it(`should have an attribute ctrlBorderRadius, which is initialized to
    0`, function() {

      expect(myDomWindowControlPanel.ctrlBorderRadius).toEqual(0)

    }
  )

  it(`should have an attribute stdCtrl, which is an object with the
   members fullscreen, destroy and minimize set to null`,
    function() {

      expect(myDomWindowControlPanel.stdCtrl.fullscreen).toEqual(null)
      expect(myDomWindowControlPanel.stdCtrl.destroy).toEqual(null)
      expect(myDomWindowControlPanel.stdCtrl.minimize).toEqual(null)

    }
  )

  it(`should have a callback function callbackOnFullscreen`,
    function() {

      expect(myDomWindowControlPanel.callbackOnFullscreen).toBeDefined()

    }
  )

  describe("callbackOnFullscreen", function() {

    it(`it should set the top position of the client window`,
      function() {

       
        spyOn(myDomWindowControlPanel.clientWindow, 'setX')
        myDomWindowControlPanel.callbackOnFullscreen()
        expect(myDomWindowControlPanel.clientWindow.setX)
          .toHaveBeenCalledWith(9)

      }
    )

    it(`it should set the left position of the client window`,
      function() {

        spyOn(myDomWindowControlPanel.clientWindow, 'setY')
        myDomWindowControlPanel.callbackOnFullscreen()
        expect(myDomWindowControlPanel.clientWindow.setY)
          .toHaveBeenCalledWith(9)

      }
    )

    it(`it should set the width of the client window`,
      function() {

        spyOn(myDomWindowControlPanel.clientWindow, 'setW')
        myDomWindowControlPanel.callbackOnFullscreen()
        expect(myDomWindowControlPanel.clientWindow.setW)
          .toHaveBeenCalledWith(window.innerWidth - 18)

      }
    )

    it(`it should set the height of the client window`,
      function() {

        spyOn(myDomWindowControlPanel.clientWindow, 'setH')
        myDomWindowControlPanel.callbackOnFullscreen()
        expect(myDomWindowControlPanel.clientWindow.setH)
          .toHaveBeenCalledWith(window.innerHeight - 18)

      }
    )

    it(`it should call the callbackOnMouseUp which updates
      the stretchers`,
      function() {

        spyOn(myDomWindowControlPanel.clientWindow, 'callbackOnMouseUp')
        myDomWindowControlPanel.callbackOnFullscreen()
        expect(myDomWindowControlPanel.clientWindow.callbackOnMouseUp)
          .toHaveBeenCalled()

      }
    )

  })

})
