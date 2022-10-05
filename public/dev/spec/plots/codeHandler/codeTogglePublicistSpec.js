describe("CodeTogglePublicist", function() {
  var myCodeTogglePublicist

  beforeEach(function() {

    myCodeTogglePublicist = new CodeTogglePublicist()

  })

  it("should extend CodePublicist", function() {

    expect(myCodeTogglePublicist.__proto__.__proto__.constructor.name)
      .toEqual('CodePublicist')

  })

})