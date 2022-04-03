describe("ObjectTracker", function() {
  var myObjectTracker

  beforeEach(function() {
    myObjectTracker = new ObjectTracker()
  })

  it("should extend Plot2DAny", function() {

    expect(myObjectTracker.__proto__.__proto__.constructor.name)
      .toEqual('Plot2DAny')

  })

  it(`should have an Array attribute, which is the main conatiner for all
    created instances of Plot2DAny`, function() {

      expect(myObjectTracker.any).toBeDefined()
      expect(myObjectTracker.any.constructor.name).toEqual("Array")

    }
  )

  it(`should have an attribute idCount, for giving an any its position (id)
    in the any array`, function() {

      expect(myObjectTracker.idCount).toEqual(0)

    }
  )

  it('should have a function for adding Plot2DAny objects to the application',
    function() {

      expect(myObjectTracker.add).toEqual(jasmine.any(Function))

    }
  )

  describe("add", function() {

    var myAny

    beforeEach(function() {
      myAny = {
        id: -1,
        foo: "Add me to the any list"
      }
    })

    it("should push the any to the any list attribute", function() {

      spyOn(myObjectTracker.any, 'push')
      myObjectTracker.add(myAny)
      expect(myObjectTracker.any.push)
        .toHaveBeenCalledWith(myAny)

    })

    it("should set the id of the pushed any (the any id is the unique index)",
      function() {

        myObjectTracker.add(myAny)

        expect(myAny.id).toEqual(0)

      }
    )

    it("should increase the id counter by one after pushing the passed any",
      function() {
        myObjectTracker.add(myAny)
        expect(myObjectTracker.idCount).toEqual(1)
      }
    )

    it("should register the ObjectTracker itself to the passed any Object",
      function() {
        myObjectTracker.add(myAny)
        expect(myAny.tracker).toEqual(myObjectTracker)
      }
    )

  })

})
