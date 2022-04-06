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

      expect(anyObject.tracker).toBeDefined()

    }
  )

  it(`should have a method for creating HTML -
    http://www.w3.org/1999/xhtml Elements`, function() {

      expect(anyObject.createHtmlElement).toEqual(jasmine.any(Function))

    }
  )

  describe("createHtmlElement", function() {

    it(`should create a new html element with
      Document.createElementNS`, function() {

        spyOn(document, "createElementNS")
        anyObject.createHtmlElement("div")
        expect(document.createElementNS).toHaveBeenCalledWith(
          "http://www.w3.org/1999/xhtml",
          "div"
        )
      }
    )

    it(`should return the instance of the new created dom element`,
      function() {

        let myDiv = anyObject.createHtmlElement('div')
        expect(myDiv.constructor.name).toEqual("HTMLDivElement")

      }
    )

  })

})
