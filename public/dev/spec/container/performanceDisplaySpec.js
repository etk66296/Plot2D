describe("PerformanceDisplay", function() {
  var myPerformanceDisplay
  var testDiv
  var testContainer

  beforeEach(function() {

    myPerformanceDisplay = new PerformanceDisplay(testDiv)

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

    expect(myPerformanceDisplay.__proto__.__proto__.constructor.name)
      .toEqual('Display')

  })

  it(`should set the element type to canvas`, function() {

    expect(myPerformanceDisplay.elementType).toEqual('canvas')



  })

  it(`should have an attribute context for holding a reference to
    the canvas context 2d`, function() {

      expect(myPerformanceDisplay.context).toEqual(null)

    }
  )

})
