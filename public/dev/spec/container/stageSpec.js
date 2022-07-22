describe("Stage", function() {
  var myStage

  beforeEach(function() {

    myStage = new Stage()

  })

  it("should extend Container", function() {

    expect(myStage.__proto__.__proto__.constructor.name)
      .toEqual('Container')

  })

  it(`should have a function update`, function() {

    expect(myStage.update).toBeDefined()

  })

  describe("update", function() {

    it(`should loop through its actors`, function() {

      spyOn(myStage.members, 'forEach')

      myStage.update()

      expect(myStage.members.forEach).toHaveBeenCalled()

    })

    it(`should call the actors update functions when they want that`,
      function() {

      myStage.admit(
        {
          wouldLikeToBeUpdated: true,
          update: () => {}
        },
        {
          wouldLikeToBeUpdated: true,
          update: () => {}
        },
        {
          wouldLikeToBeUpdated: false,
          update: () => {}
        },
        {
          wouldLikeToBeUpdated: true,
          update: () => {}
        }
      )

      spyOn(myStage.members[0], 'update')
      spyOn(myStage.members[1], 'update')
      spyOn(myStage.members[2], 'update')
      spyOn(myStage.members[3], 'update')

      myStage.update()

      expect(myStage.members[0].update).toHaveBeenCalled()
      expect(myStage.members[1].update).toHaveBeenCalled()
      expect(myStage.members[2].update).not.toHaveBeenCalled()
      expect(myStage.members[3].update).toHaveBeenCalled()

    })

  })

})
