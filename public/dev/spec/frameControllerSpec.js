describe("FrameController", function() {
  var myFrameController

  beforeEach(function() {
    myFrameController = new FrameController()
  })

  it("should extend Plot2DAny", function() {

    expect(myFrameController.__proto__.__proto__.constructor.name)
      .toEqual('Plot2DAny')

  })

 

})
