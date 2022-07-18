describe("Display2D", function() {
  var myDisplay

  beforeEach(function() {

    myDisplay = new Display2D()

  })

  it("should extend PerformanceDisplay", function() {

    expect(myDisplay.__proto__.__proto__.constructor.name)
      .toEqual('PerformanceDisplay')

  })

})
