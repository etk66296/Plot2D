describe("PixelSurface", function() {
  var myPixelSurface

  beforeEach(function() {

    myPixelSurface = new PixelSurface()

  })

  it("should extend Draft", function() {

    expect(myPixelSurface.__proto__.__proto__.constructor.name)
      .toEqual('Draft')

  })

  it(`should have an attribute htmlImageElement`, function() {

    expect(myPixelSurface.htmlImageElement).toBeDefined()

  })

  it(`should have a function to get the htmlImageElement`,
    function() {

      expect(myPixelSurface.displayElement)
        .toEqual(jasmine.any(Function))

    }
  )

  describe("displayElement", function() {

    it(`should return the htmlImageElement`, function() {

      myPixelSurface.htmlImageElement = new Image
      expect(myPixelSurface.displayElement())
        .toEqual(myPixelSurface.htmlImageElement)

    })

  })

})