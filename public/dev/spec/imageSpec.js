describe("Image", function() {
  var myImage

  beforeEach(function() {

    myImage = new Image()

  })

  it("should extend Draft", function() {

    expect(myImage.__proto__.__proto__.constructor.name)
      .toEqual('Draft')

  })

})
