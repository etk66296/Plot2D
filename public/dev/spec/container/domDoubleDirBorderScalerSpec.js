describe("DomDoubleDirBorderScaler", function() {
  var myDomDoubleDirBorderScaler

  beforeEach(function() {

    myDomDoubleDirBorderScaler = new DomDoubleDirBorderScaler()

  })

  it("should extend DomBorderScaler", function() {

    expect(myDomDoubleDirBorderScaler.__proto__.__proto__.constructor.name)
      .toEqual('DomBorderScaler')

  })
})