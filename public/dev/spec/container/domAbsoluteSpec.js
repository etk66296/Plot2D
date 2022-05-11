describe("DomAbsolute", function() {
  var myDomAbsolute

  beforeEach(function() {

    myDomAbsolute = new DomAbsolute()

  })

  it("should extend DomContainer", function() {

    expect(myDomAbsolute.__proto__.__proto__.constructor.name)
      .toEqual('DomContainer')

  })

  it("should have an attribute posX and define it with 0", function() {

    expect(myDomAbsolute.posX).toBeDefined()
    expect(myDomAbsolute.posX).toEqual(0)

  })

  it("should have an attribute posY and define it with 0", function() {

    expect(myDomAbsolute.posY).toBeDefined()
    expect(myDomAbsolute.posY).toEqual(0)

  })

  describe("init", function() {

    beforeEach(function() {

      myDomAbsolute = new DomAbsolute(document.createElementNS(
        "http://www.w3.org/1999/xhtml",
        'div'
      ))
  
    })

    it(`call the parents init function`, function() {
        
        spyOn(DomContainer.prototype, 'init').and.callThrough()
        myDomAbsolute.init()
        expect(DomContainer.prototype.init).toHaveBeenCalled()

      }
    )

    it(`should set the position style of the container element on
      'absolute`, function() {

        myDomAbsolute.init()
        expect(myDomAbsolute.containerElement.style.position)
          .toEqual('absolute')

      }
    )

  })




})
