describe("DomBuilder", function() {
  var myDomBuilder

  beforeEach(function() {

    myDomBuilder = new DomBuilder()

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


  it("should extend Builder", function() {

    expect(myDomBuilder.__proto__.__proto__.constructor.name)
      .toEqual('Builder')

  })

  it(`should have e method for creating a moveable dom window`,
    function() {

      expect(myDomBuilder.produceWindow).toBeDefined()

    }
  )

  describe("produceWindow", function() {

    it(`should return a new domWindow instance with the passed html
      element`, function() {

      let win = myDomBuilder.produceWindow(testDiv)
      expect(win.parentElement).toEqual(testDiv)

    })

  })

})
