describe("PlotFactory", function() {
  var myPlotFactory

  beforeEach(function() {

    myPlotFactory = new PlotFactory()

  })

  it("should extend Factory", function() {

    expect(myPlotFactory.__proto__.__proto__.constructor.name)
      .toEqual('Factory')

  })

})
