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

      expect(myDomContainer.parentElement).toEqual(null)

    }
  )

  it(`should have an attribute for the reference to the own html
    element and it should be initialized with the null
    reference`, function() {

      expect(myDomContainer.containerElement).toEqual(null)


    }
  )

  it(`should have an function for initialize the html and css stuff`,
    function() {

      expect(myDomContainer.init).toBeDefined()

    }
  )

  describe("init", function() {

    it(`should create a new div element and assign it to the
     class attribute containerElement`,
      function() {
        
      }
    )

    it(`should append the container element to the parent element`,
      function() {

      }
    )

  })




})
