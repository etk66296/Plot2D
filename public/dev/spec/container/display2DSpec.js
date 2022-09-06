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

    it(`should call the init function of the super class`,
      function() {

        let containerElem = {
          getContext: function(type) {

          }
        }

        spyOn(PerformanceDisplay.prototype, 'init')
        myDisplay2D.containerElement = containerElem
        spyOn(myDisplay2D.containerElement, 'getContext')
        myDisplay2D.init()
        expect(PerformanceDisplay.prototype.init).toHaveBeenCalled()

    })

  })

  describe("destroy", function() {

    it(`should call the destroy functoin of the super class`,
      function() {

        spyOn(PerformanceDisplay.prototype, 'destroy')
        myDisplay2D.destroy()
        expect(PerformanceDisplay.prototype.destroy).toHaveBeenCalled()

    })

  })

  it("should have a function appendChild", function() {
    expect(myDisplay2D.appendChild).toBeDefined()
  })

  describe("appendChild", function() {


    it(`should accept PerformanceStage Objects and append
      all the members to the display`, function() {

        myDisplay2D.init()

        let dummyStage = {
          constructor: { name: "PerformanceStage" },
          members: [ {
            displayElement: () => { return new Image }
          }, {
            displayElement: () => { return new Image }
          } ]
        }

        spyOn(dummyStage.members, 'forEach')

        myDisplay2D.appendChild(dummyStage)

        expect(dummyStage.members.forEach).toHaveBeenCalled()

        dummyStage = {
          constructor: { name: "PerformanceStage" },
          members: [ {
            displayElement: () => { return new Image }
          }, {
            displayElement: () => { return new Image }
          } ]
        }

        spyOn(myDisplay2D.context, "drawImage")

        myDisplay2D.appendChild(dummyStage)
        expect(myDisplay2D.context.drawImage)
          .toHaveBeenCalledTimes(2)

      }
    )


  })

  

})
