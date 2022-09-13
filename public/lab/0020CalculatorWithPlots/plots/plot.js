class Plot extends Plot2DAny {
  
  constructor() {

    super()

    this.wouldLikeToBeUpdated = true
    this.wouldLikeToBeDrawn = true
    this.DOM_ELEM = 1
    this.PERFORMANCE_ELEM = 2
    this.IS_A_SOURCE = 1
    this.IS_A_SINK = 2
    this.IS_A_SINK_SOURCE = 3
    this.persistsAs = this.DOM_ELEM
    this.dataFlowType = this.IS_A_SOURCE

    this.executionCode = ""
    this.productionCode = ""
    this.dataReceiver = []
    this.dataTransmitter = null

    this.injectedCallback = () => {}

    this.callbackOnNudge = () => {

      
    }

  }

  persistsAsDomElem() {
    if(this.persistsAs === this.DOM_ELEM) {
      
      return true

    }
    return false
  }

  isASource() {
    if(this.dataFlowType === this.IS_A_SOURCE) {
      return true
    }
    return false
  }

  actAsSource() {

    this.dataFlowType = this.IS_A_SOURCE

  }

  actAsSink() {

    this.dataFlowType = this.IS_A_SINK
  }

  actAsSinkSource() {

    this.dataFlowType = this.IS_A_SINK_SOURCE
  }

  addReceiver(receiver) {

    this.dataReceiver.push(receiver)

  }
  
  injectCallback(callback) {

    this.injectedCallback = callback

  }

  

  init() {
    
  }

}