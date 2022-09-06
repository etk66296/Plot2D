describe("Container", function() {
  var myContainer

  beforeEach(function() {

    myContainer = new Container()

  })

  it("should extend Plot2DAny", function() {

    expect(myContainer.__proto__.__proto__.constructor.name)
      .toEqual('Plot2DAny')

  })

  it("should have an array attribute for the member objects",
    function() {

      expect(myContainer.members).toBeDefined()
      expect(myContainer.members).toBeInstanceOf(Array)

    }
  )

  it(`should have a function to admit members and push a passed
    instance to the members array`, function() {

      expect(myContainer.admit).toEqual(jasmine.any(Function))

    }
  )

  describe("admit", function() {

    it("should save all passed arguments in the members array",
      function() {

        myContainer.admit('member1', 'member2', 'member3')
        expect(myContainer.members).toEqual([
          'member1', 'member2', 'member3'
        ])

      }
    )

  })

  describe("init", function() {

    it("should call the super class init", function() {

      spyOn(Plot2DAny.prototype, 'init')
      myContainer.init()
      expect(Plot2DAny.prototype.init).toHaveBeenCalled()

    })

  })

  describe("destroy", function() {

    it("should call the super class destroy", function() {

      spyOn(Plot2DAny.prototype, 'destroy')
      myContainer.destroy()
      expect(Plot2DAny.prototype.destroy).toHaveBeenCalled()

    })

  })

 

})
