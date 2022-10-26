class Plot extends Plot2DAny {
  
  constructor() {

    super()

    this.displayElement = null

    this.wouldLikeToBeUpdated = true
    this.wouldLikeToBeDrawn = true

    this.x = 0
    this.y = 0

    this.isADomElement = true

    this.codeHandler = null

  }

  init() {

    super.init()

  }

  actAsReporter(reporter = null) {

    if(reporter == null) {

      this.codeHandler = new CodeReporter(this)

    } else {

      this.codeHandler = reporter

    }

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