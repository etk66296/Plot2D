describe("PerformanceDisplay", function() {
  var myPerformanceDisplay

  beforeEach(function() {

    myPerformanceDisplay = new PerformanceDisplay()

  })

  it("should extend Display", function() {

    expect(myPerformanceDisplay.__proto__.__proto__.constructor.name)
      .toEqual('Display')

  })

})
