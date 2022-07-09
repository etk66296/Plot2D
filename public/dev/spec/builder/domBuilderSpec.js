describe("DomBuilder", function() {
  var myDomBuilder
  var myDomObjectTracker

  beforeEach(function() {

    myDomObjectTracker =  {
      zIndexCounter:  0,
      add: () => {
    
      }
    }
    myDomBuilder = new DomBuilder(myDomObjectTracker)

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

  it(`should have a member domObjectTracker instance, which should
    be passed as the first constructor argument`, function() {

      let myDummyObjectTracker = { object: 'tracker' }
      let myTestBuilder = new DomBuilder(myDummyObjectTracker)
      expect(myTestBuilder.domObjectTracker)
        .toEqual(myDummyObjectTracker)

    }
  )

  it(`should have e method for creating a moveable dom window`,
    function() {

      expect(myDomBuilder.produceWindowOn).toBeDefined()

    }
  )

  describe("produceWindowOn", function() {

    it(`should produce a new domWindow instance with the passed html
      element`, function() {

      myDomBuilder.produceWindowOn(testDiv)
      expect(myDomBuilder.productionLine.parentElement)
        .toEqual(testDiv)

    })

    it(`should add the production to the domObjectTracker`,
      function() {

        spyOn(myDomBuilder.domObjectTracker, 'add')
        myDomBuilder.produceWindowOn(testDiv)
        expect(myDomBuilder.domObjectTracker.add)
          .toHaveBeenCalled()

      }
    )

  })

  it(`should have a function and which should return the current
    production`, function() {

      expect(myDomBuilder.and).toBeDefined()

    }
  )

  describe("and", function() {

    it(`should return the current product in production line`,
      function() {

      myDomBuilder.productionLine = 102

      expect(myDomBuilder.and()).toEqual(myDomBuilder.productionLine)

    })

  })

})
