class Plot extends Plot2DAny {
  
  constructor() {

    super()

    this.wouldLikeToBeUpdated = true
    this.wouldLikeToBeDrawn = true

  }

  asDomElement() {

    console.log('as dom element')

  }

  asCanvasElement() {

    console.log('as canvas element')

  }


  
}