describe("DomWindow", function() {
  var myDomWindow

  beforeEach(function() {

    myDomWindow = new DomWindow()

  })

  it("should extend DomAbsolute", function() {

    expect(myDomWindow.__proto__.__proto__.constructor.name)
      .toEqual('DomAbsolute')

  })


  describe("init", function() {

    beforeEach(function() {

      myDomWindow = new DomWindow(document.createElementNS(
        "http://www.w3.org/1999/xhtml",
        'div'
      ))
  
    })

    it(`should have additional htmlElements representing the top,
    right, bottom and left border`, function() {

        expect(myDomWindow.borderTopElement).toBeDefined()
        expect(myDomWindow.borderRightElement).toBeDefined()
        expect(myDomWindow.borderBottomElement).toBeDefined()
        expect(myDomWindow.borderLeftElement).toBeDefined()
      
      }
    )

    it(`should have additional htmlElement representing the top-right,
      bottom-right, bottom-Left and top-left angle points`, function() {

        expect(myDomWindow.angleTopRightElement).toBeDefined()
        expect(myDomWindow.angleBottomRightElement).toBeDefined()
        expect(myDomWindow.angleBottomLeftElement).toBeDefined()
        expect(myDomWindow.angleTopLeftElement).toBeDefined()
      
      }
    )


    it("call the parents init function", function() {
        
        spyOn(DomAbsolute.prototype, 'init').and.callThrough()
        myDomWindow.init()
        expect(DomAbsolute.prototype.init).toHaveBeenCalled()

      }
    )

    it(`should set the four aerguments x, y, w, h, to the member
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

    it("should initialize the borders and angle html elements",
      function() {

        

      }
    )


  })

  it("should have an attribute for defining the background color",
    function() {

      expect(myDomWindow.bgC).toEqual('rgb(255, 255, 255)')

    }
  )

  



})