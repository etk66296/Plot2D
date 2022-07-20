describe("Display2D", function() {
  var myDisplay2D
  var testDiv
  var testContainer

  beforeEach(function() {

    myDisplay2D = new Display2D(testDiv)

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

  it("should extend PerformanceDisplay", function() {

    expect(myDisplay2D.__proto__.__proto__.constructor.name)
      .toEqual('PerformanceDisplay')

  })

  describe("init", function() {

    it("should request a context 2d from the canvas container",
      function() {

        myDisplay2D.init()

        expect(myDisplay2D.context.constructor.name)
          .toEqual("CanvasRenderingContext2D")

      }
    )

  })

  it("should have a function appendChild", function() {
    expect(myDisplay2D.appendChild).toBeDefined()
  })

  // describe("appendChild", function() {



  // })

  

})
