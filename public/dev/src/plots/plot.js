class Plot extends Plot2DAny {
  
  constructor() {

    super()

    this.displayElement = null

    this.wouldLikeToBeUpdated = true
    this.wouldLikeToBeDrawn = true

    this.x = 0
    this.y = 0

    this.isADomElement = true

  }

  init() {

    super.init()

  }

}