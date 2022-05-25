describe("Display", function() {
  var myDisplay

  beforeEach(function() {

    myDisplay = new Display()

  })

  it("should extend Container", function() {

    expect(myDisplay.__proto__.__proto__.constructor.name)
      .toEqual('Container')

  })

})
