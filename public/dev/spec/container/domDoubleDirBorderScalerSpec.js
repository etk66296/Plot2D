describe("DomDoubleDirBorderScaler", function() {
  var myDomDoubleDirBorderScaler

  beforeEach(function() {

    myDomDoubleDirBorderScaler = new DomDoubleDirBorderScaler(
      document.createElementNS("http://www.w3.org/1999/xhtml", 'div'),
      'NE'
    )

  })

  it("should extend DomBorderScaler", function() {

    expect(myDomDoubleDirBorderScaler.__proto__.__proto__.constructor.name)
      .toEqual('DomBorderScaler')

  })

  it(`should initialize the edge type to the passed direction
    character NE, SE, SW and NW with the second argument in the
    constructor`, function() {

      myDomDoubleDirBorderScaler = new DomDoubleDirBorderScaler(null, 'NE')
      expect(myDomDoubleDirBorderScaler.edgeSide).toEqual('NE')
      myDomDoubleDirBorderScaler = new DomDoubleDirBorderScaler(null, 'SE')
      expect(myDomDoubleDirBorderScaler.edgeSide).toEqual('SE')
      myDomDoubleDirBorderScaler = new DomDoubleDirBorderScaler(null, 'SW')
      expect(myDomDoubleDirBorderScaler.edgeSide).toEqual('SW')
      myDomDoubleDirBorderScaler = new DomDoubleDirBorderScaler(null, 'NW')
      expect(myDomDoubleDirBorderScaler.edgeSide).toEqual('NW')

    }
  )

  it(`should log an error when die edge type is not one of the
  characters NE, SE, SW and NW`, function() {

      spyOn(window.console, 'error')
      myDomDoubleDirBorderScaler = new DomDoubleDirBorderScaler(null, 'K')
      expect(window.console.error).toHaveBeenCalledWith(
        'K is not a valid edge side string (allowed: NE, SE, SW, NW)'
      )

    }
  )

  describe("init", function() {

    it(`should initialize the position attributes x and y, as well
      as the width and height of the scaler`, function() {

        myDomDoubleDirBorderScaler.init(10, 20, 30, 40)
        expect(myDomDoubleDirBorderScaler.x)
          .toEqual(10)
        expect(myDomDoubleDirBorderScaler.y)
          .toEqual(20)
        expect(myDomDoubleDirBorderScaler.w)
          .toEqual(30)
        expect(myDomDoubleDirBorderScaler.h)
          .toEqual(40)

      }
    )

    it("should add a mousemove eventlistener to the document",
      function() {

        spyOn(document, 'addEventListener')
        myDomDoubleDirBorderScaler.init(11, 22, 33, 44)
        expect(document.addEventListener).toHaveBeenCalledWith(
          'mousemove', jasmine.any(Function)
        )


      }
    )

    it(`should call the member function callbackOnMouseMove
      when the mousemove event is triggered` , function() {

        spyOn(myDomDoubleDirBorderScaler, 'callbackOnMouseMove')
          .withArgs(jasmine.any(Object))
        myDomDoubleDirBorderScaler.init(1, 2, 3, 4)
        myDomDoubleDirBorderScaler.edgeSide = 'SW'
        document.dispatchEvent(new Event('mousemove'))
        expect(myDomDoubleDirBorderScaler.callbackOnMouseMove)
          .toHaveBeenCalledWith(jasmine.any(Object))
        

      }
    )

    it(`should set the cursor style to 'ne-resize' when the edge
      style is set to 'NE' on the objects container element `,
        function() {

        myDomDoubleDirBorderScaler.init(1, 2, 3, 4)
        expect(myDomDoubleDirBorderScaler
          .containerElement.style.cursor).toEqual('ne-resize')

      }
    )

    it(`should set the cursor style to 'se-resize' when the edge
      style is set to 'SE' on the objects container element `,
        function() {
          
        myDomDoubleDirBorderScaler.edgeSide = 'SE'
        myDomDoubleDirBorderScaler.init(1, 2, 3, 4)
        expect(myDomDoubleDirBorderScaler
          .containerElement.style.cursor).toEqual('se-resize')

      }
    )

    it(`should set the cursor style to 'sw-resize' when the edge
      style is set to 'SW' on the objects container element `,
        function() {
          
        myDomDoubleDirBorderScaler.edgeSide = 'SW'
        myDomDoubleDirBorderScaler.init(1, 2, 3, 4)
        expect(myDomDoubleDirBorderScaler
          .containerElement.style.cursor).toEqual('sw-resize')

      }
    )

    it(`should set the cursor style to 'nw-resize' when the edge
      style is set to 'NW' on the objects container element `,
        function() {
          
        myDomDoubleDirBorderScaler.edgeSide = 'NW'
        myDomDoubleDirBorderScaler.init(1, 2, 3, 4)
        expect(myDomDoubleDirBorderScaler
          .containerElement.style.cursor).toEqual('nw-resize')

      }
    )



  })

  describe("destroy", function() {

    it(`should call the destroy function of the super class`,
      function() {

        spyOn(DomBorderScaler.prototype, 'destroy')
        myDomDoubleDirBorderScaler.destroy()
        expect(DomBorderScaler.prototype.destroy).toHaveBeenCalled()

    })

    it(`should remove the documents mousemove event listener`,
      function() {

        spyOn(DomBorderScaler.prototype, 'destroy')
        spyOn(document, 'removeEventListener')
        myDomDoubleDirBorderScaler.isInitialized = true
        myDomDoubleDirBorderScaler.destroy()
        expect(document.removeEventListener)
          .toHaveBeenCalledWith('mousemove', myDomDoubleDirBorderScaler.callbackOnMouseMove)

      }
    )

    it(`should not remove any event listener when isInitialized is
      cleared`, function() {

        spyOn(DomBorderScaler.prototype, 'destroy')
        spyOn(document, 'removeEventListener')
        myDomDoubleDirBorderScaler.isInitialized = false
        myDomDoubleDirBorderScaler.destroy()
        expect(document.removeEventListener).not.toHaveBeenCalled()


      }
    )

  })

  it(`should have a event function which should be called with the
    initialized mousemove event`, function() {
      
      expect(myDomDoubleDirBorderScaler.callbackOnMouseMove)
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
        
        myDomDoubleDirBorderScaler.callbackOnMouseMove(
          mouseMoveEventObj
        )

        expect(mouseMoveEventObj.preventDefault)
          .toHaveBeenCalled()

      }
    )

    it(`should call the super class functions stretchParentFromTopBy
      and stretchParentFromRightBy when the attribute mouseIsDown is
      true and the edgeSide is set to 'NE'`, function() {

        spyOn(myDomDoubleDirBorderScaler, 'stretchParentFromTopBy')
        spyOn(myDomDoubleDirBorderScaler, 'stretchParentFromRightBy')
        myDomDoubleDirBorderScaler.mouseIsDown = true
        myDomDoubleDirBorderScaler.callbackOnMouseMove(
          mouseMoveEventObj
        )
        expect(myDomDoubleDirBorderScaler.stretchParentFromTopBy)
          .toHaveBeenCalled()

        expect(myDomDoubleDirBorderScaler.stretchParentFromRightBy)
          .toHaveBeenCalled()

      }
    )

    it(`should call the super class functions
      stretchParentFromBottomBy and stretchParentFromRightBy when the
      attribute mouseIsDown is true and the edgeSide is set to 'SE'`,
      function() {

        spyOn(myDomDoubleDirBorderScaler, 'stretchParentFromBottomBy')
        spyOn(myDomDoubleDirBorderScaler, 'stretchParentFromRightBy')
        myDomDoubleDirBorderScaler.edgeSide = 'SE'
        myDomDoubleDirBorderScaler.mouseIsDown = true
        myDomDoubleDirBorderScaler.callbackOnMouseMove(
          mouseMoveEventObj
        )
        expect(myDomDoubleDirBorderScaler.stretchParentFromBottomBy)
          .toHaveBeenCalled()

        expect(myDomDoubleDirBorderScaler.stretchParentFromRightBy)
          .toHaveBeenCalled()

      }
    )

    it(`should call the super class functions
      stretchParentFromBottomBy and stretchParentFromLeftBy when the
      attribute mouseIsDown is true and the edgeSide is set to 'SW'`,
      function() {

        spyOn(myDomDoubleDirBorderScaler, 'stretchParentFromBottomBy')
        spyOn(myDomDoubleDirBorderScaler, 'stretchParentFromLeftBy')
        myDomDoubleDirBorderScaler.edgeSide = 'SW'
        myDomDoubleDirBorderScaler.mouseIsDown = true
        myDomDoubleDirBorderScaler.callbackOnMouseMove(
          mouseMoveEventObj
        )
        expect(myDomDoubleDirBorderScaler.stretchParentFromBottomBy)
          .toHaveBeenCalled()

        expect(myDomDoubleDirBorderScaler.stretchParentFromLeftBy)
          .toHaveBeenCalled()

      }
    )

    it(`should call the super class functions
      stretchParentFromTopBy and stretchParentFromLeftBy when the
      attribute mouseIsDown is true and the edgeSide is set to 'NW'`,
      function() {

        spyOn(myDomDoubleDirBorderScaler, 'stretchParentFromTopBy')
        spyOn(myDomDoubleDirBorderScaler, 'stretchParentFromLeftBy')
        myDomDoubleDirBorderScaler.edgeSide = 'NW'
        myDomDoubleDirBorderScaler.mouseIsDown = true
        myDomDoubleDirBorderScaler.callbackOnMouseMove(
          mouseMoveEventObj
        )
        expect(myDomDoubleDirBorderScaler.stretchParentFromTopBy)
          .toHaveBeenCalled()

        expect(myDomDoubleDirBorderScaler.stretchParentFromLeftBy)
          .toHaveBeenCalled()

      }
    )

    it(`should do nothing when the attribute mouseIsDown is set to
      false`, function() {
        spyOn(myDomDoubleDirBorderScaler, 'stretchParentFromTopBy')
        spyOn(myDomDoubleDirBorderScaler, 'stretchParentFromBottomBy')
        spyOn(myDomDoubleDirBorderScaler, 'stretchParentFromLeftBy')
        spyOn(myDomDoubleDirBorderScaler, 'stretchParentFromRightBy')
        myDomDoubleDirBorderScaler.mouseIsDown = false

        myDomDoubleDirBorderScaler.callbackOnMouseMove(
          mouseMoveEventObj
        )
        expect(myDomDoubleDirBorderScaler.stretchParentFromTopBy)
          .not.toHaveBeenCalled()
        expect(myDomDoubleDirBorderScaler.stretchParentFromBottomBy)
          .not.toHaveBeenCalled()
        expect(myDomDoubleDirBorderScaler.stretchParentFromLeftBy)
          .not.toHaveBeenCalled()
        expect(myDomDoubleDirBorderScaler.stretchParentFromRightBy)
          .not.toHaveBeenCalled()

      }
    )

    it(`should do nothing when the attribute mouseIsDown is set but
      the edgeSide is not set to 'NE', 'SE', 'SW' or 'NW'`,
      function() {
        spyOn(myDomDoubleDirBorderScaler, 'stretchParentFromTopBy')
        spyOn(myDomDoubleDirBorderScaler, 'stretchParentFromBottomBy')
        spyOn(myDomDoubleDirBorderScaler, 'stretchParentFromLeftBy')
        spyOn(myDomDoubleDirBorderScaler, 'stretchParentFromRightBy')
        myDomDoubleDirBorderScaler.mouseIsDown = true
        myDomDoubleDirBorderScaler.edgeSide = 'VW'


        myDomDoubleDirBorderScaler.callbackOnMouseMove(
          mouseMoveEventObj
        )
        expect(myDomDoubleDirBorderScaler.stretchParentFromTopBy)
          .not.toHaveBeenCalled()
        expect(myDomDoubleDirBorderScaler.stretchParentFromBottomBy)
          .not.toHaveBeenCalled()
        expect(myDomDoubleDirBorderScaler.stretchParentFromLeftBy)
          .not.toHaveBeenCalled()
        expect(myDomDoubleDirBorderScaler.stretchParentFromRightBy)
          .not.toHaveBeenCalled()
      }
    )

    

  })

})