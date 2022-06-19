describe("DomWindow", function() {
  var myDomWindow

  beforeEach(function() {

    myDomWindow = new DomWindow(
      document.createElementNS("http://www.w3.org/1999/xhtml", 'div')
    )

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

  })

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
          .toHaveBeenCalledWith(0, 4, 400, 8)

      }
    )

    it(`should call the init function of the attribute
      rightStretcher`, function() {

        myDomWindow.init(100, 100, 400, 200)
        spyOn(myDomWindow.rightStretcher, 'init')
        myDomWindow.initStretchers()
        expect(myDomWindow.rightStretcher.init)
          .toHaveBeenCalledWith(400, 0, 4, 200)

      }
    )

    it(`should call the init function of the attribute
      bottomStretcher`, function() {

        myDomWindow.init(100, 100, 400, 200)
        spyOn(myDomWindow.bottomStretcher, 'init')
        myDomWindow.initStretchers()
        expect(myDomWindow.bottomStretcher.init)
          .toHaveBeenCalledWith(0, 200, 400, 4)

      }
    )

    it(`should call the init function of the attribute
      leftStretcher`, function() {

        myDomWindow.init(100, 100, 400, 200)
        spyOn(myDomWindow.leftStretcher, 'init')
        myDomWindow.initStretchers()
        expect(myDomWindow.leftStretcher.init)
          .toHaveBeenCalledWith(0, 0, 4, 200)

      }
    )

    it(`should call the init function of the attribute
      topRightStretcher`, function() {

        myDomWindow.init(100, 100, 400, 200)
        spyOn(myDomWindow.topRightStretcher, 'init')
        myDomWindow.initStretchers()
        expect(myDomWindow.topRightStretcher.init)
          .toHaveBeenCalledWith(404, -4, 8, 8)

      }
    )

    it(`should call the init function of the attribute
      bottomRightStretcher`, function() {

        myDomWindow.init(100, 100, 400, 200)
        spyOn(myDomWindow.bottomRightStretcher, 'init')
        myDomWindow.initStretchers()
        expect(myDomWindow.bottomRightStretcher.init)
          .toHaveBeenCalledWith(404, 204, 8, 8)

      }
    )

    it(`should call the init function of the attribute
      bottomLeftStretcher`, function() {

        myDomWindow.init(100, 100, 400, 200)
        spyOn(myDomWindow.bottomLeftStretcher, 'init')
        myDomWindow.initStretchers()
        expect(myDomWindow.bottomLeftStretcher.init)
          .toHaveBeenCalledWith(-4, 204, 8, 8)

      }
    )

    it(`should call the init function of the attribute
      topLeftStretcher`, function() {

        myDomWindow.init(100, 100, 400, 200)
        spyOn(myDomWindow.topLeftStretcher, 'init')
        myDomWindow.initStretchers()
        expect(myDomWindow.topLeftStretcher.init)
          .toHaveBeenCalledWith(-4, -4, 8, 8)

      }
    )



  })


})
