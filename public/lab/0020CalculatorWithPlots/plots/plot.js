class Plot extends Plot2DAny {
  
  constructor() {

    super()

    this.wouldLikeToBeUpdated = true
    this.wouldLikeToBeDrawn = true

    this.DOM_ELEM = 1
    this.PERFORMANCE_ELEM = 2

    this.REPORTER = 1
    this.PUBLICIST = 2
    this.READER = 3

    this.persistsAs = this.DOM_ELEM
    this.interpretableHandlerType = this.REPORTER

    this.interpretableHandler = null

  }

  persistsAsDomElem() {
    if(this.persistsAs === this.DOM_ELEM) {
      
      return true

    }
    return false
  }

  isAReporter() {
    if(this.interpretableHandlerType === this.REPORTER) {
      return true
    }
    return false
  }

  actAsReporter(reporter = null) {

    this.interpretableHandlerType = this.REPORTER

    if(reporter == null) {

      this.interpretableHandler = new InterpretableReporter()

    } else {

      this.interpretableHandler = reporter

    }

  }

  actAsPublicist(publicist = null) {

    this.interpretableHandlerType = this.PUBLICIST
    
    if(publicist == null) {

      this.interpretableHandler = new InterpretablePublicist()

    } else {

      this.interpretableHandler = publicist

    }

  }

  actAsReader(reader = null) {

    this.interpretableHandlerType = this.READER
    
    if(reader == null) {

      this.interpretableHandler = new InterpretableReader()

    } else {

      this.interpretableHandler = reader

    }

  }
  
  init() {
    
  }

}