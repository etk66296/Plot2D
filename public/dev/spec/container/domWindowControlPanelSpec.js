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
        x: 44,
        y: 55,
        w: 999,
        h: 1000,
        setX: function(value) {},
        setY: function(value) {},
        setW: function(value) {},
        setH: function(value) {},
        callbackOnMouseUp: function() {},
        headerBar: {
          setW: function() {},
          isInitialized: true,
          defaultHeight: 123
        },
        display: {
          alignToParentSize: function() {}
        },
        destroy: function() {}
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

  it(`should have an attribute lastWidth, which is initialized to
    the second argument client window width`, function() {

      expect(myDomWindowControlPanel.lastW).toEqual(999)

    }
  )

  it(`should have an attribute lastHeight, which is initialized to
    the second argument client window height`, function() {

      expect(myDomWindowControlPanel.lastH).toEqual(1000)

    }
  )

  it(`should have an attribute last x position, which is initialized to
    the second argument client window x pos`, function() {

      expect(myDomWindowControlPanel.lastX).toEqual(44)

    }
  )

  it(`should have an attribute last y position, which is initialized to
  the second argument client window y pos`, function() {

      expect(myDomWindowControlPanel.lastY).toEqual(55)

    }
  )

  it(`should have a callback function callbackOnFullscreen`,
    function() {

      expect(myDomWindowControlPanel.callbackOnFullscreen).toBeDefined()

    }
  )

  describe("callbackOnFullscreen", function() {

    it(`should save the x position before change it`, function() {

      myDomWindowControlPanel.clientWindow.x = 4325
      myDomWindowControlPanel.callbackOnFullscreen()
      expect(myDomWindowControlPanel.lastX).toEqual(4325)

    })

    it(`should save the y position before change it`, function() {

      myDomWindowControlPanel.clientWindow.y = 1234
      myDomWindowControlPanel.callbackOnFullscreen()
      expect(myDomWindowControlPanel.lastY).toEqual(1234)

    })

    it(`should save the width before change it`, function() {

      myDomWindowControlPanel.clientWindow.w = 800
      myDomWindowControlPanel.callbackOnFullscreen()
      expect(myDomWindowControlPanel.lastW).toEqual(800)

    })

    it(`should save the height before change it`, function() {

      myDomWindowControlPanel.clientWindow.h = 600
      myDomWindowControlPanel.callbackOnFullscreen()
      expect(myDomWindowControlPanel.lastH).toEqual(600)

    })

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

    it(`should set the width of the header bar when there is one
      initialized`, function() {

        spyOn(myDomWindowControlPanel.clientWindow.headerBar, 'setW')
        myDomWindowControlPanel.callbackOnFullscreen()
        expect(myDomWindowControlPanel.clientWindow.headerBar.setW)
          .toHaveBeenCalledWith(
            myDomWindowControlPanel.parentElement.clientWidth
          )

      }
    )

    it(`should not set the width of the header bar when there is none
      initialized`, function() {

        spyOn(myDomWindowControlPanel.clientWindow.headerBar, 'setW')
        myDomWindowControlPanel.clientWindow.headerBar.isInitialized = false
        myDomWindowControlPanel.callbackOnFullscreen()
        expect(myDomWindowControlPanel.clientWindow.headerBar.setW)
          .not.toHaveBeenCalled()

      }
    )

    it(`should align the client window display to the new size`,
      function() {

        spyOn(myDomWindowControlPanel.clientWindow.display, 'alignToParentSize')
        myDomWindowControlPanel.callbackOnFullscreen()
        expect(myDomWindowControlPanel.clientWindow.display.alignToParentSize)
          .toHaveBeenCalledWith(123)

      }
    )

  })

  it(`should have a callback function callbackOnMinimize`,
    function() {

      expect(myDomWindowControlPanel.callbackOnMinimize).toBeDefined()

    }
  )

  describe("callbackOnMinimize", function() {

    it(`should restore the x position`, function() {

      spyOn(myDomWindowControlPanel.clientWindow, 'setX')
      myDomWindowControlPanel.callbackOnMinimize()
      expect(myDomWindowControlPanel.clientWindow.setX)
        .toHaveBeenCalledWith(myDomWindowControlPanel.lastX)

    })

    it(`should restore the y position`, function() {

      spyOn(myDomWindowControlPanel.clientWindow, 'setY')
      myDomWindowControlPanel.callbackOnMinimize()
      expect(myDomWindowControlPanel.clientWindow.setY)
        .toHaveBeenCalledWith(myDomWindowControlPanel.lastY)

    })

    it(`should restore the width`, function() {

      spyOn(myDomWindowControlPanel.clientWindow, 'setW')
      myDomWindowControlPanel.callbackOnMinimize()
      expect(myDomWindowControlPanel.clientWindow.setW)
        .toHaveBeenCalledWith(myDomWindowControlPanel.lastW)

    })

    it(`should restore the height`, function() {

      spyOn(myDomWindowControlPanel.clientWindow, 'setH')
      myDomWindowControlPanel.callbackOnMinimize()
      expect(myDomWindowControlPanel.clientWindow.setH)
        .toHaveBeenCalledWith(myDomWindowControlPanel.lastH)

    })

    it(`it should call the callbackOnMouseUp of the client window,
      which updates the stretchers`, function() {

      spyOn(myDomWindowControlPanel.clientWindow, 'callbackOnMouseUp')
      myDomWindowControlPanel.callbackOnMinimize()
      expect(myDomWindowControlPanel.clientWindow.callbackOnMouseUp)
        .toHaveBeenCalled()

      }
    )

    it(`should set the width of the header bar when there is one
      initialized`, function() {

      spyOn(myDomWindowControlPanel.clientWindow.headerBar, 'setW')
      myDomWindowControlPanel.callbackOnMinimize()
      expect(myDomWindowControlPanel.clientWindow.headerBar.setW)
        .toHaveBeenCalledWith(
          myDomWindowControlPanel.parentElement.clientWidth
        )

      }
    )

    it(`should not set the width of the header bar when there is none
      initialized`, function() {

        spyOn(myDomWindowControlPanel.clientWindow.headerBar, 'setW')
        myDomWindowControlPanel.clientWindow.headerBar.isInitialized = false
        myDomWindowControlPanel.callbackOnMinimize()
        expect(myDomWindowControlPanel.clientWindow.headerBar.setW)
          .not.toHaveBeenCalled()

      }
    )

    it(`should align the client window display to the new size`,
      function() {

        spyOn(myDomWindowControlPanel.clientWindow.display, 'alignToParentSize')
        myDomWindowControlPanel.callbackOnMinimize()
        expect(myDomWindowControlPanel.clientWindow.display.alignToParentSize)
          .toHaveBeenCalledWith(123)

      }
    )

  })

  it(`should have a callback function callbackOnDestroy`,
    function() {

      expect(myDomWindowControlPanel.callbackOnDestroy).toBeDefined()

    }
  )

  describe("callbackOnDestroy", function() {

    it(`should call the client windows destroy function`, function() {

      spyOn(myDomWindowControlPanel.clientWindow, "destroy")
      myDomWindowControlPanel.callbackOnDestroy()
      expect(myDomWindowControlPanel.clientWindow.destroy)
        .toHaveBeenCalled()

    })

  })

  describe("init", function() {

    it(`should call the init function of the super class`,
      function() {

        spyOn(DomAbsolute.prototype, 'init').and.callThrough()
        myDomWindowControlPanel.init()
        expect(DomAbsolute.prototype.init).toHaveBeenCalled()

    })

    it(`should set the default values of the attributes`,
      function() {

        // spyOn(DomAbsolute.prototype, 'init')
        myDomWindowControlPanel.init()
        expect(myDomWindowControlPanel.defaultHeight).toEqual(26)
        expect(myDomWindowControlPanel.defaultWidth).toEqual(85)
        expect(myDomWindowControlPanel.ctrlMarginLeft).toEqual(3)
        expect(myDomWindowControlPanel.ctrlMarginTop).toEqual(3)
        expect(myDomWindowControlPanel.ctrlHeight).toEqual(myDomWindowControlPanel.defaultHeight - 4)
        expect(myDomWindowControlPanel.ctrlWidth).toEqual(myDomWindowControlPanel.ctrlHeight)
        expect(myDomWindowControlPanel.ctrlBorderRadius).toEqual(5)

      }
    )

    it(`should set the attributes of its container element`,
      function() {

        myDomWindowControlPanel.init()

        expect(
          myDomWindowControlPanel.containerElement.style.backgroundColor
        ).toEqual('rgb(92, 48, 122)')

        expect(
          myDomWindowControlPanel.containerElement.style.color
        ).toEqual('rgb(197, 181, 208)')

        expect(
          myDomWindowControlPanel.containerElement.style.right
        ).toEqual('0px')

      }
    )

    it(`should call its setW and setH functions with the default
      value attributes`, function() {

        spyOn(myDomWindowControlPanel, 'setW')
        myDomWindowControlPanel.init()
        expect(myDomWindowControlPanel.setW)
          .toHaveBeenCalledWith(myDomWindowControlPanel.defaultWidth)

        spyOn(myDomWindowControlPanel, 'setH')
        myDomWindowControlPanel.init()
        expect(myDomWindowControlPanel.setH)
          .toHaveBeenCalledWith(myDomWindowControlPanel.defaultHeight)

      }
    )

    it(`should create a div element for the minimize button`,
      function() {

        myDomWindowControlPanel.init()
        expect(myDomWindowControlPanel.stdCtrl.minimize.constructor.name)
          .toEqual('HTMLDivElement')

      }
    )

    it(`should set the style of the minimize button div element`,
      function() {
        myDomWindowControlPanel.init()
        expect(myDomWindowControlPanel.stdCtrl.minimize.style.display).toEqual('inline-block')
        expect(myDomWindowControlPanel.stdCtrl.minimize.style.backgroundColor).toEqual('rgb(92, 48, 122)')
        expect(myDomWindowControlPanel.stdCtrl.minimize.style.width).toEqual(String(myDomWindowControlPanel.ctrlWidth) + 'px')
        expect(myDomWindowControlPanel.stdCtrl.minimize.style.height).toEqual(String(myDomWindowControlPanel.ctrlHeight) + 'px')
        expect(myDomWindowControlPanel.stdCtrl.minimize.style.border).toEqual('1px solid ' + 'rgb(192, 142, 227)')
        expect(myDomWindowControlPanel.stdCtrl.minimize.style.marginLeft).toEqual(String(myDomWindowControlPanel.ctrlMarginLeft) + 'px')
        expect(myDomWindowControlPanel.stdCtrl.minimize.style.marginTop).toEqual(String(myDomWindowControlPanel.ctrlMarginTop) + 'px')
        expect(myDomWindowControlPanel.stdCtrl.minimize.style.textAlign).toEqual('center')
        expect(myDomWindowControlPanel.stdCtrl.minimize.style.lineHeight).toEqual(String(myDomWindowControlPanel.ctrlHeight) + 'px')
        expect(myDomWindowControlPanel.stdCtrl.minimize.style.borderRadius).toEqual(String(myDomWindowControlPanel.ctrlBorderRadius) + 'px')
        expect(myDomWindowControlPanel.stdCtrl.minimize.style.userSelect).toEqual('none')
        expect(myDomWindowControlPanel.stdCtrl.minimize.innerText).toEqual('≈')
      }
    )

    it('should an onmouseover event to the control minimize button',
      function() {

        myDomWindowControlPanel.init()
        expect(
          myDomWindowControlPanel.stdCtrl.minimize.onmouseover
        ).toEqual(jasmine.any(Function))

      }
    )

    it('should change the color on mouse over',
      function() {

        myDomWindowControlPanel.init()
        myDomWindowControlPanel.stdCtrl.minimize.onmouseover()
        expect(myDomWindowControlPanel.stdCtrl.minimize.style.color)
          .toEqual('rgb(241, 231, 249)')

      }
    )

    it('should an onmouseout event to the control minimize button',
      function() {

        myDomWindowControlPanel.init()
        expect(
          myDomWindowControlPanel.stdCtrl.minimize.onmouseout
        ).toEqual(jasmine.any(Function))

      }
    )

    it('should change the color on mouse out',
      function() {

        myDomWindowControlPanel.init()
        myDomWindowControlPanel.stdCtrl.minimize.onmouseout()
        expect(myDomWindowControlPanel.stdCtrl.minimize.style.color)
          .toEqual('rgb(197, 181, 208)')

      }
    )

  })

})
