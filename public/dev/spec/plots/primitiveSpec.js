describe("Primitive", function() {
  var myPrimitive

  beforeEach(function() {

    myPrimitive = new Primitive()

  })

  it("should extend Plot", function() {

    expect(myPrimitive.__proto__.__proto__.constructor.name)
      .toEqual('Plot')

  })

  it("should call the super class constructor", function() {

    spyOn(Plot, 'constructor').and.callThrough()
    Primitive.constructor(null)
    expect(Plot.constructor).toHaveBeenCalled()

  })


})