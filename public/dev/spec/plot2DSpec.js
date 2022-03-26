describe("Plot2D", function() {
  var myPlot2DInstance

  beforeEach(function() {

    myPlot2DInstance = new Plot2D()

  })

  it("should extend Plot2DAny", function() {

    expect(myPlot2DInstance.__proto__.__proto__.constructor.name)
      .toEqual('Plot2DAny')

  })

})
