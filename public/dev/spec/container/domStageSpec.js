describe("DomStage", function() {
  var myDomStage

  beforeEach(function() {

    myDomStage = new DomStage()

  })

  it("should extend Stage", function() {

    expect(myDomStage.__proto__.__proto__.constructor.name)
      .toEqual('Stage')

  })

})
