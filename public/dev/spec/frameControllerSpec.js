describe("FrameController", function() {
  var myFrameController

  beforeEach(function() {
    myFrameController = new FrameController()
  })

  it("should extend Plot2DAny", function() {

    expect(myFrameController.__proto__.__proto__.constructor.name)
      .toEqual('Plot2DAny')

  })

  describe("class attributes", function() {

    it(`should have an attribute which holds a value for the user set frames per
      second`, function() {

        expect(myFrameController.expectedFps).toBeDefined()

      }
    )

    it("should set a default value for the expected frames per second",
      function() {

        expect(myFrameController.expectedFps).toEqual(60.0)

      }
    )


    it(`should have an attribute holding the expected frame time in milli
      seconds`, function() {

        expect(myFrameController.expectedFrameTimeMs).toBeDefined()
        let myExpFrameTime = 1000 / myFrameController.expectedFps
        expect(myFrameController.expectedFrameTimeMs).toEqual(myExpFrameTime)

      }
    )

    it(`should calculate the correct frame time in milliseconds and safe it in
      the attribute expectedFrameTimeMs`, function() {

        let myExpFrameTime = 1000 / myFrameController.expectedFps
        expect(myFrameController.expectedFrameTimeMs).toEqual(myExpFrameTime)

      }
    )

    // all following attributes have the default value 0.0

    it(`should have an attribute, which safes the frame start time on the
      beginning of each iteration`, function() {

        expect(myFrameController.frameStartTimeMs).toBeDefined()
        expect(myFrameController.frameStartTimeMs).toEqual(0.0)

      }
    )

    it(`should have an attribute, which safes the frame stop time on the end
      of each iteration`, function() {

        expect(myFrameController.frameStopTimeMs).toBeDefined()
        expect(myFrameController.frameStopTimeMs).toEqual(0.0)

      }
    )

    it(`should have an attribute, which safes the frame stop time on the end
      of each iteration when the frame takes more time than the expecation`,
      function() {

        expect(myFrameController.actualFrameStopTimeMs).toBeDefined()
        expect(myFrameController.actualFrameStopTimeMs).toEqual(0.0)

      }
    )

    it("should have an attribute, which safes the time elapsed during a frame",
      function() {

        expect(myFrameController.frameDeltaMs).toBeDefined()
        expect(myFrameController.frameDeltaMs).toEqual(0.0)

      }
    )
    
  })

  it("should have a method to start the frame update recursion", function() {

    expect(myFrameController.go).toEqual(jasmine.any(Function))

  })

  
 

})

