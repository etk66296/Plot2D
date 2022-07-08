describe("DomObjectTracker", function() {
  var myDomObjectTracker

  beforeEach(function() {
    myDomObjectTracker = new DomObjectTracker()
  })

  it("should extend ObjectTracker", function() {

    expect(myDomObjectTracker.__proto__.__proto__.constructor.name)
      .toEqual('ObjectTracker')

  })


})
