let init = (parentHtmlElement) => {

  let domObjectTracker = new DomObjectTracker()
  let domBuilder = new DomBuilder(domObjectTracker)
  let myDomWindow = domBuilder
    .produceWindowOn(parentHtmlElement)
    .and()
    .assembleItWith({
      pos: { x: 50, y: 200 },
      dim: { w: 480, h: 320 },
      headerBar: true
    })
  myDomWindow.display.containerElement.style.backgroundColor = '#222222'


  let myCanvasWindow = domBuilder
    .produceWindowOn(parentHtmlElement)
    .and()
    .assembleItWith({
      pos: { x: 900, y: 200 },
      dim: { w: 800, h: 600 },
      headerBar: true,
      displayType: 'performance2D'
    })
  myCanvasWindow.display.containerElement.style.backgroundColor = '#222222'

  let pixelSurface = new PixelSurface(new Image())
  pixelSurface.htmlImageElement.src = 'things/sprites/overworld_no_spaces_updated.png'


  pixelSurface.htmlImageElement.onload = () => {

    let domStage = new DomStage()
    let performanceStage = new PerformanceStage()
    
    domStage.admit(pixelSurface)
    performanceStage.admit(pixelSurface)
    
    myCanvasWindow.appendChild(performanceStage)
    myDomWindow.appendChild(domStage)
    
  }

}