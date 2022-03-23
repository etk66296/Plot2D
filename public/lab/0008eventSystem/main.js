class Plot2DAny {

  constructor() {

    this.id = -1
    this.objectTracker = undefined

  }

}



class FrameControler extends Plot2DAny {

  constructor() {

    super()

    this.expectedFrameTime = 1000 / 25
    this.frameStartTime = 0.0
    this.frameStopTime = 0.0
    this.actualFrameStopTime = 0.0
    this.frameDelta = 0.0

    this.stageList = []

    this.isPaused = false

    this.htmlContainer = document.getElementById("mainContainer")

  }

  cycle() {


    if (!this.isPaused ) {

      this.fps = 1000 / (this.actualFrameStopTime - this.frameStartTime)
      
      this.frameStartTime = performance.now()

      this.stageList.forEach(stage => {

        stage.update()
        stage.draw()

      })

      this.frameStopTime = performance.now()

     
      this.frameDelta = this.frameStartTime - this.frameStartTime
      this.htmlContainer.innerHTML = String(this.fps.toFixed(3))

      if (this.frameDelta < this.expectedFrameTime) {
        window.setTimeout(() => {
          this.actualFrameStopTime = performance.now()
          window.requestAnimationFrame(this.cycle.bind(this))
        }, this.expectedFrameTime - this.frameDelta)

      } else {
        this.actualFrameStopTime = performance.now()
        window.requestAnimationFrame(this.cycle.bind(this))
        
      }

    }
    
  }

}


class ObjectTracker extends Plot2DAny {

  constructor() {

    super()

    this.id = 0
    this.objectTracker = this

    this.objectIdCounter = 0
    this.objectList = [this]
    
  }

  add(any) {

    this.objectIdCounter += 1
    any.objectTracker = this
    any.id = this.objectIdCounter
    this.objectList.push(any)

  }

}

class Stage extends Plot2DAny {

  constructor() {
    super()


    this.actors = []
  }

  draw() {
    this.actors.forEach(actor => {

      actor.draw()

    })
  }

  update() {

    this.actors.forEach(actor => {

      actor.update()
      
    })

  }

  add(actors) {

    for(let i = 0; i < arguments.length; i++) {
      
      this.actors.push(arguments[i])

    }

  }

}

class Sprite extends Plot2DAny {
  constructor() {

    super()
    this.duty = document.getElementById("duty")
  }

  update() {

    // this.duty.innerHTML += `<p>${this.id}</p>`
   
  }

  draw() {
  }
}

class Plot2D extends Plot2DAny{

  constructor() {

    super()
    this.objectTracker = undefined
    this.frameCtrl = undefined

  }

  getSubscriptionList() {

    return this.objectTracker.objectList

  }

  init() {

    this.objectTracker = new ObjectTracker()
    this.subscribe(this)
    this.frameCtrl = new FrameControler()
    this.subscribe(this.frameCtrl)
  }

  run() {

    this.frameCtrl.isPaused = false
    this.frameCtrl.cycle()

  }

  pause() {

    this.frameCtrl.isPaused = true

  }

  subscribe(plot2DAny) {

    for(let i = 0; i < arguments.length; i++) {
      
      this.objectTracker.add(arguments[i])

      if (arguments[i].constructor.name === 'Stage') {

        this.frameCtrl.stageList.push(arguments[i])

      }

    }

  }
}
