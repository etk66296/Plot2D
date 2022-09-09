describe("DomSingleDirBorderScaler", function() {
  var myDomSingleDirBorderScaler

  beforeEach(function() {

    myDomSingleDirBorderScaler = new DomSingleDirBorderScaler(
      document.createElementNS("http://www.w3.org/1999/xhtml", 'div'),
      'N'
    )


  })

  it("should extend DomBorderScaler", function() {

    expect(myDomSingleDirBorderScaler.__proto__.__proto__.constructor.name)
      .toEqual('DomBorderScaler')

  })

  it(`should initialize the edge type to the passed direction
    character N, E, S and West with the second argument in the
    constructor`, function() {

      myDomSingleDirBorderScaler = new DomSingleDirBorderScaler(null, 'N')
      expect(myDomSingleDirBorderScaler.edgeSide).toEqual('N')
      myDomSingleDirBorderScaler = new DomSingleDirBorderScaler(null, 'E')
      expect(myDomSingleDirBorderScaler.edgeSide).toEqual('E')
      myDomSingleDirBorderScaler = new DomSingleDirBorderScaler(null, 'S')
      expect(myDomSingleDirBorderScaler.edgeSide).toEqual('S')
      myDomSingleDirBorderScaler = new DomSingleDirBorderScaler(null, 'W')
      expect(myDomSingleDirBorderScaler.edgeSide).toEqual('W')

    }
  )

  it(`should log an error when die edge type is not one of the
    characters N, E, S and W`, function() {

      spyOn(window.console, 'error')
      myDomSingleDirBorderScaler = new DomSingleDirBorderScaler(null, 'V')
      expect(window.console.error).toHaveBeenCalledWith(
        'V is not a valid edge side character (allowed: N, E, S, W)'
      )

    }
  )

  describe("init", function() {

    it(`should initialize the position attributes x and y, as well
      as the width and height of the scaler`, function() {

        myDomSingleDirBorderScaler.init(1, 2, 3, 4)
        expect(myDomSingleDirBorderScaler.x)
          .toEqual(1)
        expect(myDomSingleDirBorderScaler.y)
          .toEqual(2)
        expect(myDomSingleDirBorderScaler.w)
          .toEqual(3)
        expect(myDomSingleDirBorderScaler.h)
          .toEqual(4)

      }
    )

    it("should add an mousemove eventlistener to the document",
      function() {

        spyOn(document, 'addEventListener')
        myDomSingleDirBorderScaler.init(1, 2, 3, 4)
        expect(document.addEventListener).toHaveBeenCalledWith(
          'mousemove', jasmine.any(Function)
        )


      }
    )

   
    it(`should call the member function callbackOnMouseMove
      when the mousemove event is triggered` , function() {

        spyOn(myDomSingleDirBorderScaler, 'callbackOnMouseMove')
          .withArgs(jasmine.any(Object))
        myDomSingleDirBorderScaler.init(1, 2, 3, 4)
        myDomSingleDirBorderScaler.edgeSide = 'S'
        document.dispatchEvent(new Event('mousemove'))
        expect(myDomSingleDirBorderScaler.callbackOnMouseMove)
          .toHaveBeenCalledWith(jasmine.any(Object))
        

      }
    )

    it(`should set its container element the cursor style to
      'n-resize' when the edge style is set to 'N`, function() {

        myDomSingleDirBorderScaler.init(1, 2, 3, 4)
        expect(myDomSingleDirBorderScaler
          .containerElement.style.cursor).toEqual('n-resize')

      }
    )

    it(`should set its container element the cursor style to
      's-resize' when the edge style is set to 'S`, function() {

        myDomSingleDirBorderScaler.edgeSide = 'S'
        myDomSingleDirBorderScaler.init(1, 2, 3, 4)
        expect(myDomSingleDirBorderScaler
          .containerElement.style.cursor).toEqual('s-resize')

      }
    )

    it(`should set its container element the cursor style to
      'e-resize' when the edge style is set to 'E`, function() {

        myDomSingleDirBorderScaler.edgeSide = 'E'
        myDomSingleDirBorderScaler.init(1, 2, 3, 4)
        expect(myDomSingleDirBorderScaler
          .containerElement.style.cursor).toEqual('e-resize')

      }
    )

    it(`should set its container element the cursor style to
      'w-resize' when the edge style is set to 'W`, function() {

        myDomSingleDirBorderScaler.edgeSide = 'W'
        myDomSingleDirBorderScaler.init(1, 2, 3, 4)
        expect(myDomSingleDirBorderScaler
          .containerElement.style.cursor).toEqual('w-resize')

      }
    )

  })

  describe("destroy", function() {

    it(`should call the destroy function of the super class`,
      function() {

        spyOn(DomBorderScaler.prototype, 'destroy')
        myDomSingleDirBorderScaler.destroy()
        expect(DomBorderScaler.prototype.destroy).toHaveBeenCalled()

    })

    it(`should remove the documents mousemove event listener`,
      function() {

        spyOn(DomBorderScaler.prototype, 'destroy')
        spyOn(document, 'removeEventListener')
        myDomSingleDirBorderScaler.isInitialized = true
        myDomSingleDirBorderScaler.destroy()
        expect(document.removeEventListener)
          .toHaveBeenCalledWith('mousemove', myDomSingleDirBorderScaler.callbackOnMouseMove)

      }
    )

    it(`should not remove any event listener when isInitialized is
      cleared`, function() {

        spyOn(DomBorderScaler.prototype, 'destroy')
        spyOn(document, 'removeEventListener')
        myDomSingleDirBorderScaler.isInitialized = false
        myDomSingleDirBorderScaler.destroy()
        expect(document.removeEventListener).not.toHaveBeenCalled()


      }
    )

  })

  it(`should have a event function which should be called with the
    initialized mousemove event`, function() {
      
      expect(myDomSingleDirBorderScaler.callbackOnMouseMove)
        .toEqual(jasmine.any(Function))

    }
  )

  describe("callbackOnMouseMove", function() {

    var mouseMoveEventObj

    beforeAll(function() {
      mouseMoveEventObj = {

        preventDefault: function() { }

      }
    })

    it(`should call the prevent default function of the passed
      mouse move event object`, function() {

        
        spyOn(mouseMoveEventObj, "preventDefault")
        
        myDomSingleDirBorderScaler.callbackOnMouseMove(
          mouseMoveEventObj
        )

        expect(mouseMoveEventObj.preventDefault)
          .toHaveBeenCalled()

      }
    )

    it(`should do nothing when the attribute mouseIsDown is set to
      false`, function() {
        spyOn(myDomSingleDirBorderScaler, 'stretchParentFromTopBy')
        spyOn(myDomSingleDirBorderScaler, 'stretchParentFromBottomBy')
        spyOn(myDomSingleDirBorderScaler, 'stretchParentFromLeftBy')
        spyOn(myDomSingleDirBorderScaler, 'stretchParentFromRightBy')
        myDomSingleDirBorderScaler.mouseIsDown = false

        myDomSingleDirBorderScaler.callbackOnMouseMove(
          mouseMoveEventObj
        )
        expect(myDomSingleDirBorderScaler.stretchParentFromTopBy)
          .not.toHaveBeenCalled()
        expect(myDomSingleDirBorderScaler.stretchParentFromBottomBy)
          .not.toHaveBeenCalled()
        expect(myDomSingleDirBorderScaler.stretchParentFromLeftBy)
          .not.toHaveBeenCalled()
        expect(myDomSingleDirBorderScaler.stretchParentFromRightBy)
          .not.toHaveBeenCalled()

      }
    )
    
    it(`should do nothing when the attribute mouseIsDown is set but
      the edgeSide is not set to 'N', 'E', 'S' or 'W'`, function() {
        spyOn(myDomSingleDirBorderScaler, 'stretchParentFromTopBy')
        spyOn(myDomSingleDirBorderScaler, 'stretchParentFromBottomBy')
        spyOn(myDomSingleDirBorderScaler, 'stretchParentFromLeftBy')
        spyOn(myDomSingleDirBorderScaler, 'stretchParentFromRightBy')
        myDomSingleDirBorderScaler.mouseIsDown = true
        myDomSingleDirBorderScaler.edgeSide = 'H'


        myDomSingleDirBorderScaler.callbackOnMouseMove(
          mouseMoveEventObj
        )
        expect(myDomSingleDirBorderScaler.stretchParentFromTopBy)
          .not.toHaveBeenCalled()
        expect(myDomSingleDirBorderScaler.stretchParentFromBottomBy)
          .not.toHaveBeenCalled()
        expect(myDomSingleDirBorderScaler.stretchParentFromLeftBy)
          .not.toHaveBeenCalled()
        expect(myDomSingleDirBorderScaler.stretchParentFromRightBy)
          .not.toHaveBeenCalled()
      }
    )

    it(`should call the super class function stretchParentFromTopBy
      when the attribute mouseIsDown is true and the edgeSide is
      set to 'N'`, function() {

        spyOn(myDomSingleDirBorderScaler, 'stretchParentFromTopBy')
        myDomSingleDirBorderScaler.mouseIsDown = true
        myDomSingleDirBorderScaler.callbackOnMouseMove(
          mouseMoveEventObj
        )
        expect(myDomSingleDirBorderScaler.stretchParentFromTopBy)
          .toHaveBeenCalled()

      }
    )

    it(`should call the super class function stretchParentFromBottomBy
      when the attribute mouseIsDown is true and the edgeSide is
      set to 'S'`, function() {

        spyOn(myDomSingleDirBorderScaler, 'stretchParentFromBottomBy')
        myDomSingleDirBorderScaler.mouseIsDown = true
        myDomSingleDirBorderScaler.edgeSide = 'S'
        myDomSingleDirBorderScaler.callbackOnMouseMove(
          mouseMoveEventObj
        )
        expect(myDomSingleDirBorderScaler.stretchParentFromBottomBy)
          .toHaveBeenCalled()

      }
    )

    it(`should call the super class function stretchParentFromLeftBy
      when the attribute mouseIsDown is true and the edgeSide is
      set to 'W'`, function() {

        spyOn(myDomSingleDirBorderScaler, 'stretchParentFromLeftBy')
        myDomSingleDirBorderScaler.mouseIsDown = true
        myDomSingleDirBorderScaler.edgeSide = 'W'
        myDomSingleDirBorderScaler.callbackOnMouseMove(
          mouseMoveEventObj
        )
        expect(myDomSingleDirBorderScaler.stretchParentFromLeftBy)
          .toHaveBeenCalled()

      }
    )

    it(`should call the super class function stretchParentFromRightBy
      when the attribute mouseIsDown is true and the edgeSide is
      set to 'E'`, function() {

        spyOn(myDomSingleDirBorderScaler, 'stretchParentFromRightBy')
        myDomSingleDirBorderScaler.mouseIsDown = true
        myDomSingleDirBorderScaler.edgeSide = 'E'
        myDomSingleDirBorderScaler.callbackOnMouseMove(
          mouseMoveEventObj
        )
        expect(myDomSingleDirBorderScaler.stretchParentFromRightBy)
          .toHaveBeenCalled()

      }
    )

  })


})
