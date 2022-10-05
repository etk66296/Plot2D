describe("CodeReader", function() {
  var myCodeReader

  beforeEach(function() {

    myCodeReader = new CodeReader()

  })

  it("should extend CodeHandler", function() {

    expect(myCodeReader.__proto__.__proto__.constructor.name)
      .toEqual('CodeHandler')

  })

})