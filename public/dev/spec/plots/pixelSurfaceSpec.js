describe("PixelSurface", function() {
  var myPixelSurface

  beforeEach(function() {

    myPixelSurface = new PixelSurface()

  })

  it("should extend Draft", function() {

    expect(myPixelSurface.__proto__.__proto__.constructor.name)
      .toEqual('Draft')

  })

  it(`should save the passed reference to the displayElement
    attribute`, function() {

    let tmpPixelSurface = new PixelSurface('image Element')

    expect(tmpPixelSurface.displayElement).toEqual('image Element')

  })

 
})