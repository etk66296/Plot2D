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




})
