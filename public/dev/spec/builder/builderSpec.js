describe("Builder", function() {
  var myBuilder

  beforeEach(function() {

    myBuilder = new Builder()

  })

  it("should extend Plot2DAny", function() {

    expect(myBuilder.__proto__.__proto__.constructor.name)
      .toEqual('Plot2DAny')

  })

})
