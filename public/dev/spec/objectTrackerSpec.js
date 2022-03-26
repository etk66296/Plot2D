describe("ObjectTracker", function() {
  var myObjectTracker

  beforeEach(function() {
    myObjectTracker = new ObjectTracker()
  })

  it("should extend Plot2DAny", function() {

    expect(myObjectTracker.__proto__.__proto__.constructor.name)
      .toEqual('Plot2DAny')

  })

 

})
