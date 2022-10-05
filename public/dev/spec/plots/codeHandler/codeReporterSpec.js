describe("CodeReporter", function() {
  var myCodeReporter

  beforeEach(function() {

    myCodeReporter = new CodeReporter()

  })

  it("should extend CodeHandler", function() {

    expect(myCodeReporter.__proto__.__proto__.constructor.name)
      .toEqual('CodeHandler')

  })

})