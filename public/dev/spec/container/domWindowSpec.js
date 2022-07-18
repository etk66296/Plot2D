describe("DomWindow", function() {
  var myDomWindow

  beforeEach(function() {

    myDomWindow = new DomWindow(
      document.createElementNS("http://www.w3.org/1999/xhtml", 'div')
    )

  })

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

  it("should extend DomAbsolute", function() {

    expect(myDomWindow.__proto__.__proto__.constructor.name)
      .toEqual('DomAbsolute')

  })

  it("should have attributes for the stretcher elements",
    function() {

      expect(myDomWindow.topStretcher).toBeDefined()
      expect(myDomWindow.rightStretcher).toBeDefined()
      expect(myDomWindow.bottomStretcher).toBeDefined()
      expect(myDomWindow.leftStretcher).toBeDefined()
      expect(myDomWindow.topRightStretcher).toBeDefined()
      expect(myDomWindow.bottomRightStretcher).toBeDefined()
      expect(myDomWindow.bottomLeftStretcher).toBeDefined()
      expect(myDomWindow.topLeftStretcher).toBeDefined()

    }
  )

  it(`should have an attribute domObjectTracker, which is set to null
    when the object ist added to a tracker a reference to the tracker
    ist set`, function() {

      expect(myDomWindow.domObjectTracker).toEqual(null)

    }
  )

  it("should have an attribute for defining the background color",
    function() {

      expect(myDomWindow.bgC).toEqual('rgb(255, 255, 255)')

    }
  )

  it(`should have an attribute rigid to make the borders not
    scalable`, function() {

      expect(myDomWindow.rigid).toEqual(false)

    }
  )

  it(`should have an attribute that defines the default height
    of a stretcher element with the value 8`, function() {

      expect(myDomWindow.defaultStretcherHeight).toEqual(8)

    }
  )

  it(`should have ab attribute that defines the default width
    of a stretcher element with the value 8`, function() {

      expect(myDomWindow.defaultStretcherWidth).toEqual(8)

    }
  )

  it(`should have a attribute display`, function() {

      expect(myDomWindow.display).toBeDefined()

    }
  )


  describe("init", function() {

    beforeEach(function() {

      myDomWindow = new DomWindow(document.createElementNS(
        "http://www.w3.org/1999/xhtml",
        'div'
      ))
  
    })


    it("call the parents init function", function() {
        
        spyOn(DomAbsolute.prototype, 'init').and.callThrough()
        myDomWindow.init()
        expect(DomAbsolute.prototype.init).toHaveBeenCalled()

      }
    )

    it(`should set a default background color of the container
      element`, function() {
      myDomWindow.init()
      expect(myDomWindow.containerElement.style.backgroundColor)
        .toEqual('rgb(0, 0, 0)')

    }
  )

    it(`should set the four arguments x, y, w, h, to the member
      attributes`, function() {

        myDomWindow.init(100, 200, 800, 600)
        expect(myDomWindow.x).toEqual(100)
        expect(myDomWindow.y).toEqual(200)
        expect(myDomWindow.w).toEqual(800)
        expect(myDomWindow.h).toEqual(600)

      }
    )

    it("should add a black css border outline with the width of 1 px",
      function() {

        myDomWindow.init(1, 2, 3, 4)

        expect(myDomWindow.containerElement.style.borderStyle)
          .toEqual("solid")
        expect(myDomWindow.containerElement.style.borderWidth)
          .toEqual("1px")
        expect(myDomWindow.containerElement.style.borderColor)
          .toEqual("rgb(0, 0, 0)")

      }
    )

    it(`should instantiate the top stretcher with the edge side set
      to north`, function() {

      myDomWindow.init(100, 100, 200, 400)
      expect(myDomWindow.topStretcher.__proto__.constructor.name)
        .toEqual('DomSingleDirBorderScaler')
      expect(myDomWindow.topStretcher.edgeSide).toEqual('N')

    })

    it(`should instantiate the right stretcher with the edge side set
      to east`, function() {

      myDomWindow.init(100, 100, 200, 400)
      expect(myDomWindow.rightStretcher.__proto__.constructor.name)
        .toEqual('DomSingleDirBorderScaler')
      expect(myDomWindow.rightStretcher.edgeSide).toEqual('E')

    })

    it(`should instantiate the bottom stretcher with the edge side set
      to south`, function() {

      myDomWindow.init(100, 100, 200, 400)
      expect(myDomWindow.bottomStretcher.__proto__.constructor.name)
        .toEqual('DomSingleDirBorderScaler')
      expect(myDomWindow.bottomStretcher.edgeSide).toEqual('S')

    })

    it(`should instantiate the left stretcher with the edge side set
      to west`, function() {

      myDomWindow.init(100, 100, 200, 400)
      expect(myDomWindow.leftStretcher.__proto__.constructor.name)
        .toEqual('DomSingleDirBorderScaler')
      expect(myDomWindow.leftStretcher.edgeSide).toEqual('W')

    })

    it(`should instantiate the top right stretcher with the edge side
      set to north east`, function() {

      myDomWindow.init(100, 100, 200, 400)
      expect(myDomWindow.topRightStretcher.__proto__.constructor.name)
        .toEqual('DomDoubleDirBorderScaler')
      expect(myDomWindow.topRightStretcher.edgeSide).toEqual('NE')

    })

    it(`should instantiate the bottom right stretcher with the edge
      side set to south east`, function() {

      myDomWindow.init(100, 100, 200, 400)
      expect(
        myDomWindow.bottomRightStretcher.__proto__.constructor.name
      ).toEqual('DomDoubleDirBorderScaler')
      expect(
        myDomWindow.bottomRightStretcher.edgeSide
      ).toEqual('SE')

    })

    it(`should instantiate the bottom left stretcher with the edge
      side set to south west`, function() {

      myDomWindow.init(100, 100, 200, 400)
      expect(
        myDomWindow.bottomLeftStretcher.__proto__.constructor.name
      ).toEqual('DomDoubleDirBorderScaler')
      expect(
        myDomWindow.bottomLeftStretcher.edgeSide
      ).toEqual('SW')

    })

    it(`should instantiate the top left stretcher with the edge
      side set to north west`, function() {

      myDomWindow.init(100, 100, 200, 400)
      expect(
        myDomWindow.topLeftStretcher.__proto__.constructor.name
      ).toEqual('DomDoubleDirBorderScaler')
      expect(
        myDomWindow.topLeftStretcher.edgeSide
      ).toEqual('NW')

    })

    it(`should instantiate  a header bar object`, function() {
      myDomWindow.init(100, 100, 200, 400)
      expect(myDomWindow.headerBar.__proto__.constructor.name)
        .toEqual('DomHeaderBar')
    })

    // it(`should create a dom div element and save the reference to the
    // attribute contentContainerElement`, function() {

    //   myDomWindow.init(20, 30, 50, 70)
    //   expect(myDomWindow
    //       .contentContainerElement
    //       .__proto__.constructor.name).toEqual("HTMLDivElement")

    // })

    it(`should add the mouse down event listener with the
      callbackOnMouseDown to the containerElement`, function() {
        spyOn(DomAbsolute.prototype, 'init')
        myDomWindow.containerElement = {
          addEventListener: () => {},
          style: {

          }
        }
        spyOn(myDomWindow.containerElement, 'addEventListener')
        myDomWindow.init()
        expect(myDomWindow.containerElement.addEventListener)
          .toHaveBeenCalledWith(
            'mousedown',
            myDomWindow.callbackOnMouseDown
          )
      }
    )

  })

  it(`should have a function for initializing the content element`,
    function() {

      expect(myDomWindow.initContentContainer).toBeDefined()

    }
  )

  // describe("initContentContainer", function() {

   

    // it(`should set the style of the contentContainer to scroll`,
    //   function() {

    //     myDomWindow.init(100, 100, 100, 100)
    //     myDomWindow.initContentContainer()
    //     expect(myDomWindow.contentContainerElement.style.overflow)
    //       .toEqual('scroll')
            

    //   }
    // )

    // it(`should set the style width of the contentContainer to
    //   the same with as the container Element`,
    //   function() {
        
    //     myDomWindow.init(100, 100, 100, 100)
    //     myDomWindow.initContentContainer()
    //     expect(myDomWindow.contentContainerElement.style.width)
    //       .toEqual(myDomWindow.containerElement.style.width)
            

    //   }
    // )
    // it(`should set the position style attribute to absolute`,
    //   function() {

    //     myDomWindow.init(100, 100, 100, 100)
    //     myDomWindow.initContentContainer()
    //     expect(myDomWindow.contentContainerElement.style.position)
    //       .toEqual('absolute')

    //   }
    // )

    // it(`should set the height of the content container. The height
    //   should be the container elements height minus the default
    //   header bar height of 30`, function() {

    //     myDomWindow.init(100, 100, 100, 100)
    //     myDomWindow.initContentContainer()
    //     expect(myDomWindow.contentContainerElement.style.height)
    //       .toEqual('100px')

    //   }
    // )

    // it(`should append the content container element to the
    //   container element`, function() {

    //     myDomWindow.init(100, 100, 100, 100)
    //     spyOn(myDomWindow.containerElement, 'appendChild')
    //     myDomWindow.initContentContainer()
    //     expect(myDomWindow.containerElement.appendChild)
    //       .toHaveBeenCalled()

    //   }
    // )

    // it(`should set the color to white`, function() {
    //   myDomWindow.init(100, 100, 100, 100)
    //   myDomWindow.initContentContainer()
    //   expect(myDomWindow.contentContainerElement.style.color)
    //     .toEqual('rgb(255, 255, 255)')
    // })


  // })

  it(`should have a function for initializing the border stretchers`,
    function() {

      expect(myDomWindow.initStretchers)
        .toEqual(jasmine.any(Function))

    }
  )

  describe('initStretchers', function() {

    it(`should call the init function of the attribute topStretcher`,
      function() {

        myDomWindow.init(100, 100, 400, 200)
        spyOn(myDomWindow.topStretcher, 'init')
        myDomWindow.initStretchers()
        expect(myDomWindow.topStretcher.init)
          .toHaveBeenCalledWith(0, -8, 400, 8)

        document.removeEventListener(
          'mouseup',
          myDomWindow.callbackOnMouseUp
        )
  

      }
    )

    it(`should call the init function of the attribute
      rightStretcher`, function() {

        myDomWindow.init(100, 100, 400, 200)
        spyOn(myDomWindow.rightStretcher, 'init')
        myDomWindow.initStretchers()
        expect(myDomWindow.rightStretcher.init)
          .toHaveBeenCalledWith(400, 0, 8, 200)

        document.removeEventListener(
          'mouseup',
          myDomWindow.callbackOnMouseUp
        )

      }
    )

    it(`should call the init function of the attribute
      bottomStretcher`, function() {

        myDomWindow.init(100, 100, 400, 200)
        spyOn(myDomWindow.bottomStretcher, 'init')
        myDomWindow.initStretchers()
        expect(myDomWindow.bottomStretcher.init)
          .toHaveBeenCalledWith(0, 200, 400, 8)

        document.removeEventListener(
          'mouseup',
          myDomWindow.callbackOnMouseUp
        )

      }
    )

    it(`should call the init function of the attribute
      leftStretcher`, function() {

        myDomWindow.init(100, 100, 400, 200)
        spyOn(myDomWindow.leftStretcher, 'init')
        myDomWindow.initStretchers()
        expect(myDomWindow.leftStretcher.init)
          .toHaveBeenCalledWith(-8, 0, 8, 200)

        document.removeEventListener(
          'mouseup',
          myDomWindow.callbackOnMouseUp
        )

      }
    )

    it(`should call the init function of the attribute
      topRightStretcher`, function() {

        myDomWindow.init(100, 100, 400, 200)
        spyOn(myDomWindow.topRightStretcher, 'init')
        myDomWindow.initStretchers()
        expect(myDomWindow.topRightStretcher.init)
          .toHaveBeenCalledWith(400, -8, 8, 8)

        document.removeEventListener(
          'mouseup',
          myDomWindow.callbackOnMouseUp
        )

      }
    )

    it(`should call the init function of the attribute
      bottomRightStretcher`, function() {

        myDomWindow.init(100, 100, 400, 200)
        spyOn(myDomWindow.bottomRightStretcher, 'init')
        myDomWindow.initStretchers()
        expect(myDomWindow.bottomRightStretcher.init)
          .toHaveBeenCalledWith(400, 200, 8, 8)

        document.removeEventListener(
          'mouseup',
          myDomWindow.callbackOnMouseUp
        )

      }
    )

    it(`should call the init function of the attribute
      bottomLeftStretcher`, function() {

        myDomWindow.init(100, 100, 400, 200)
        spyOn(myDomWindow.bottomLeftStretcher, 'init')
        myDomWindow.initStretchers()
        expect(myDomWindow.bottomLeftStretcher.init)
          .toHaveBeenCalledWith(-8, 200, 8, 8)

        document.removeEventListener(
          'mouseup',
           myDomWindow.callbackOnMouseUp
        )

      }
    )

    it(`should call the init function of the attribute
      topLeftStretcher`, function() {

        myDomWindow.init(100, 100, 400, 200)
        spyOn(myDomWindow.topLeftStretcher, 'init')
        myDomWindow.initStretchers()
        expect(myDomWindow.topLeftStretcher.init)
          .toHaveBeenCalledWith(-8, -8, 8, 8)

      }
    )

    it(`should add a document mouseup event listener with the
      member function callbackOnMouseUp`, function() {

        spyOn(document, 'addEventListener')
        myDomWindow.init()
        myDomWindow.initStretchers()
        expect(document.addEventListener).toHaveBeenCalledWith(
          'mouseup',
          myDomWindow.callbackOnMouseUp
        )

      }
    )

  })

  it(`should have a function which is called with a document
    mouseup`, function() {

      expect(myDomWindow.callbackOnMouseUp)
        .toEqual(jasmine.any(Function))

    }
  )

  describe('callbackOnMouseUp', function() {

    it('should update the topStretcher width', function() {
      myDomWindow.init(100, 100, 100, 100)
      myDomWindow.initStretchers()
      spyOn(myDomWindow.topStretcher, 'setW')
      myDomWindow.callbackOnMouseUp()
      expect(myDomWindow.topStretcher.setW)
        .toHaveBeenCalledWith(
          myDomWindow.containerElement.clientWidth
        )

    })

    it('should update the rightStretchers height and x position',
      function() {

        myDomWindow.init(100, 100, 100, 100)
        myDomWindow.initStretchers()
        spyOn(myDomWindow.rightStretcher, 'setH')
        spyOn(myDomWindow.rightStretcher, 'setX')
        myDomWindow.callbackOnMouseUp()
        expect(myDomWindow.rightStretcher.setH)
          .toHaveBeenCalledWith(
            myDomWindow.containerElement.clientHeight
          )

        expect(myDomWindow.rightStretcher.setX)
          .toHaveBeenCalledWith(
            myDomWindow.containerElement.clientWidth
        )


    })

    it('should update the bottomStretcher width', function() {

      myDomWindow.init(100, 100, 100, 100)
      myDomWindow.initStretchers()
      spyOn(myDomWindow.bottomStretcher, 'setY')
      spyOn(myDomWindow.bottomStretcher, 'setW')
      myDomWindow.callbackOnMouseUp()
      expect(myDomWindow.bottomStretcher.setY)
        .toHaveBeenCalledWith(
          myDomWindow.containerElement.clientHeight
        )
      expect(myDomWindow.bottomStretcher.setW)
        .toHaveBeenCalledWith(
          myDomWindow.containerElement.clientWidth
        )

    })

    it('should update the leftStretcher width', function() {
      
      myDomWindow.init(100, 100, 100, 100)
      myDomWindow.initStretchers()
      spyOn(myDomWindow.leftStretcher, 'setH')
      myDomWindow.callbackOnMouseUp()
      expect(myDomWindow.leftStretcher.setH)
        .toHaveBeenCalledWith(
          myDomWindow.containerElement.clientHeight
        )

    })

    it(`should update the topRightStretcher position`, function() {

      myDomWindow.init(100, 100, 100, 100)
      myDomWindow.initStretchers()
      spyOn(myDomWindow.topRightStretcher, 'setX')
      myDomWindow.callbackOnMouseUp()
      expect(myDomWindow.topRightStretcher.setX).toHaveBeenCalledWith(
        myDomWindow.containerElement.clientWidth
      )      

    })

    it(`should update the bottomRightStretcher position`, function() {

      myDomWindow.init(100, 100, 100, 100)
      myDomWindow.initStretchers()
      spyOn(myDomWindow.bottomRightStretcher, 'setX')
      spyOn(myDomWindow.bottomRightStretcher, 'setY')
      myDomWindow.callbackOnMouseUp()
      expect(myDomWindow.bottomRightStretcher.setX)
        .toHaveBeenCalledWith(
          myDomWindow.containerElement.clientWidth
        )

      expect(myDomWindow.bottomRightStretcher.setY)
        .toHaveBeenCalledWith(
          myDomWindow.containerElement.clientHeight
        )

    })

    it(`should update the bottomLeftStretcher position`, function() {

      myDomWindow.init(100, 100, 100, 100)
      myDomWindow.initStretchers()
      spyOn(myDomWindow.bottomLeftStretcher, 'setY')
      myDomWindow.callbackOnMouseUp()

      expect(myDomWindow.bottomLeftStretcher.setY)
        .toHaveBeenCalledWith(
          myDomWindow.containerElement.clientHeight
        )

    })

    // it(`should reset the content container elements dimensions`,
    // function() {
    //   myDomWindow = new DomWindow(testDiv)
    //   myDomWindow.init(30, 40, 50, 60)
    //   myDomWindow.initHeaderBar()
    //   myDomWindow.initContentContainer()
    //   myDomWindow.initStretchers()
    //   myDomWindow.containerElement.style.width = '345px'
    //   myDomWindow.containerElement.style.height = '543px'
    //   myDomWindow.callbackOnMouseUp()
    //   expect(myDomWindow.contentContainerElement.style.width)
    //     .toEqual('345px')
    //   expect(myDomWindow.contentContainerElement.style.height)
    //     .toEqual('513px')
    // }
  // )

  })

  it(`should have a attribute header bar, which gives the window
    additional abilities`, function() {

      expect(myDomWindow.initHeaderBar).toBeDefined()

    }
  )

  it('should have a function initHeaderBar', function() {

    expect(myDomWindow.initHeaderBar).toBeDefined()

  })
  
  describe("initHeaderBar", function() {

    it(`should call the header bars init function`, function() {

      myDomWindow.init(10, 20, 30, 40)
      myDomWindow.initHeaderBar()
      expect(myDomWindow.headerBar.containerElement).not.toEqual(null)

    })

    it(`should call the initMovablity function`, function() {

      myDomWindow.init(30, 40, 50, 60)
      spyOn(myDomWindow.headerBar, 'initMovability')
      myDomWindow.initHeaderBar()
      expect(myDomWindow.headerBar.initMovability).toHaveBeenCalled()

    })

    // it(`should move the content container element down and reduce
    //   its height`, function() {

    //     myDomWindow = new DomWindow(testDiv)
    //     myDomWindow.init(30, 40, 50, 60)
    //     myDomWindow.initHeaderBar()
    //     expect(myDomWindow.contentContainerElement.style.height)
    //       .toEqual('30px')
    //     expect(myDomWindow.contentContainerElement.style.top)
    //       .toEqual('30px')
    //   }
    // )

  })

  it(`should have a function appendChild for appending html dom
    elements to the window`, function() {

      expect(myDomWindow.appendChild).toBeDefined()

    }
  )

  // describe("appendChild", function() {

    // it(`should accept html elements for appending to the
    //   content container element`, function() {

    //     myDomWindow = new DomWindow(testDiv)
    //     myDomWindow.init(30, 40, 50, 60)
    //     myDomWindow.initContentContainer()
    //     spyOn(myDomWindow.contentContainerElement, 'appendChild')
    //     let myContent = document
    //       .createElementNS("http://www.w3.org/1999/xhtml", 'div')

    //     myDomWindow.appendChild(myContent)

    //     expect(myDomWindow.contentContainerElement.appendChild)
    //       .toHaveBeenCalledWith(myContent)

    //   }
    // )

  // })

  it(`should have a function assembleItWith to initialize the window
    after a passed configuration`, function() {

      expect(myDomWindow.assembleItWith).toBeDefined()

    }
  )

  describe("assembleItWith", function() {

    it(`should initialize the window with a default configuration by
      calling the init function`, function() {

        spyOn(myDomWindow, 'init')
        spyOn(myDomWindow, 'initContentContainer')
        myDomWindow.assembleItWith({ headerBar: false, isStretchable: false})
        expect(myDomWindow.init).toHaveBeenCalledWith(
          100, 100, 320, 240
        )

      }
    )

    it(`should call the function for initializing the header bar when
      the corresponding configuration flag is set`, function() {

        spyOn(myDomWindow, 'initHeaderBar')
        myDomWindow.assembleItWith()
        expect(myDomWindow.initHeaderBar).toHaveBeenCalled()

      }
    )

    it(`should call the initStrechers for initializing the window
      as a resizeable window when the corresponding flag is set`,
      function() {

        spyOn(myDomWindow, 'initStretchers')
        myDomWindow.assembleItWith()
        expect(myDomWindow.initStretchers).toHaveBeenCalled()

      }
    )

    it(`should return itself`, function() {
      expect(myDomWindow.assembleItWith()).toEqual(myDomWindow)
    })

    it(`should call the initContentContainer`, function() {

      myDomWindow = new DomWindow(testDiv)
      spyOn(myDomWindow, 'initContentContainer')
      myDomWindow.assembleItWith()
      expect(myDomWindow.initContentContainer).toHaveBeenCalled()

    })

  })

  it("should have a function callbackOnMouseDown", function() {

    expect(myDomWindow.callbackOnMouseDown)
      .toEqual(jasmine.any(Function))

  })

  describe("callbackOnMouseDown", function() {

    it(`should loop trough the any list via the reference to the
      domObjectTracker and set the domWindows zIndex to the greqatest
      found value`, function() {

        let anyList = [
          { zIndex: 2 },
          { zIndex: 1 },
          { zIndex: 3 },
          { zIndex: 0 },
          { zIndex: 0 },
          { zIndex: 4 }
        ]

        let myDummyObjectTracker = {
          any: anyList
        }

        myDomWindow.domObjectTracker = myDummyObjectTracker

        myDomWindow.containerElement = {
          style: { zIndex: "" }
        }

        myDomWindow.callbackOnMouseDown()

        expect(myDomWindow.zIndex).toEqual(5)
        expect(myDomWindow.containerElement.style.zIndex).toEqual('5')

      }
    )

  })

})
