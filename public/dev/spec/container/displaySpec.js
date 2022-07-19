describe("Display", function() {
  
  var myDisplay
  var testDiv
  var testContainer

  beforeEach(function() {

    myDisplay = new Display(testDiv)

  })

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


  it("should extend DomContainer", function() {

    expect(myDisplay.__proto__.__proto__.constructor.name)
      .toEqual('DomContainer')
      Performance
  })

  describe("init", function() {

    it("should set the parents element position style to absolute",
      function() {

        myDisplay.init()
        expect(myDisplay.containerElement.style.position)
          .toEqual('absolute')


      }
    )

    it(`should set the width to the same value as the parent
      element's width`, function() {

        testDiv.style.width = '800px'
        myDisplay.init()
        expect(myDisplay.containerElement.style.width)
          .toEqual(myDisplay.parentElement.style.width)

      }
    )

    
    it(`should set the height to the same value as the parent
      element's height`, function() {

        testDiv.style.height = '400px'
        myDisplay.init()
        expect(myDisplay.containerElement.style.height)
          .toEqual(myDisplay.parentElement.style.height)

      }
    )

  })

  it(`should have a function resize, which sould balance the parents
    dimensions with the display element`, function() {

      expect(myDisplay.alignToParentSize).toBeDefined()

    }
  )

  describe("alignToParentSize", function() {

    it(`should update the witdth, so that parent and container
      has the same width`, function() {

        myDisplay.init()
        testDiv.style.width = "145px"
        myDisplay.alignToParentSize()
        expect(myDisplay.containerElement.style.width)
          .toEqual('145px')

      }
    )

    it(`should update the containers height, so that it fits
      to the parent containers size minus an optional passed
      offset from the top`, function() {

        myDisplay.init()
        testDiv.style.height = '452px'
        myDisplay.alignToParentSize()
        expect(myDisplay.containerElement.style.height)
          .toEqual('452px')

        myDisplay.alignToParentSize(32)
        expect(myDisplay.containerElement.style.height)
          .toEqual('420px')

      }
    )

  })

})
