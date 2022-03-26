describe("Plot", function() {
  var myPlot

  beforeEach(function() {

    myPlot = new Plot()

  })

  it("should extend Plot2DAny", function() {

    expect(myPlot.__proto__.__proto__.constructor.name)
      .toEqual('Plot2DAny')

  })

})
