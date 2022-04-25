describe("DomContainer", function() {
  var myDomContainer

  beforeEach(function() {

    myDomContainer = new DomContainer()

  })

  it("should extend Container", function() {

    expect(myDomContainer.__proto__.__proto__.constructor.name)
      .toEqual('Container')

  })

  it(`should have an attribute parent for saving the parant html
    element`,
    function() {

      expect(myDomContainer.parentElement).toBeDefined()

    }
  )



})
