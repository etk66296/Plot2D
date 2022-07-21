describe("Sprite", function() {
  var mySprite

  beforeEach(function() {

    mySprite = new Sprite()

  })

  it("should extend Draft", function() {

    expect(mySprite.__proto__.__proto__.constructor.name)
      .toEqual('Draft')

  })

})