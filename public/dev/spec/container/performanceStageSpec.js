describe("PerformanceStage", function() {
  var myPerformanceStage

  beforeEach(function() {

    myPerformanceStage = new PerformanceStage()

  })

  it("should extend Stage", function() {

    expect(myPerformanceStage.__proto__.__proto__.constructor.name)
      .toEqual('Stage')

  })

})
