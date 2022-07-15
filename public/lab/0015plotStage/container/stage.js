class Stage extends Container {
  
  constructor() {

    super()

  }

  update() {

    this.members.forEach((member) => {

      if(member.wouldLikeToBeUpdated) {
        
        member.update()

      }

    })

  }

  draw() {

    this.members.forEach((member) => {

      if(member.wouldLikeToBeDrawn) {

        member.draw()

      }

    })
    
  }
  
}