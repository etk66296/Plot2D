describe("StandardDisplay", function() {
  var myStandardDisplay
  var testDiv
  var testContainer

  beforeEach(function() {

    myStandardDisplay = new StandardDisplay(testDiv)

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


  it("should extend Display", function() {

    expect(myStandardDisplay.__proto__.__proto__.constructor.name)
      .toEqual('Display')

  })

  describe("init", function() {

    it(`should set the overflow property of the container element
      to scroll`, function() {

        myStandardDisplay.init()
        expect(myStandardDisplay.containerElement.style.overflow)
          .toEqual('scroll')

      }
    )

  })

  it(`should have a function appendChild for adding elements to
    the display element`, function() {

      expect(myStandardDisplay.appendChild).toBeDefined()

    }
  )

  describe("appendChild", function() {

    it(`should call the container elements appendChild function
      and pass trough the arguments element`, function() {

        myStandardDisplay.init()
        spyOn(myStandardDisplay.containerElement, 'appendChild')
        let testDummy = document.createElementNS(
          "http://www.w3.org/1999/xhtml", 'div'
        )
        myStandardDisplay.appendChild(testDummy)
        expect(myStandardDisplay.containerElement.appendChild)
          .toHaveBeenCalledWith(testDummy)

      }
    )

  })

})
