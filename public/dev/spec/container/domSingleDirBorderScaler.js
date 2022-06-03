describe("DomSingleDirBorderScaler", function() {
  var myDomSingleDirBorderScaler

  beforeEach(function() {

    myDomSingleDirBorderScaler = new DomSingleDirBorderScaler()

  })

  it("should extend DomBorderScaler", function() {

    expect(myDomSingleDirBorderScaler.__proto__.__proto__.constructor.name)
      .toEqual('DomBorderScaler')

  })

  it(`should initialize the edge type to the passed direction
    character N, E, S and West with the second argument in the
    constructor`, function() {

      myDomSingleDirBorderScaler = new DomSingleDirBorderScaler(null, 'N')
      expect(myDomSingleDirBorderScaler.edgeSide).toEqual('N')
      myDomSingleDirBorderScaler = new DomSingleDirBorderScaler(null, 'E')
      expect(myDomSingleDirBorderScaler.edgeSide).toEqual('E')
      myDomSingleDirBorderScaler = new DomSingleDirBorderScaler(null, 'S')
      expect(myDomSingleDirBorderScaler.edgeSide).toEqual('S')
      myDomSingleDirBorderScaler = new DomSingleDirBorderScaler(null, 'W')
      expect(myDomSingleDirBorderScaler.edgeSide).toEqual('W')

    }
  )

  it(`should log an error when die edge type is not one of the
    characters N, E, S and W`, function() {

      spyOn(window.console, 'error')
      myDomSingleDirBorderScaler = new DomSingleDirBorderScaler(null, 'V')
      expect(window.console.error).toHaveBeenCalledWith(
        'V is not a valid edge side character (allowed: N, E, S, W)'
      )

    }
  )

  describe("init", function() {

    var myDomSingleDirBorderScaler

    beforeEach(function() {

      myDomSingleDirBorderScaler = new DomSingleDirBorderScaler(document.createElementNS(
        "http://www.w3.org/1999/xhtml",
        'div'
      ), 'N')
  
    })

    it(`should initialize the position attributes x and y, as well
      as the width and height of the scaler`, function() {

        myDomSingleDirBorderScaler.init(1, 2, 3, 4)
        expect(myDomSingleDirBorderScaler.x)
          .toEqual(1)
        expect(myDomSingleDirBorderScaler.y)
          .toEqual(2)
        expect(myDomSingleDirBorderScaler.w)
          .toEqual(3)
        expect(myDomSingleDirBorderScaler.h)
          .toEqual(4)

      }
    )

  })


})
