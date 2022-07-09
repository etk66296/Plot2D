describe("DomObjectTracker", function() {
  var myDomObjectTracker
  var dummyDomContainer

  beforeEach(function() {
    myDomObjectTracker = new DomObjectTracker()
    dummyDomContainer = { domObjectTracker: null, zIndex: 0 }
  })

  it("should extend ObjectTracker", function() {

    expect(myDomObjectTracker.__proto__.__proto__.constructor.name)
      .toEqual('ObjectTracker')

  })

  it(`should have a member zIndexCounter initialized to 0`,
    function() {
      
      expect(myDomObjectTracker.zIndexCounter).toEqual(0)

    }
  )

  describe("add", function() {

    it(`shoul call the super class add`, function() {

      spyOn(ObjectTracker.prototype, 'add')
      myDomObjectTracker.add(dummyDomContainer)
      expect(ObjectTracker.prototype.add)
        .toHaveBeenCalledWith(dummyDomContainer)

    })

    it(`should inject the objectTrackerInstance to the domObject`,
      function() {

        myDomObjectTracker.add(dummyDomContainer)
        expect(dummyDomContainer.domObjectTracker)
          .toEqual(myDomObjectTracker)

      }
    )

    it(`should increase the zIndexCounter by one`, function() {

      myDomObjectTracker.add(dummyDomContainer)
      myDomObjectTracker.add(dummyDomContainer)
      myDomObjectTracker.add(dummyDomContainer)
      expect(myDomObjectTracker.zIndexCounter).toEqual(3)

    })

    it(`should copy the zIndexCounter value, to the domObjects
      zIndex`, function() {

        myDomObjectTracker.add(dummyDomContainer)
        expect(dummyDomContainer.zIndex).toEqual(1)
        myDomObjectTracker.add(dummyDomContainer)
        expect(dummyDomContainer.zIndex).toEqual(2)
        myDomObjectTracker.add(dummyDomContainer)
        expect(dummyDomContainer.zIndex).toEqual(3)

      }
    )

  })


})
