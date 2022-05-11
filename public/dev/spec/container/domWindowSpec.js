describe("DomWindow", function() {
  var myDomWindow

  beforeEach(function() {

    myDomWindow = new DomWindow()

  })

  it("should extend DomAbsolute", function() {

    expect(myDomWindow.__proto__.__proto__.constructor.name)
      .toEqual('DomAbsolute')

  })

  // it("should have an attribute posX and define it with 0", function() {

  //   expect(myDomWindow.posX).toBeDefined()
  //   expect(myDomWindow.posX).toEqual(0)

  // })

  // it("should have an attribute posY and define it with 0", function() {

  //   expect(myDomWindow.posY).toBeDefined()
  //   expect(myDomWindow.posY).toEqual(0)

  // })

  // describe("init", function() {

  //   beforeEach(function() {

  //     myDomWindow = new DomWindow(document.createElementNS(
  //       "http://www.w3.org/1999/xhtml",
  //       'div'
  //     ))
  
  //   })

  //   it(`call the parents init function`, function() {
        
  //       spyOn(DomContainer.prototype, 'init').and.callThrough()
  //       myDomWindow.init()
  //       expect(DomContainer.prototype.init).toHaveBeenCalled()

  //     }
  //   )


  // })




})
