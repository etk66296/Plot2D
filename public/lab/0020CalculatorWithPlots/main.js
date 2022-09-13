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

  let calculatorDisplay = new Rect()
  calculatorDisplay.init(10, 10, 460, 40)
  calculatorDisplay.setBackgroundColor("#6f6a52")
  calculatorDisplay.setBorder()
  calculatorDisplay.actAsSink()
  calculatorDisplay.setTextAlign('right')
  calculatorDisplay.injectCallback(() => {


    if(calculatorDisplay.executionCode === '+') {

      calculatorDisplay.executionCode = ''

    }
    calculatorDisplay.displayElement.innerText = calculatorDisplay.executionCode

  })
  myFirstWindow.appendChild(calculatorDisplay)


  let calculatorProdNumberEqual = new Rect()
  calculatorProdNumberEqual.init(110, 210, 40, 40)
  calculatorProdNumberEqual.setBackgroundColor()
  calculatorProdNumberEqual.setBorder()
  calculatorProdNumberEqual.setText('=')
  calculatorProdNumberEqual.actAsSinkSource()
  calculatorProdNumberEqual.addReceiver(calculatorDisplay)
  calculatorProdNumberEqual.productionCode = "="
  myFirstWindow.appendChild(calculatorProdNumberEqual)



  let calculatorProdNumberSeven = new Rect()
  calculatorProdNumberSeven.init(10, 60, 40, 40)
  calculatorProdNumberSeven.setBackgroundColor()
  calculatorProdNumberSeven.setBorder()
  calculatorProdNumberSeven.setText('7')
  calculatorProdNumberSeven.actAsSource()
  calculatorProdNumberSeven.addReceiver(calculatorProdNumberEqual)
  calculatorProdNumberSeven.addReceiver(calculatorDisplay)
  calculatorProdNumberSeven.productionCode = "7"
  myFirstWindow.appendChild(calculatorProdNumberSeven)

  let calculatorProdNumberEight = new Rect()
  calculatorProdNumberEight.init(60, 60, 40, 40)
  calculatorProdNumberEight.setBackgroundColor()
  calculatorProdNumberEight.setBorder()
  calculatorProdNumberEight.setText('8')
  calculatorProdNumberEight.actAsSource()
  calculatorProdNumberEight.addReceiver(calculatorProdNumberEqual)
  calculatorProdNumberEight.addReceiver(calculatorDisplay)
  calculatorProdNumberEight.productionCode = "8"
  myFirstWindow.appendChild(calculatorProdNumberEight)

  let calculatorProdNumberNine = new Rect()
  calculatorProdNumberNine.init(110, 60, 40, 40)
  calculatorProdNumberNine.setBackgroundColor()
  calculatorProdNumberNine.setBorder()
  calculatorProdNumberNine.setText('9')
  calculatorProdNumberNine.actAsSource()
  calculatorProdNumberNine.addReceiver(calculatorProdNumberEqual)
  calculatorProdNumberNine.addReceiver(calculatorDisplay)
  calculatorProdNumberNine.productionCode = "9"
  myFirstWindow.appendChild(calculatorProdNumberNine)

  let calculatorProdNumberFour = new Rect()
  calculatorProdNumberFour.init(10, 110, 40, 40)
  calculatorProdNumberFour.setBackgroundColor()
  calculatorProdNumberFour.setBorder()
  calculatorProdNumberFour.setText('4')
  calculatorProdNumberFour.actAsSource()
  calculatorProdNumberFour.addReceiver(calculatorProdNumberEqual)
  calculatorProdNumberFour.addReceiver(calculatorDisplay)
  calculatorProdNumberFour.productionCode = "4"
  myFirstWindow.appendChild(calculatorProdNumberFour)

  let calculatorProdNumberFive = new Rect()
  calculatorProdNumberFive.init(60, 110, 40, 40)
  calculatorProdNumberFive.setBackgroundColor()
  calculatorProdNumberFive.setBorder()
  calculatorProdNumberFive.setText('5')
  calculatorProdNumberFive.actAsSource()
  calculatorProdNumberFive.addReceiver(calculatorProdNumberEqual)
  calculatorProdNumberFive.addReceiver(calculatorDisplay)
  calculatorProdNumberFive.productionCode = "5"
  myFirstWindow.appendChild(calculatorProdNumberFive)

  let calculatorProdNumberSix = new Rect()
  calculatorProdNumberSix.init(110, 110, 40, 40)
  calculatorProdNumberSix.setBackgroundColor()
  calculatorProdNumberSix.setBorder()
  calculatorProdNumberSix.setText('6')
  calculatorProdNumberSix.actAsSource()
  calculatorProdNumberSix.addReceiver(calculatorProdNumberEqual)
  calculatorProdNumberSix.addReceiver(calculatorDisplay)
  calculatorProdNumberSix.productionCode = "6"
  myFirstWindow.appendChild(calculatorProdNumberSix)

  let calculatorProdNumberOne = new Rect()
  calculatorProdNumberOne.init(10, 160, 40, 40)
  calculatorProdNumberOne.setBackgroundColor()
  calculatorProdNumberOne.setBorder()
  calculatorProdNumberOne.setText('1')
  calculatorProdNumberOne.actAsSource()
  calculatorProdNumberOne.addReceiver(calculatorProdNumberEqual)
  calculatorProdNumberOne.addReceiver(calculatorDisplay)
  calculatorProdNumberOne.productionCode = "1"
  myFirstWindow.appendChild(calculatorProdNumberOne)

  let calculatorProdNumberTwo = new Rect()
  calculatorProdNumberTwo.init(60, 160, 40, 40)
  calculatorProdNumberTwo.setBackgroundColor()
  calculatorProdNumberTwo.setBorder()
  calculatorProdNumberTwo.setText('2')
  calculatorProdNumberTwo.actAsSource()
  calculatorProdNumberTwo.addReceiver(calculatorProdNumberEqual)
  calculatorProdNumberTwo.addReceiver(calculatorDisplay)
  calculatorProdNumberTwo.productionCode = "2"
  myFirstWindow.appendChild(calculatorProdNumberTwo)

  let calculatorProdNumberThree = new Rect()
  calculatorProdNumberThree.init(110, 160, 40, 40)
  calculatorProdNumberThree.setBackgroundColor()
  calculatorProdNumberThree.setBorder()
  calculatorProdNumberThree.setText('3')
  calculatorProdNumberThree.actAsSource()
  calculatorProdNumberThree.addReceiver(calculatorProdNumberEqual)
  calculatorProdNumberThree.addReceiver(calculatorDisplay)
  calculatorProdNumberThree.productionCode = "3"
  myFirstWindow.appendChild(calculatorProdNumberThree)

  let calculatorProdNumberZero = new Rect()
  calculatorProdNumberZero.init(10, 210, 40, 40)
  calculatorProdNumberZero.setBackgroundColor()
  calculatorProdNumberZero.setBorder()
  calculatorProdNumberZero.setText('0')
  calculatorProdNumberZero.actAsSource()
  calculatorProdNumberZero.addReceiver(calculatorProdNumberEqual)
  calculatorProdNumberZero.addReceiver(calculatorDisplay)
  calculatorProdNumberZero.productionCode = "1"
  myFirstWindow.appendChild(calculatorProdNumberZero)

  let calculatorProdNumberPlus = new Rect()
  calculatorProdNumberPlus.init(60, 210, 40, 40)
  calculatorProdNumberPlus.setBackgroundColor()
  calculatorProdNumberPlus.setBorder()
  calculatorProdNumberPlus.setText('+')
  calculatorProdNumberPlus.actAsSource()
  calculatorProdNumberPlus.addReceiver(calculatorProdNumberEqual)
  calculatorProdNumberPlus.addReceiver(calculatorDisplay)
  calculatorProdNumberPlus.productionCode = "+"
  myFirstWindow.appendChild(calculatorProdNumberPlus)

  

  
    
  // let testDiv =
  //   document.createElementNS("http://www.w3.org/1999/xhtml", 'div')

  // testDiv.style.color = '#FFFFFF'
  // testDiv.style.fontSize = '12px'
  // testDiv.style.backgroundColor = '#000000'
  // testDiv.innerText = `TEST TEST TEST TEST TEST TEST TEST TEST TEST 
  // TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST 
  // TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST
  // TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST`

  // myFirstWindow.appendChild(testDiv)

  // mySecondWindow.appendChild('')

  // let imageLoader = new ImageLoader()
  // imageLoader.init()

  // imageLoader.loadListFromRemote([
  //   {
  //     identifier: 'grenadeGuy',
  //     url: 'things/sprites/grenade-guy-sheet-alpha.png'
  //   },
  //   {
  //     identifier: 'isometricTrees',
  //     url: 'things/sprites/isometricTrees_green.png'
  //   },
  //   {
  //     identifier: 'overworld',
  //     url: 'things/sprites/overworld_no_spaces_updated.png',
  //   },
  //   {
  //     identifier: 'monsterSkeleton',
  //     url: 'things/sprites/monsterSkeleton.png'
  //   }
  // ])

  // imageLoader.onReadyToUse = () => {

  //   let myPixelSurface = new PixelSurface(imageLoader.loaded['grenadeGuy'])
  //   let myDomStage = new DomStage()
  //   let myPerformanceStage = new PerformanceStage()

  //   myDomStage.admit(myPixelSurface)
  //   myFirstWindow.appendChild(myDomStage)

  //   myPerformanceStage.admit(myPixelSurface)
  //   mySecondWindow.appendChild(myPerformanceStage)

  // }

}