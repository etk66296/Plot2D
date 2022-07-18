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

    it(`should set the overflow property of the container element
      to scroll`, function() {

        myDisplay.init()
        expect(myDisplay.containerElement.style.overflow)
          .toEqual('scroll')

      }
    )

    it(`should set the height to the same value as the parent
      element's height`, function() {
        
        myDisplay.init()
        expect(myDisplay.containerElement.style.width)
          .toEqual(myDisplay.parentElement.style.width)

      }
    )

  })

})
