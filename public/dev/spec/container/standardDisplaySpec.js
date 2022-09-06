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

  describe("destroy", function() {

    it("should call removeChild for each child Element", function() {

      spyOn(Display.prototype, 'destroy')

      let containerElem = {
        firstChild: null,
        childs: [1, 2, 3],
        removeChild: undefined
      }
      containerElem.firstChild = containerElem.childs[0]
      containerElem.removeChild = function() {
        containerElem.childs.shift()
        if(containerElem.childs.length > 0) {
          containerElem.firstChild = containerElem.childs[0]
        } else {
          containerElem.firstChild = 0
        }
      }
      myStandardDisplay.containerElement = containerElem
      myStandardDisplay.isInitialized = true
  
      spyOn(myStandardDisplay.containerElement, 'removeChild').and.callThrough()
      myStandardDisplay.destroy()
      expect(myStandardDisplay.containerElement.removeChild).toHaveBeenCalledTimes(3)

    })

    it("should skip removing childs when isInitialized is cleared", function() {

      spyOn(Display.prototype, 'destroy')

      let containerElem = {
        firstChild: null,
        childs: [1, 2, 3],
        removeChild: undefined
      }
      containerElem.firstChild = containerElem.childs[0]
      containerElem.removeChild = function() {
        containerElem.childs.shift()
        if(containerElem.childs.length > 0) {
          containerElem.firstChild = containerElem.childs[0]
        } else {
          containerElem.firstChild = 0
        }
      }
      myStandardDisplay.containerElement = containerElem
      myStandardDisplay.isInitialized = false
  
      spyOn(myStandardDisplay.containerElement, 'removeChild').and.callThrough()
      myStandardDisplay.destroy()
      expect(myStandardDisplay.containerElement.removeChild).not.toHaveBeenCalled()

    })

    it("should call the super class destroy", function() {

      spyOn(Display.prototype, 'destroy')
      myStandardDisplay.destroy()
      expect(Display.prototype.destroy).toHaveBeenCalled()

    })

  })

  it(`should have a function appendChild for adding elements to
    the display element`, function() {

      expect(myStandardDisplay.appendChild).toBeDefined()

    }
  )

  describe("appendChild", function() {

    it(`should accept DomStage Objects and append
      all the members to the display`, function() {

        myStandardDisplay.init()

        let dummyStage = {
          constructor: { name: "DomStage" },
          members: [ {
            displayElement: () => { return new Image }
          }, {
            displayElement: () => { return new Image }
          } ]
        }

        spyOn(dummyStage.members, 'forEach')

        myStandardDisplay.appendChild(dummyStage)

        expect(dummyStage.members.forEach).toHaveBeenCalled()

        dummyStage = {
          constructor: { name: "DomStage" },
          members: [ {
            displayElement: () => { return new Image }
          }, {
            displayElement: () => { return new Image }
          } ]
        }

        spyOn(myStandardDisplay.containerElement, "appendChild")

        myStandardDisplay.appendChild(dummyStage)
        expect(myStandardDisplay.containerElement.appendChild)
          .toHaveBeenCalledTimes(2)

      }
    )

  })

})
