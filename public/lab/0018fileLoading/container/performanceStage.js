class PerformanceStage extends Stage {
  
  constructor() {

    super()

  }

  draw() {

    this.members.forEach((actor) => {

      if(actor.wouldLikeToBeDrawn) {

        actor.draw()

      }

    }) 

  }
  
}