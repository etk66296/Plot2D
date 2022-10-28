class Stage extends Container {
  
  constructor(plotObjectTracker) {

    super()

    this.tracker = plotObjectTracker

  }

  update() {

    this.members.forEach((actor) => {

      if(actor.wouldLikeToBeUpdated) {

        actor.update()

      }

    }) 

  }

  admit() {
    
    for(let i = 0; i < arguments.length; i++) {
      
      this.members.push(arguments[i])
      this.tracker.add(this.members[this.members.length -1])

    }

  }
  
}