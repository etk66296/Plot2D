describe("Stage", function() {
  var myStage

  beforeEach(function() {

    myStage = new Stage()

  })

  it("should extend Container", function() {

    expect(myStage.__proto__.__proto__.constructor.name)
      .toEqual('Container')

  })

})
