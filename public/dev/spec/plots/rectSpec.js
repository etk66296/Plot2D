describe("Rect", function() {
  var myRect

  beforeEach(function() {

    myRect = new Rect()

  })

  it("should extend Primitive", function() {

    expect(myRect.__proto__.__proto__.constructor.name)
      .toEqual('Primitive')

  })

  it("should call the super class constructor", function() {

    spyOn(Primitive, 'constructor').and.callThrough()
    Rect.constructor(null)
    expect(Primitive.constructor).toHaveBeenCalled()

  })

})