describe("Plot", function() {
  var myPlot

  beforeEach(function() {

    myPlot = new Plot()

  })

  it("should extend Plot", function() {

    expect(myPlot.__proto__.__proto__.constructor.name)
      .toEqual('Plot2DAny')

  })

  it(`should have an attribute wouldLikeToBeUpdated`, function() {

    expect(myPlot.wouldLikeToBeUpdated).toEqual(true)

  })

  it(`should have an attribute wouldLikeToBeUpdated`, function() {

    expect(myPlot.wouldLikeToBeDrawn).toEqual(true)

  })

  it(`should have an attribute displayElement`, function() {

    expect(myPlot.displayElement).toEqual(null)

  })

  

})