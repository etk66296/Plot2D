describe("Plot2DAny", function() {
  var anyObject

  beforeEach(function() {
    anyObject = new Plot2DAny()
  })

  it("should have an attribute id", function() {

    expect(anyObject.id).toBeDefined()
    
  })

  it("should have an attribute for holding the super object tracker",
    function() {

      expect(anyObject.superTracker).toBeDefined()

    }
  )

})
