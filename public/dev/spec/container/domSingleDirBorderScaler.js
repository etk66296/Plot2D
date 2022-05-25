describe("DomSingleDirBorderScaler", function() {
  var myDomSingleDirBorderScaler

  beforeEach(function() {

    myDomSingleDirBorderScaler = new DomSingleDirBorderScaler()

  })

  it("should extend DomBorderScaler", function() {

    expect(myDomSingleDirBorderScaler.__proto__.__proto__.constructor.name)
      .toEqual('DomBorderScaler')

  })
})