describe("FrameController", function() {
  var myFrameController

  beforeEach(function() {
    myFrameController = new FrameController()
  })

  it("should extend Plot2DAny", function() {

    expect(myFrameController.__proto__.__proto__.constructor.name)
      .toEqual('Plot2DAny')

  })

  describe("member attributes", function() {

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

    it("should have an array for saving the stages to control",
      function() {
        expect(myFrameController.stages).toBeDefined()
        expect(myFrameController.stages).toEqual(jasmine.any(Array))
      }
    )

    it(`should have an attribute stop, which allows to interrupt the
      recursion in the function go`, function() {

        expect(myFrameController.stop).toBeDefined()
        expect(myFrameController.stop).toEqual(false)

      }
    )

    it(`should have an attribute stepsLeftToStop, which controlls the number of
        recursions go will run after trigger it.`, function() {

        expect(myFrameController.stepsLeftToStop).toBeDefined()

      }
    )

    it(`should have an attribute to block the recursion of go. This may be
      helpful for debug purposes`, function() {

        expect(myFrameController.stuntGoRecursion).toBeDefined()
        expect(myFrameController.stuntGoRecursion).toBeFalsy()

    })
    
    // all following attributes have the default value 0.0

    it(`should have an attribute, which safes the frame start time on the
      beginning of each iteration`, function() {

        expect(myFrameController.frameBeginTimeMs).toBeDefined()
        expect(myFrameController.frameBeginTimeMs).toEqual(0.0)

      }
    )

    it(`should have an attribute, which safes the frame stop time on the end
      of each iteration`, function() {

        expect(myFrameController.frameEndTimeMs).toBeDefined()
        expect(myFrameController.frameEndTimeMs).toEqual(0.0)

      }
    )

    it(`should have an attribute, which safes the frame stop time on the end
      of each iteration when the frame takes more time than the expecation`,
      function() {

        expect(myFrameController.actualframeEndTimeMs).toBeDefined()
        expect(myFrameController.actualframeEndTimeMs).toEqual(0.0)

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

  describe("go", function() {


    beforeEach(function() {

      myFrameController.stages = [
        {
          name: "menu",
          update: () => { let update = "update" },
          draw: () => { let draw = "draw" }
        },
        {
          name: "game",
          update: () => { let update = "update" },
          draw: () => { let draw = "draw" }
        }
      ]

    })

    it(`should loop trough the containing stages and call their update and draw
        functions`, 
      function() {

        spyOn(myFrameController.stages[0], "update")
        spyOn(myFrameController.stages[1], "update")
        spyOn(myFrameController.stages[0], "draw")
        spyOn(myFrameController.stages[1], "draw")
        
        myFrameController.go()
        
        expect(myFrameController.stages[0].update).toHaveBeenCalled()
        expect(myFrameController.stages[1].update).toHaveBeenCalled()        
        expect(myFrameController.stages[0].draw).toHaveBeenCalled()
        expect(myFrameController.stages[1].draw).toHaveBeenCalled()
        
        myFrameController.stop = true

      }
    )

    it(`should record the frame beginning time at the very beginning of the go
        function`,
      function() {

        spyOn(performance, "now").and.returnValue(12345678)
        myFrameController.go()
        expect(performance.now).toHaveBeenCalled()
        expect(myFrameController.frameBeginTimeMs).toEqual(12345678)
        
        myFrameController.stop = true

      }
    )

    it(`should record the frame end time after updating the and drawing the
      stages`,
      function() {

        spyOn(performance, "now").and.returnValue(87654321)
        myFrameController.go()
        expect(performance.now).toHaveBeenCalled()
        expect(myFrameController.frameEndTimeMs).toEqual(87654321)
        
        
        myFrameController.stop = true

      }
    )

    it(`should calculate the elapsed time by building the deviation from the
      begin frame time and end frame time and safe it to the attribute
      frameDeltaMs`, function() {

        spyOn(performance, "now")
          .and.returnValues(10 /*1. call*/, 20 /*2. call*/)
        myFrameController.go()
        expect(myFrameController.frameDeltaMs).toEqual(10)
        
        myFrameController.stop = true

      }
    )

    it(`should be possible to interrupt the recursion by setting a boolean
      attribute stop to true`, function() {

        myFrameController.stop = true
        spyOn(myFrameController.stages[0], "update")
        spyOn(myFrameController.stages[0], "draw")
        spyOn(myFrameController.stages[1], "draw")
        spyOn(myFrameController.stages[1], "update")
        
        myFrameController.go()
        
        expect(myFrameController.stages[0].update).not.toHaveBeenCalled()
        expect(myFrameController.stages[1].update).not.toHaveBeenCalled()
        expect(myFrameController.stages[0].draw).not.toHaveBeenCalled()
        expect(myFrameController.stages[1].draw).not.toHaveBeenCalled()
        
        
      }
    )

    it(`should add some grace time when the expected frame delta time is less
      than the defined frame time`, function() {

        myFrameController.expectedFrameTimeMs = 20
        spyOn(window, 'setTimeout')
        spyOn(performance, "now")
          .and.returnValues(10 /*1. call*/, 20 /*2. call*/)
        myFrameController.go()
        expect(window.setTimeout)
          .toHaveBeenCalledWith(jasmine.any(Function), 10)
        


      }
    )

    it(`should call requestAnimationFrame after the timeout has to be elapsed`,
      function(done) {
        myFrameController.expectedFrameTimeMs = 20
        spyOn(performance, "now")
          .and.returnValues(10 /*1. call*/, 20 /*2. call*/)
        spyOn(window, 'requestAnimationFrame')
        myFrameController.go()

        setTimeout(() => {
          expect(window.requestAnimationFrame)
            .toHaveBeenCalledWith(jasmine.any(Function))
          
          done()
        }, 30)
        
      }
    )

    it(`should do no recursion call of go when the attribute stuntGoRecursion
      is set to true. After stunt a recursion the stuntGoRecursion flag must be
      cleard again`, function() {

        spyOn(window, 'requestAnimationFrame')
        myFrameController.stuntGoRecursion = true
        myFrameController.go()
        expect(window.requestAnimationFrame).not.toHaveBeenCalled()
        expect(myFrameController.stuntGoRecursion).toBeFalsy()
        

      }
    )

    it(`should add no grace time for calling requestAnimationFrame when the
      frame delta time is equal or greater than the expected frame time`,
        function() {

        myFrameController.expectedFrameTimeMs = 5
        spyOn(performance, "now")
          .and.returnValues(10 /*1. call*/, 20 /*2. call*/)
        spyOn(window, 'requestAnimationFrame')
        myFrameController.go()
        
        expect(window.requestAnimationFrame)
          .toHaveBeenCalledWith(jasmine.any(Function))

      }
    )




    it(`should decrement the steps counter when it is greater than -1`, 
      function(done) {

        myFrameController.stepsLeftToStop = 4
        myFrameController.go()

        setTimeout(() => {
          expect(myFrameController.stepsLeftToStop).toEqual(-1)
          
          done()
        }, 200)

      }
    )

    it(`should save the performance time just before the request animationframe
      in case of timeout.`, function(done) {


        // with setTimeout
        myFrameController.expectedFrameTimeMs = 11
        spyOn(performance, "now")
          .and.returnValues(10 /*1. call*/, 20 /*2. call*/, 30 /*3. call*/)
        myFrameController.go()

        myFrameController.stop = true

        setTimeout(() => {
          expect(myFrameController.actualframeEndTimeMs).toEqual(30)
          done()
        }, 200)

      }
    )

    it(`should save the performance time just before the request animationframe
    when there is no need for a grace time`, function() {

        // without set timeout
        myFrameController.expectedFrameTimeMs = 5
        spyOn(performance, "now")
          .and.returnValues(10 /*1. call*/, 20 /*2. call*/, 30 /*3. call*/)
        myFrameController.go()
        myFrameController.stop = true
        expect(myFrameController.actualframeEndTimeMs).toEqual(30)

    })
    
  })

  
 

})

