describe("PlotObjectTracker", function() {
  var myPlotObjectTracker

  beforeEach(function() {
    myPlotObjectTracker = new PlotObjectTracker()
  })

  it("should extend ObjectTracker", function() {

    expect(myPlotObjectTracker.__proto__.__proto__.constructor.name)
      .toEqual('ObjectTracker')

  })


})