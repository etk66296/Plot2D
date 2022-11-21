let init = (parentHtmlElement) => {

  let domObjectTracker = new DomObjectTracker()
  let plotObjectTracker = new PlotObjectTracker()

  let frameController = new FrameController()

  let domBuilder = new DomBuilder(domObjectTracker)
  let myFirstWindow = domBuilder
    .produceWindowOn(parentHtmlElement)
    .and()
    .assembleItWith({
      pos: { x: 50, y: 200 },
      dim: { w: 520, h: 290 },
      isStretchable: true,
      controlPanel: false,
      headerBar: true
    })


  let mySecondWindow = domBuilder
    .produceWindowOn(parentHtmlElement)
    .and()
    .assembleItWith({
      pos: { x: 900, y: 200 },
      dim: { w: 800, h: 600 },
      headerBar: true,
      isStretchable: true,
      displayType: 'performance2D'
    })

    let myDomStage = new DomStage(plotObjectTracker)
    myDomStage.init()
    myFirstWindow.appendStage(myDomStage)

    // let myRect = new Rect(64, 64, 64, 64)
    // myDomStage.admit(myRect)
    // myRect.displayElement.style.backgroundColor = 'rgb(128, 40, 128)'

    // myRect.optionAccessElement.setPos()

    frameController.stages.push(myDomStage)
    frameController.go()
    // frameController.go()
    // window.setTimeout(() => {
    //   frameController.stop = true
    // }, 100)
   
    


}