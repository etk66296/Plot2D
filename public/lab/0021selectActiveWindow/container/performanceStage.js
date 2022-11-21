class PerformanceStage extends Stage {
  
  constructor(plotObjectTracker) {

    super(plotObjectTracker)

  }

  draw() {

    this.members.forEach((actor) => {

      if(actor.wouldLikeToBeDrawn) {

        actor.draw()

      }

    }) 

  }
  
}