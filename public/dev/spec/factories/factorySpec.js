describe("Factory", function() {
  var myFactory

  beforeEach(function() {

    myFactory = new Factory()

  })

  it("should extend Plot2DAny", function() {

    expect(myFactory.__proto__.__proto__.constructor.name)
      .toEqual('Plot2DAny')

  })

})
