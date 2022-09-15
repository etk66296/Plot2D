let init = (parentHtmlElement) => {

  let domObjectTracker = new DomObjectTracker()
  let domBuilder = new DomBuilder(domObjectTracker)
  let myFirstWindow = domBuilder
    .produceWindowOn(parentHtmlElement)
    .and()
    .assembleItWith({
      pos: { x: 50, y: 200 },
      dim: { w: 480, h: 320 },
      isStretchable: false,
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




  // numbers

  let calculatorProdNumberSeven = new Rect()
  calculatorProdNumberSeven.init(10, 60, 40, 40)
  calculatorProdNumberSeven.setBackgroundColor()
  calculatorProdNumberSeven.setBorder()
  calculatorProdNumberSeven.setText('7')
  calculatorProdNumberSeven.actAsReporterOnclick()
  calculatorProdNumberSeven.interpretableHandler.publication = "7"
  myFirstWindow.appendChild(calculatorProdNumberSeven)

  let calculatorProdNumberEight = new Rect()
  calculatorProdNumberEight.init(60, 60, 40, 40)
  calculatorProdNumberEight.setBackgroundColor()
  calculatorProdNumberEight.setBorder()
  calculatorProdNumberEight.setText('8')
  calculatorProdNumberEight.actAsReporterOnclick()
  calculatorProdNumberEight.interpretableHandler.publication = "8"
  myFirstWindow.appendChild(calculatorProdNumberEight)

  let calculatorProdNumberNine = new Rect()
  calculatorProdNumberNine.init(110, 60, 40, 40)
  calculatorProdNumberNine.setBackgroundColor()
  calculatorProdNumberNine.setBorder()
  calculatorProdNumberNine.setText('9')
  calculatorProdNumberNine.actAsReporterOnclick()
  calculatorProdNumberNine.interpretableHandler.publication = "9"
  myFirstWindow.appendChild(calculatorProdNumberNine)

  let calculatorProdNumberFour = new Rect()
  calculatorProdNumberFour.init(10, 110, 40, 40)
  calculatorProdNumberFour.setBackgroundColor()
  calculatorProdNumberFour.setBorder()
  calculatorProdNumberFour.setText('4')
  calculatorProdNumberFour.actAsReporterOnclick()
  calculatorProdNumberFour.interpretableHandler.publication = "4"
  myFirstWindow.appendChild(calculatorProdNumberFour)

  let calculatorProdNumberFive = new Rect()
  calculatorProdNumberFive.init(60, 110, 40, 40)
  calculatorProdNumberFive.setBackgroundColor()
  calculatorProdNumberFive.setBorder()
  calculatorProdNumberFive.setText('5')
  calculatorProdNumberFive.actAsReporterOnclick()
  calculatorProdNumberFive.interpretableHandler.publication = "5"
  myFirstWindow.appendChild(calculatorProdNumberFive)

  let calculatorProdNumberSix = new Rect()
  calculatorProdNumberSix.init(110, 110, 40, 40)
  calculatorProdNumberSix.setBackgroundColor()
  calculatorProdNumberSix.setBorder()
  calculatorProdNumberSix.setText('6')
  calculatorProdNumberSix.actAsReporterOnclick()
  calculatorProdNumberSix.interpretableHandler.publication = "6"
  myFirstWindow.appendChild(calculatorProdNumberSix)

  let calculatorProdNumberOne = new Rect()
  calculatorProdNumberOne.init(10, 160, 40, 40)
  calculatorProdNumberOne.setBackgroundColor()
  calculatorProdNumberOne.setBorder()
  calculatorProdNumberOne.setText('1')
  calculatorProdNumberOne.actAsReporterOnclick()
  calculatorProdNumberOne.interpretableHandler.publication = "1"
  myFirstWindow.appendChild(calculatorProdNumberOne)

  let calculatorProdNumberTwo = new Rect()
  calculatorProdNumberTwo.init(60, 160, 40, 40)
  calculatorProdNumberTwo.setBackgroundColor()
  calculatorProdNumberTwo.setBorder()
  calculatorProdNumberTwo.setText('2')
  calculatorProdNumberTwo.actAsReporterOnclick()
  calculatorProdNumberTwo.interpretableHandler.publication = "2"
  myFirstWindow.appendChild(calculatorProdNumberTwo)

  let calculatorProdNumberThree = new Rect()
  calculatorProdNumberThree.init(110, 160, 40, 40)
  calculatorProdNumberThree.setBackgroundColor()
  calculatorProdNumberThree.setBorder()
  calculatorProdNumberThree.setText('3')
  calculatorProdNumberThree.actAsReporterOnclick()
  calculatorProdNumberThree.interpretableHandler.publication = "3"
  myFirstWindow.appendChild(calculatorProdNumberThree)

  let calculatorProdNumberZero = new Rect()
  calculatorProdNumberZero.init(10, 210, 40, 40)
  calculatorProdNumberZero.setBackgroundColor()
  calculatorProdNumberZero.setBorder()
  calculatorProdNumberZero.setText('0')
  calculatorProdNumberZero.actAsReporterOnclick()
  calculatorProdNumberZero.interpretableHandler.publication = "0"
  myFirstWindow.appendChild(calculatorProdNumberZero)


  // operators
  let calculatorProdNumberPlus = new Rect()
  calculatorProdNumberPlus.init(430, 110, 40, 40)
  calculatorProdNumberPlus.setBackgroundColor()
  calculatorProdNumberPlus.setBorder()
  calculatorProdNumberPlus.setText('+')
  calculatorProdNumberPlus.actAsReporterOnclick()
  calculatorProdNumberPlus.interpretableHandler.publication = "+"
  myFirstWindow.appendChild(calculatorProdNumberPlus)

  let calculatorProdNumberMinus = new Rect()
  calculatorProdNumberMinus.init(430, 160, 40, 40)
  calculatorProdNumberMinus.setBackgroundColor()
  calculatorProdNumberMinus.setBorder()
  calculatorProdNumberMinus.setText('-')
  calculatorProdNumberMinus.actAsReporterOnclick()
  calculatorProdNumberMinus.interpretableHandler.publication = "-"
  myFirstWindow.appendChild(calculatorProdNumberMinus)

  let calculatorProdNumberMultiply = new Rect()
  calculatorProdNumberMultiply.init(380, 160, 40, 40)
  calculatorProdNumberMultiply.setBackgroundColor()
  calculatorProdNumberMultiply.setBorder()
  calculatorProdNumberMultiply.setText('*')
  calculatorProdNumberMultiply.actAsReporterOnclick()
  calculatorProdNumberMultiply.interpretableHandler.publication = "*"
  myFirstWindow.appendChild(calculatorProdNumberMultiply)

  let calculatorProdNumberDivide = new Rect()
  calculatorProdNumberDivide.init(380, 110, 40, 40)
  calculatorProdNumberDivide.setBackgroundColor()
  calculatorProdNumberDivide.setBorder()
  calculatorProdNumberDivide.setText(':')
  calculatorProdNumberDivide.actAsReporterOnclick()
  calculatorProdNumberDivide.interpretableHandler.publication = "/"
  myFirstWindow.appendChild(calculatorProdNumberDivide)

  let calculatorProdNumberSqrt = new Rect()
  calculatorProdNumberSqrt.init(330, 110, 40, 40)
  calculatorProdNumberSqrt.setBackgroundColor()
  calculatorProdNumberSqrt.setBorder()
  calculatorProdNumberSqrt.setText('√')
  calculatorProdNumberSqrt.actAsPublicistOnclick()
  calculatorProdNumberSqrt.interpretableHandler.publication = "Math.sqrt("
  myFirstWindow.appendChild(calculatorProdNumberSqrt)


  // control
  let calculatorSolve = new Rect()
  calculatorSolve.init(430, 210, 40, 40)
  calculatorSolve.setBackgroundColor()
  calculatorSolve.setBorder()
  calculatorSolve.setText('=')
  calculatorSolve.actAsPublicistOnclick()
  calculatorSolve.interpretableHandler.publication = "="
  myFirstWindow.appendChild(calculatorSolve)

  calculatorSolve.interpretableHandler.callbackOnParticipate = () => {

    calculatorDisplay.interpretableHandler.receivedPublications = ""

  }

  let calculatorDelete = new Rect()
  calculatorDelete.init(380, 60, 90, 40)
  calculatorDelete.setBackgroundColor()
  calculatorDelete.setBorder()
  calculatorDelete.setText('CE')
  calculatorDelete.actAsReporterOnclick()
  calculatorDelete.interpretableHandler.publication = ""
  myFirstWindow.appendChild(calculatorDelete)

  calculatorDelete.interpretableHandler.callbackOnPublish = () => {

    calculatorDisplay.interpretableHandler.receivedPublications = ""
    calculatorSolve.interpretableHandler.receivedPublications = ""
    calculatorDisplay.displayElement.innerText =
      calculatorDisplay.interpretableHandler.receivedPublications

  }

  let calculatorDisplay = new Rect()
  calculatorDisplay.init(10, 10, 460, 40)
  calculatorDisplay.setBackgroundColor("#6f6a52")
  calculatorDisplay.setBorder()
  calculatorDisplay.actAsReader()
  calculatorDisplay.setTextAlign('right')
  calculatorDisplay.interpretableHandler.callbackOnReadPublication = () => {

    let received = calculatorDisplay.interpretableHandler.receivedPublications
    // let lastReceived = received.charAt(received.length - 1)

    // if(lastReceived == '+' ||
    //   lastReceived == '-' ||
    //   lastReceived == ':' ||
    //   lastReceived == '*'
    // ) {

    //   calculatorDisplay.interpretableHandler.receivedPublications = ""

    // }

    calculatorDisplay.displayElement.innerText =
      calculatorDisplay.interpretableHandler.receivedPublications

  }
  myFirstWindow.appendChild(calculatorDisplay)


  calculatorProdNumberZero.interpretableHandler.registerSubscriber(calculatorDisplay, calculatorSolve)
  calculatorProdNumberOne.interpretableHandler.registerSubscriber(calculatorDisplay, calculatorSolve)
  calculatorProdNumberTwo.interpretableHandler.registerSubscriber(calculatorDisplay, calculatorSolve)
  calculatorProdNumberThree.interpretableHandler.registerSubscriber(calculatorDisplay, calculatorSolve)
  calculatorProdNumberFour.interpretableHandler.registerSubscriber(calculatorDisplay, calculatorSolve)
  calculatorProdNumberFive.interpretableHandler.registerSubscriber(calculatorDisplay, calculatorSolve)
  calculatorProdNumberSix.interpretableHandler.registerSubscriber(calculatorDisplay, calculatorSolve)
  calculatorProdNumberSeven.interpretableHandler.registerSubscriber(calculatorDisplay, calculatorSolve)
  calculatorProdNumberEight.interpretableHandler.registerSubscriber(calculatorDisplay, calculatorSolve)
  calculatorProdNumberNine.interpretableHandler.registerSubscriber(calculatorDisplay, calculatorSolve)

  calculatorProdNumberPlus.interpretableHandler.registerSubscriber(calculatorDisplay, calculatorSolve)
  calculatorProdNumberMinus.interpretableHandler.registerSubscriber(calculatorDisplay, calculatorSolve)
  calculatorProdNumberMultiply.interpretableHandler.registerSubscriber(calculatorDisplay, calculatorSolve)
  calculatorProdNumberDivide.interpretableHandler.registerSubscriber(calculatorDisplay, calculatorSolve)
  calculatorProdNumberSqrt.interpretableHandler.registerSubscriber(calculatorSolve)

  calculatorSolve.interpretableHandler.registerSubscriber(calculatorDisplay, calculatorProdNumberSqrt)
  calculatorDelete.interpretableHandler.registerSubscriber(calculatorDisplay, calculatorSolve)

}