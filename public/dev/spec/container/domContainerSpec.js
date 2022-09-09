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

  it(`should have an attribute zIndex initialized to 0`, function() {

    expect(myDomContainer.zIndex).toEqual(0)

  })

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

    beforeEach(function() {

      myDomContainer = new DomContainer(document.createElementNS(
        "http://www.w3.org/1999/xhtml",
        'div'
      ))
  
    })

    it(`should create element types html element and assign it to the
     class attribute containerElement`,
      function() {
        
        myDomContainer.elementType = 'main'
        spyOn(myDomContainer, 'createHtmlElement').and.callThrough()
        myDomContainer.init()
        expect(myDomContainer.createHtmlElement)
          .toHaveBeenCalledWith('main')

      }
    )

    it(`should save the reference of the created html element to the
     class member containerElement`, function() {

        myDomContainer.init('div')
        expect(myDomContainer.containerElement.constructor.name)
          .toEqual('HTMLDivElement')

      }
    )

    it(`should append the container element to the parent element`,
      function() {
        
        spyOn(myDomContainer.parentElement, 'appendChild')
        myDomContainer.init('div')
        expect(myDomContainer.parentElement.appendChild)
          .toHaveBeenCalledWith(myDomContainer.containerElement)

      }
    )

    it(`should call the super class init function`, function() {

      spyOn(Container.prototype, 'init')
      myDomContainer.init()
      expect(Container.prototype.init).toHaveBeenCalled()

    })

  })

  describe("destroy", function() {

    it(`should remove the containerElement child, when the object is
      initialized`, function() {

        
        let parent = {
          removeChild: function() {

          }
        }
        myDomContainer.parentElement = parent
        myDomContainer.isInitialized = true

        spyOn(myDomContainer.parentElement, 'removeChild')
        myDomContainer.destroy()
        expect(myDomContainer.parentElement.removeChild).toHaveBeenCalled()


      }
    )

    it(`should omit the removeChild call when it is not initialized`,
      function() {

        let parent = {
          removeChild: function() {

          }
        }
        myDomContainer.parentElement = parent
        myDomContainer.isInitialized = false

        spyOn(myDomContainer.parentElement, 'removeChild')
        myDomContainer.destroy()
        expect(myDomContainer.parentElement.removeChild).not.toHaveBeenCalled()

      }
    )

    it("should call the super class destroy", function() {

      spyOn(Container.prototype, 'destroy')
      myDomContainer.destroy()
      expect(Container.prototype.destroy).toHaveBeenCalled()

    })


  })

  it(`should have a function setZIndex`, function() {

    expect(myDomContainer.setZIndex).toBeDefined()

  })

  describe(`setZIndex`, function() {

    it(`should set the memeber zIndex to the argumet value`,
      function() {

        myDomContainer.containerElement  = {
          style: {zIndex: ''}
        }
        myDomContainer.setZIndex(99)
        expect(myDomContainer.zIndex).toEqual(99)


      }
    )

    it(`shoudl set the style api to the new z index value`,
      function() {

        myDomContainer.containerElement  = {
          style: {zIndex: ''}
        }
        myDomContainer.setZIndex(100)
        expect(myDomContainer.containerElement.style.zIndex)
          .toEqual('100')

      }
    )

  })

  it(`should have an attribute elementType, which holds the name of
    the container element that sould be created by the
    initialization`, function() {

      expect(myDomContainer.elementType).toEqual('div')

    }
  )




})
