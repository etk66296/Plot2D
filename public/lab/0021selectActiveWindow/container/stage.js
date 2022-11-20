class Stage extends Container {
  
  constructor(plotObjectTracker) {

    super()

    this.tracker = plotObjectTracker

    this.parentWindow = null

  }

  update() {

    this.members.forEach((actor) => {

      if(actor.wouldLikeToBeUpdated) {

        actor.update()

      }

    }) 

  }

  draw() {

    this.members.forEach((actor) => {

      if(actor.wouldLikeToBeUpdated) {

        actor.draw()

      }

    }) 

  }

  admit() {
    
    for(let i = 0; i < arguments.length; i++) {
      
      arguments[i].stage = this
      arguments[i].init()

      if(!this.hasTheMember(arguments[i])) {

        this.members.push(arguments[i])

      } 

      if(arguments[i].id == -1) {
        
        this.tracker.add(arguments[i])

      }
      
      if(this.parentWindow != null) {

        this.parentWindow.appendChild(this)

        arguments[i].optionAccessElement = new PlotOptions(arguments[i])
        arguments[i].optionAccessElement.init()


      }

    }

  }
  
}