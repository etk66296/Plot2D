describe("DomAbsolute", function() {
  var myDomAbsolute

  beforeEach(function() {

    myDomAbsolute = new DomAbsolute()

  })

  it("should extend DomContainer", function() {

    expect(myDomAbsolute.__proto__.__proto__.constructor.name)
      .toEqual('DomContainer')

  })

  it("should have an attribute posX and define it with 0", function() {

    expect(myDomAbsolute.x).toBeDefined()
    expect(myDomAbsolute.x).toEqual(0)

  })

  it("should have an attribute posY and define it with 0", function() {

    expect(myDomAbsolute.y).toBeDefined()
    expect(myDomAbsolute.y).toEqual(0)

  })

  it("should have an attribute for the width of the containerElement",
    function() {

      expect(myDomAbsolute.w).toBeDefined()
      expect(myDomAbsolute.w).toEqual(0)

    }
  )

  it(`should have an attribute for the height of the
    containerElement`, function() {

      expect(myDomAbsolute.h).toBeDefined()
      expect(myDomAbsolute.h).toEqual(0)

    }
  )

  describe("init", function() {

    beforeEach(function() {

      myDomAbsolute = new DomAbsolute(document.createElementNS(
        "http://www.w3.org/1999/xhtml",
        'div'
      ))
  
    })

    it(`call the parents init function`, function() {
        
        spyOn(DomContainer.prototype, 'init').and.callThrough()
        myDomAbsolute.init()
        expect(DomContainer.prototype.init).toHaveBeenCalled()

      }
    )

    it(`should set the position style of the container element on
      'absolute`, function() {

        myDomAbsolute.init()
        expect(myDomAbsolute.containerElement.style.position)
          .toEqual('absolute')

      }
    )

    it("should set the width style of the container element",
      function() {

        myDomAbsolute.w = 10
        myDomAbsolute.init()
        expect(myDomAbsolute.containerElement.style.width)
          .toEqual(String(10) + 'px')

      }
    )

    it("should set the height style of the container element",
      function() {

        myDomAbsolute.h = 11
        myDomAbsolute.init()
        expect(myDomAbsolute.containerElement.style.height)
          .toEqual(String(11) + 'px')

      }
    )

  })

  describe("destroy", function() {

    it(`should call the destroy functoin of the super class`,
      function() {

        spyOn(DomContainer.prototype, 'destroy')
        myDomAbsolute.destroy()
        expect(DomContainer.prototype.destroy).toHaveBeenCalled()

    })

  })

  it("should have a function for setting the x position", function() {

      expect(myDomAbsolute.setX).toEqual(jasmine.any(Function))

    }
  )

  it("should have a function for setting the y position", function() {

      expect(myDomAbsolute.setY).toEqual(jasmine.any(Function))

    }
  )

  describe("setX and setY", function() {

    beforeEach(function() {

      myDomAbsolute = new DomAbsolute(document.createElementNS(
        "http://www.w3.org/1999/xhtml",
        'div'
      ))

      myDomAbsolute.init()
  
    })

    it("should overwrite the attribute x with the passed value", 
      function() {

        myDomAbsolute.setX(4)
        expect(myDomAbsolute.x).toEqual(4)

      }
    )

    it(`should set the containerElements left position style
      attribute`, function() {

        myDomAbsolute.setX(5)
        expect(myDomAbsolute.containerElement.style.left)
          .toEqual('5px')

      }
    )

    it("should overwrite the attribute y with the passed value", 
      function() {

        myDomAbsolute.setY(6)
        expect(myDomAbsolute.y).toEqual(6)

      }
    )

    it(`should set the containerElements top position style
      attribute`, function() {

        myDomAbsolute.setY(7)
        expect(myDomAbsolute.containerElement.style.top)
          .toEqual('7px')

      }
    )

  })

  it("should have a function for setting the width", function() {

      expect(myDomAbsolute.setW).toEqual(jasmine.any(Function))

    }
  )

  it("should have a function for setting the height", function() {

      expect(myDomAbsolute.setH).toEqual(jasmine.any(Function))

    }
  )

  describe("setW and setH", function() {

    beforeEach(function() {

      myDomAbsolute = new DomAbsolute(document.createElementNS(
        "http://www.w3.org/1999/xhtml",
        'div'
      ))

      myDomAbsolute.init()
  
    })

    it("should overwrite the attribute w with the passed value", 
      function() {

        myDomAbsolute.setW(299)
        expect(myDomAbsolute.w).toEqual(299)

      }
    )

    it("should set the containerElements width style attribute",
      function() {

        myDomAbsolute.setW(301)
        expect(myDomAbsolute.containerElement.style.width)
          .toEqual('301px')

      }
    )

    it("should overwrite the attribute height with the passed value", 
      function() {

        myDomAbsolute.setH(55)
        expect(myDomAbsolute.h).toEqual(55)

      }
    )

    it("should set the containerElements height style attribute",
      function() {

        myDomAbsolute.setH(46)
        expect(myDomAbsolute.containerElement.style.height)
          .toEqual('46px')

      }
    )

  })




})
