describe("Draft", function() {
  var myDraft

  beforeEach(function() {

    myDraft = new Draft()

  })

  it("should extend Plot", function() {

    expect(myDraft.__proto__.__proto__.constructor.name)
      .toEqual('Plot')

  })

})
