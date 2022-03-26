describe("Container", function() {
  var myContainer

  beforeEach(function() {

    myContainer = new Container()

  })

  it("should extend Plot2DAny", function() {

    expect(myContainer.__proto__.__proto__.constructor.name)
      .toEqual('Plot2DAny')

  })

})
