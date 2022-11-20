class Plot extends Plot2DAny {
  
  constructor(objectTracker) {

    super()

    this.objectTracker = objectTracker

    this.parentDisplay = null
    this.parentWindow = null
    this.displayElement = null
    this.optionAccessElement = null

    this.wouldLikeToBeUpdated = true
    this.wouldLikeToBeDrawn = true

    this.x = 0
    this.y = 0
    this.zIndex = 0

    this.isADomElement = true

    this.codeHandler = null

    this.stage = null

  }

  init() {

    super.init()

  }

  update() {


  }

  draw() {

  
  }

  actAsReporter(reporter = null) {

    if(reporter == null) {

      this.codeHandler = new CodeReporter(this)

    } else {

      this.codeHandler = reporter

    }

  }

  appendTo(display) {

    this.parentDisplay = display
    display.containerElement.appendChild(this.displayElement)

  }

  removeFrom(display) {

  }

  actAsPublicist(publicist = null) {
    
    if(publicist == null) {

      this.codeHandler = new CodePublicist(this)

    } else {

      this.codeHandler = publicist

    }

  }

  actAsTogglePublicist(publicist = null) {
    
    if(publicist == null) {

      this.codeHandler = new CodeTogglePublicist(this)
      this.codeHandler.init()

    } else {

      this.codeHandler = publicist

    }

  }

  actAsReader(reader = null) {
    
    if(reader == null) {

      this.codeHandler = new CodeReader(this)

    } else {

      this.codeHandler = reader

    }

  }

}