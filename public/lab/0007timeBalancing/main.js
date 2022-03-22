class Plot2DAny {

  constructor() {

    this.id = -1
    this.objectTracker = undefined

  }

}

class OnTimeDelta extends Event {
  constructor(deltaTime) {
    super()
    this.deltaTime = deltaTime
  }
}

class Timer extends Plot2DAny{

  constructor() {
    super()

    this.dutyContainer = document.getElementById("duty")

    

  }

  getTimeCounter() {

    return performance.now()

  }

  update() {

    this.dutyContainer.innerHTML = performance.now()

  }


}

class FrameControler extends Plot2DAny {

  constructor() {

    super()

    this.frameDelta = 17
    this.startTime = 0
    this.cycleStepTime = 0

    this.stageList = []

    this.isPaused = false

    this.htmlContainer = document.getElementById("mainContainer")

  }

  cycle() {


    if (!this.isPaused ) {

      this.htmlContainer.innerHTML = this.cycleStepTime * 60

      this.startTime = performance.now()

      this.stageList.forEach(stage => {

        stage.update()
        stage.draw()

      })

      this.cycleStepTime = performance.now() - this.startTime

      if (this.frameDelta < this.cycleStepTime) {

        window.setTimeout(() => {
          window.requestAnimationFrame(this.cycle.bind(this))
        }, this.frameDelta - this.cycleStepTime)

      } else {

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

    this.timers = undefined

    this.actors = []
  }

  draw() {
    this.actors.forEach(actor => {

      actor.draw()

    })
  }

  update() {

    if (this.timer) {
      
      this.timer.update()

    }

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

  }

  update() {

   
  }

  draw() {
  }
}

class Plot2D extends Plot2DAny{

  constructor() {

    super()
    this.objectTracker = undefined
    this.frameCtrl = undefined
    this.timer = undefined

  }

  getSubscriptionList() {

    return this.objectTracker.objectList

  }

  init() {

    this.objectTracker = new ObjectTracker()
    this.subscribe(this)
    this.frameCtrl = new FrameControler()
    this.subscribe(this.frameCtrl)
    this.timer = new Timer()
    this.subscribe(this.timer)

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

        arguments[i].timer = this.timer

        this.frameCtrl.stageList.push(arguments[i])

      }

    }

  }
}
