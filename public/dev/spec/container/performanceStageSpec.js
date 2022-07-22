describe("PerformanceStage", function() {
  var myPerformanceStage

  beforeEach(function() {

    myPerformanceStage = new PerformanceStage()

  })

  it("should extend Stage", function() {

    expect(myPerformanceStage.__proto__.__proto__.constructor.name)
      .toEqual('Stage')

  })

  it(`should have a function draw`, function() {

    expect(myPerformanceStage.draw).toBeDefined()

  })

  describe("draw", function() {

    it(`should loop through its actors`, function() {

      spyOn(myPerformanceStage.members, 'forEach')

      myPerformanceStage.draw()

      expect(myPerformanceStage.members.forEach).toHaveBeenCalled()

    })

    it(`should call the actors draw functions when they want that`,
      function() {

      myPerformanceStage.admit(
        {
          wouldLikeToBeDrawn: false,
          draw: () => {}
        },
        {
          wouldLikeToBeDrawn: true,
          draw: () => {}
        },
        {
          wouldLikeToBeDrawn: false,
          draw: () => {}
        },
        {
          wouldLikeToBeDrawn: true,
          draw: () => {}
        }
      )

      spyOn(myPerformanceStage.members[0], 'draw')
      spyOn(myPerformanceStage.members[1], 'draw')
      spyOn(myPerformanceStage.members[2], 'draw')
      spyOn(myPerformanceStage.members[3], 'draw')

      myPerformanceStage.draw()

      expect(myPerformanceStage.members[0].draw)
        .not.toHaveBeenCalled()
      expect(myPerformanceStage.members[1].draw)
        .toHaveBeenCalled()
      expect(myPerformanceStage.members[2].draw)
        .not.toHaveBeenCalled()
      expect(myPerformanceStage.members[3].draw)
        .toHaveBeenCalled()

    })

  })

})
