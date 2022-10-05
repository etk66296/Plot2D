describe("CodePublicist", function() {
  var myCodePublicist

  beforeEach(function() {

    myCodePublicist = new CodePublicist()

  })

  it("should extend CodeHandler", function() {

    expect(myCodePublicist.__proto__.__proto__.constructor.name)
      .toEqual('CodeHandler')

  })

})