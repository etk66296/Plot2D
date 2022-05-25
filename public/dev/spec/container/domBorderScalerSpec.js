describe("DomBorderScaler", function() {
  var myDomBorderScaler

  beforeEach(function() {

    myDomBorderScaler = new DomBorderScaler()

  })

  it("should extend DomAbsolute", function() {

    expect(myDomBorderScaler.__proto__.__proto__.constructor.name)
      .toEqual('DomAbsolute')

  })

  it(`should have an attribute which is set to true when die mouse was
    clicked ontop of the element`, function() {

      expect(myDomBorderScaler.mouseIsDown).toBeDefined()
      expect(myDomBorderScaler.mouseIsDown).toBe(false)

    }
  )

  it(`should have an attribute for saving the edge type which should
    be initial an empty string`, function() {
      expect(myDomBorderScaler.edgeType).toEqual('')
    }
  )

  it(`should have an attribute for saving the mouse offset coordiantes
    when it was clicked on the element`, function() {

      expect(myDomBorderScaler.clickPositionOffset).toBeDefined()

    }
  )

  describe("clickPositionOffset", function() {

    it(`should have an key for saving the x click pos.`, function() {

      expect(myDomBorderScaler.clickPositionOffset.x).toBeDefined()
      
    })

    it(`should have an key for saving the y click pos.`, function() {

      expect(myDomBorderScaler.clickPositionOffset.y).toBeDefined()

    })

  })


})