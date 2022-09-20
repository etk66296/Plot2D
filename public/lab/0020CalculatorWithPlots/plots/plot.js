class Plot extends Plot2DAny {
  
  constructor() {

    super()

    this.wouldLikeToBeUpdated = true
    this.wouldLikeToBeDrawn = true

    this.DOM_ELEM = 1
    this.PERFORMANCE_ELEM = 2

    this.REPORTER = 1
    this.PUBLICIST = 2
    this.STATIC_PUBLICIST = 3
    this.READER = 4

    this.persistsAs = this.DOM_ELEM
    this.codeHandlerType = this.REPORTER

    this.codeHandler = null


  }

  persistsAsDomElem() {
    if(this.persistsAs === this.DOM_ELEM) {
      
      return true

    }
    return false
  }

  isAReporter() {
    if(this.codeHandlerType === this.REPORTER) {
      return true
    }
    return false
  }

  actAsReporter(reporter = null) {

    this.codeHandlerType = this.REPORTER

    if(reporter == null) {

      this.codeHandler = new CodeReporter(this)

    } else {

      this.codeHandler = reporter

    }

  }

  actAsPublicist(publicist = null) {

    this.codeHandlerType = this.PUBLICIST
    
    if(publicist == null) {

      this.codeHandler = new CodePublicist(this)

    } else {

      this.codeHandler = publicist

    }

  }

  actAsStaticPublicist(publicist = null) {

    this.codeHandlerType = this.STATIC_PUBLICIST
    
    if(publicist == null) {

      this.codeHandler = new CodePublicist(this)

    } else {

      this.codeHandler = publicist

    }

  }

  actAsReader(reader = null) {

    this.codeHandlerType = this.READER
    
    if(reader == null) {

      this.codeHandler = new CodeReader(this)

    } else {

      this.codeHandler = reader

    }

  }
  
  init() {
    
  }

}