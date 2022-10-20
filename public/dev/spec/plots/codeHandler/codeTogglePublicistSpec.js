describe("CodeTogglePublicist", function() {
  var myCodeTogglePublicist


  beforeEach(function() {

    myCodeTogglePublicist = new CodeTogglePublicist()

  })

  it("should extend CodePublicist", function() {

    expect(myCodeTogglePublicist.__proto__.__proto__.constructor.name)
      .toEqual('CodePublicist')

  })

  it("should call the super class constructor", function() {

    spyOn(CodePublicist, 'constructor').and.callThrough()
    CodeTogglePublicist.constructor(null)
    expect(CodePublicist.constructor).toHaveBeenCalled()

  })

  it(`should have an array attribute publication initialized with
    an empty array`, function() {

    expect(myCodeTogglePublicist.publication).toEqual([])

  })

  it(`should have an array attribute publicationText initialized with
    an empty array`, function() {

    expect(myCodeTogglePublicist.publicationText).toEqual([])

  })

  it(`should have an attribute publicationIndex inizialized to 0`,
    function() {

      expect(myCodeTogglePublicist.publicationIndex).toEqual(0)

    }
  )

  describe("init", function() {

    it("should call the super class init function", function() {

      spyOn(CodePublicist.prototype, 'init')
      myCodeTogglePublicist.init()
      expect(CodePublicist.prototype.init).toHaveBeenCalled()

    })

    it(`should set the publicationIndex to 0`, function() {

      myCodeTogglePublicist.publicationIndex = 5

      myCodeTogglePublicist.init()

      expect(myCodeTogglePublicist.publicationIndex).toEqual(0)

    })

  })

  it(`should have a function toggle for increasing or reset the
    publication index`, function() {

      expect(myCodeTogglePublicist.toggle)
        .toEqual(jasmine.any(Function))


    }
  )

  describe("toggle", function() {

    it(`should reset the publicatonIndex counter when the index
      points to the back of the publication array`, function() {

        myCodeTogglePublicist.publication = [ "1", "2", "3" ]
        myCodeTogglePublicist.publicationIndex = 2
        myCodeTogglePublicist.toggle()
        expect(myCodeTogglePublicist.publicationIndex).toEqual(0)

      }
    )

    it(`should increase the index pointer`, function() {

      myCodeTogglePublicist.publication = [ "1", "2", "3" ]
      myCodeTogglePublicist.publicationIndex = 1
      myCodeTogglePublicist.toggle()
      expect(myCodeTogglePublicist.publicationIndex).toEqual(2)

    })

  })


  describe("publish", function() {

    it('should call the callbackOnParticipate function', function() {

      spyOn(myCodeTogglePublicist, 'callbackBeforeParticipate')

      myCodeTogglePublicist.publish()

      expect(myCodeTogglePublicist.callbackBeforeParticipate)
        .toHaveBeenCalled()
    })

    it(`should append the received publication to the selected
      publication and call the face publication function of all
      subscribers`,
      function() {

        myCodeTogglePublicist.receivedPublications = "recevied "

        myCodeTogglePublicist.publication = ["do something"]

        myCodeTogglePublicist.subscribers = [
          { plotObject: { codeHandler: {
            facePublication: (publication, duty) => {},
          } }, duty: "DELETE"},
          { plotObject: { codeHandler: {
            facePublication: () => {}
          } }, duty: "EVALUATE" },
          { plotObject: { codeHandler: {
            facePublication: () => {}
          } }, duty: "APPEND" },
        ]

        spyOn(myCodeTogglePublicist.subscribers[0]
          .plotObject.codeHandler, 'facePublication')
        spyOn(myCodeTogglePublicist.subscribers[1]
          .plotObject.codeHandler, 'facePublication')
        spyOn(myCodeTogglePublicist.subscribers[2]
          .plotObject.codeHandler, 'facePublication')

          myCodeTogglePublicist.publish()

        let publication = myCodeTogglePublicist.receivedPublications +
          myCodeTogglePublicist.publication

        expect(myCodeTogglePublicist.subscribers[0].plotObject.codeHandler
          .facePublication)
          .toHaveBeenCalledWith(publication, "DELETE")
        expect(myCodeTogglePublicist.subscribers[1].plotObject.codeHandler
          .facePublication)
          .toHaveBeenCalledWith(publication, "EVALUATE")
        expect(myCodeTogglePublicist.subscribers[2].plotObject.codeHandler
          .facePublication)
          .toHaveBeenCalledWith(publication, "APPEND")
      }
    )

  })

})