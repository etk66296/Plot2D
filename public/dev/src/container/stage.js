class Stage extends Container {
  
  constructor() {

    super()

  }

  update() {

    this.members.forEach((actor) => {

      if(actor.wouldLikeToBeUpdated) {

        actor.update()

      }

    }) 

  }
  
}