describe("Plot2D", function() {
  var myPlot2DInstance

  beforeEach(function() {

    myPlot2DInstance = new Plot2D()

  })

  it("should extend Plot2DAny", function() {

    expect(myPlot2DInstance.__proto__.__proto__.constructor.name)
      .toEqual('Plot2DAny')

  })

  it("should have an attribute, which holds an instance of ObjectTracker",
    function() {
      
      expect(myPlot2DInstance.objectTracker).toBeDefined()

    }
  )

  it("should have an attribute, which holds an instance of ObjectTracker",
    function() {

      expect(myPlot2DInstance.frameCtrl).toBeDefined()

    }
  )

  it("should have an initialization function", function() {

    expect(myPlot2DInstance.init).toEqual(jasmine.any(Function))

  })


  describe("init", function() {

    it(`should create an instance of ObjectTracker and map it to the attribute
      objectTracker`, function() {
        myPlot2DInstance.init()
        expect(myPlot2DInstance.objectTracker.constructor.name)
          .toEqual("ObjectTracker")
      }
    )

    it(`should create an instance of FrameController and map it to the attribute
      frameCtrl`, function() {
        myPlot2DInstance.init()
        expect(myPlot2DInstance.frameCtrl.constructor.name)
          .toEqual("FrameController")
      }
    )

  })

})
