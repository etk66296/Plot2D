let init = (parentHtmlElement) => {

  let domObjectTracker = new DomObjectTracker()
  let domBuilder = new DomBuilder(domObjectTracker)
  let myFirstWindow = domBuilder
    .produceWindowOn(parentHtmlElement)
    .and()
    .assembleItWith({
      pos: { x: 50, y: 200 },
      dim: { w: 480, h: 320 },
      headerBar: true
    })
  myFirstWindow.display.containerElement.style.backgroundColor = '#222222'


  let mySecondWindow = domBuilder
    .produceWindowOn(parentHtmlElement)
    .and()
    .assembleItWith({
      pos: { x: 900, y: 200 },
      dim: { w: 800, h: 600 },
      headerBar: true,
      displayType: 'performance2D'
    })
  mySecondWindow.display.containerElement.style.backgroundColor = '#222222'
    
  let testDiv =
    document.createElementNS("http://www.w3.org/1999/xhtml", 'div')

  testDiv.style.color = '#FFFFFF'
  testDiv.style.fontSize = '12px'
  testDiv.style.backgroundColor = '#000000'
  testDiv.innerText = `TEST TEST TEST TEST TEST TEST TEST TEST TEST 
  TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST 
  TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST
  TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST`

  myFirstWindow.appendChild(testDiv)

  mySecondWindow.appendChild('')

  let imageLoader = new ImageLoader()
  imageLoader.init()

  imageLoader.loadListFromRemote([
    {
      identifier: 'grenadeGuy',
      url: 'things/sprites/grenade-guy-sheet-alpha.png'
    },
    {
      identifier: 'isometricTrees',
      url: 'things/sprites/isometricTrees_green.png'
    },
    {
      identifier: 'overworld',
      url: 'things/sprites/overworld_no_spaces_updated.png',
    },
    {
      identifier: 'monsterSkeleton',
      url: 'things/sprites/monsterSkeleton.png'
    }
  ])

  imageLoader.onReadyToUse = () => {

    let myPixelSurface = new PixelSurface(imageLoader.loaded['grenadeGuy'])
    let myDomStage = new DomStage()
    let myPerformanceStage = new PerformanceStage()

    myDomStage.admit(myPixelSurface)
    myFirstWindow.appendChild(myDomStage)

    myPerformanceStage.admit(myPixelSurface)
    mySecondWindow.appendChild(myPerformanceStage)

  }


}