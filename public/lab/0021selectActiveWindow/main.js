let init = (parentHtmlElement) => {

  let domObjectTracker = new DomObjectTracker()
  let domBuilder = new DomBuilder(domObjectTracker)
  let myCalculatorWindow = domBuilder
    .produceWindowOn(parentHtmlElement)
    .and()
    .assembleItWith({
      pos: { x: 50, y: 200 },
      dim: { w: 520, h: 290 },
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


  calculatorProdNumberSeven.actAsReporterOnclick()
  calculatorProdNumberSeven.codeHandler.publication = "7"
  myCalculatorWindow.appendChild(calculatorProdNumberSeven)

  let calculatorProdNumberEight = new Rect()
  calculatorProdNumberEight.init(60, 60, 40, 40)


  calculatorProdNumberEight.actAsReporterOnclick()
  calculatorProdNumberEight.codeHandler.publication = "8"
  myCalculatorWindow.appendChild(calculatorProdNumberEight)

  let calculatorProdNumberNine = new Rect()
  calculatorProdNumberNine.init(110, 60, 40, 40)


  calculatorProdNumberNine.actAsReporterOnclick()
  calculatorProdNumberNine.codeHandler.publication = "9"
  myCalculatorWindow.appendChild(calculatorProdNumberNine)

  let calculatorProdNumberFour = new Rect()
  calculatorProdNumberFour.init(10, 110, 40, 40)


  calculatorProdNumberFour.actAsReporterOnclick()
  calculatorProdNumberFour.codeHandler.publication = "4"
  myCalculatorWindow.appendChild(calculatorProdNumberFour)

  let calculatorProdNumberFive = new Rect()
  calculatorProdNumberFive.init(60, 110, 40, 40)


  calculatorProdNumberFive.actAsReporterOnclick()
  calculatorProdNumberFive.codeHandler.publication = "5"
  myCalculatorWindow.appendChild(calculatorProdNumberFive)

  let calculatorProdNumberSix = new Rect()
  calculatorProdNumberSix.init(110, 110, 40, 40)


  calculatorProdNumberSix.actAsReporterOnclick()
  calculatorProdNumberSix.codeHandler.publication = "6"
  myCalculatorWindow.appendChild(calculatorProdNumberSix)

  let calculatorProdNumberOne = new Rect()
  calculatorProdNumberOne.init(10, 160, 40, 40)


  calculatorProdNumberOne.actAsReporterOnclick()
  calculatorProdNumberOne.codeHandler.publication = "1"
  myCalculatorWindow.appendChild(calculatorProdNumberOne)

  let calculatorProdNumberTwo = new Rect()
  calculatorProdNumberTwo.init(60, 160, 40, 40)


  calculatorProdNumberTwo.actAsReporterOnclick()
  calculatorProdNumberTwo.codeHandler.publication = "2"
  myCalculatorWindow.appendChild(calculatorProdNumberTwo)

  let calculatorProdNumberThree = new Rect()
  calculatorProdNumberThree.init(110, 160, 40, 40)


  calculatorProdNumberThree.actAsReporterOnclick()
  calculatorProdNumberThree.codeHandler.publication = "3"
  myCalculatorWindow.appendChild(calculatorProdNumberThree)

  let calculatorProdNumberZero = new Rect()
  calculatorProdNumberZero.init(10, 210, 40, 40)


  calculatorProdNumberZero.actAsReporterOnclick()
  calculatorProdNumberZero.codeHandler.publication = "0"
  myCalculatorWindow.appendChild(calculatorProdNumberZero)

  let calculatorProdNumberPi = new Rect()
  calculatorProdNumberPi.init(110, 210, 40, 40)


  calculatorProdNumberPi.actAsReporterOnclick()
  calculatorProdNumberPi.codeHandler.evaluate = true
  calculatorProdNumberPi.codeHandler.publication = "Math.PI"
  myCalculatorWindow.appendChild(calculatorProdNumberPi)

  let calculatorProdComma = new Rect()
  calculatorProdComma.init(60, 210, 40, 40)


  calculatorProdComma.actAsReporterOnclick()
  calculatorProdComma.codeHandler.evaluate = true
  calculatorProdComma.codeHandler.publication = "."
  myCalculatorWindow.appendChild(calculatorProdComma)
  

  let calculatorDisplay = new Rect()
  calculatorDisplay.init(10, 10, 500, 40)

  calculatorDisplay.actAsPublicist()
  calculatorDisplay.displayElement.style.overflowY = 'hidden'
  calculatorDisplay.displayElement.style.overflowX = 'auto'
  calculatorDisplay.codeHandler.receivedPublications = ""
  calculatorDisplay.codeHandler.callbackOnReadPublication = () => {

    calculatorDisplay.displayElement.innerText =
      calculatorDisplay.codeHandler.receivedPublications

  }
  myCalculatorWindow.appendChild(calculatorDisplay)

  // operator
  let calculatorOperatorPlus = new Rect()
  calculatorOperatorPlus.init(160, 60, 40, 40)


  calculatorOperatorPlus.actAsPublicistOnclick()
  calculatorOperatorPlus.codeHandler.publication = "+"
  myCalculatorWindow.appendChild(calculatorOperatorPlus)

  let calculatorOperatorMinus = new Rect()
  calculatorOperatorMinus.init(160, 110, 40, 40)


  calculatorOperatorMinus.actAsPublicistOnclick()
  calculatorOperatorMinus.codeHandler.publication = "-"
  myCalculatorWindow.appendChild(calculatorOperatorMinus)

  let calculatorOperatorDivide = new Rect()
  calculatorOperatorDivide.init(160, 160, 40, 40)


  calculatorOperatorDivide.actAsPublicistOnclick()
  calculatorOperatorDivide.codeHandler.publication = "/"
  myCalculatorWindow.appendChild(calculatorOperatorDivide)

  let calculatorOperatorMultiply = new Rect()
  calculatorOperatorMultiply.init(160, 210, 40, 40)


  calculatorOperatorMultiply.actAsPublicistOnclick()
  calculatorOperatorMultiply.codeHandler.publication = "*"
  myCalculatorWindow.appendChild(calculatorOperatorMultiply)

  let calculatorAngleMode = new Rect()
  calculatorAngleMode.init(260, 210, 40, 40)

 // initial value
  calculatorAngleMode.actAsTogglePublicistOnclick()
  calculatorAngleMode.codeHandler.publication.push( "Math.PI / 180 * ")
  calculatorAngleMode.codeHandler.publication.push("1 * ")
  calculatorAngleMode.codeHandler.publicationText.push("deg")
  calculatorAngleMode.codeHandler.publicationText.push("rad")
  myCalculatorWindow.appendChild(calculatorAngleMode)

  let calculatorFunctionTan = new Rect()
  calculatorFunctionTan.init(210, 60, 40, 40)



  calculatorFunctionTan.actAsPublicistOnclick()
  calculatorFunctionTan.codeHandler.publication = "Math.tan("
  myCalculatorWindow.appendChild(calculatorFunctionTan)

  let calculatorFunctionATan = new Rect()
  calculatorFunctionATan.init(260, 60, 40, 40)



  calculatorFunctionATan.actAsPublicistOnclick()
  calculatorFunctionATan.codeHandler.publication = "Math.atan("
  myCalculatorWindow.appendChild(calculatorFunctionATan)

  let calculatorFunctionCos = new Rect()
  calculatorFunctionCos.init(210, 110, 40, 40)



  calculatorFunctionCos.actAsPublicistOnclick()
  calculatorFunctionCos.codeHandler.publication = "Math.cos("
  myCalculatorWindow.appendChild(calculatorFunctionCos)

  let calculatorFunctionACos = new Rect()
  calculatorFunctionACos.init(260, 110, 40, 40)



  calculatorFunctionACos.actAsPublicistOnclick()
  calculatorFunctionACos.codeHandler.publication = "Math.acos("
  myCalculatorWindow.appendChild(calculatorFunctionACos)

  let calculatorFunctionSin = new Rect()
  calculatorFunctionSin.init(210, 160, 40, 40)



  calculatorFunctionSin.actAsPublicistOnclick()
  calculatorFunctionSin.codeHandler.publication = "Math.sin("
  myCalculatorWindow.appendChild(calculatorFunctionSin)

  let calculatorFunctionASin = new Rect()
  calculatorFunctionASin.init(260, 160, 40, 40)



  calculatorFunctionASin.actAsPublicistOnclick()
  calculatorFunctionASin.codeHandler.publication = "Math.asin("
  myCalculatorWindow.appendChild(calculatorFunctionASin)

  let calculatorConstantE = new Rect()
  calculatorConstantE.init(310, 60, 40, 40)



  calculatorConstantE.actAsPublicistOnclick()
  calculatorConstantE.codeHandler.publication = "Math.E"
  myCalculatorWindow.appendChild(calculatorConstantE)

  let calculatorFunctionLn10 = new Rect()
  calculatorFunctionLn10.init(310, 110, 40, 40)



  calculatorFunctionLn10.actAsPublicistOnclick()
  calculatorFunctionLn10.codeHandler.publication = "Math.log10("
  myCalculatorWindow.appendChild(calculatorFunctionLn10)

  let calculatorFunctionLnE = new Rect()
  calculatorFunctionLnE.init(310, 210, 40, 40)



  calculatorFunctionLnE.actAsPublicistOnclick()
  calculatorFunctionLnE.codeHandler.publication = "Math.log("
  myCalculatorWindow.appendChild(calculatorFunctionLnE)

  let calculatorFunctionLn2 = new Rect()
  calculatorFunctionLn2.init(310, 160, 40, 40)



  calculatorFunctionLn2.actAsPublicistOnclick()
  calculatorFunctionLn2.codeHandler.publication = "Math.log2("
  myCalculatorWindow.appendChild(calculatorFunctionLn2)

  let calculatorFunctionSqrt = new Rect()
  calculatorFunctionSqrt.init(210, 210, 40, 40)


  calculatorFunctionSqrt.actAsPublicistOnclick()
  calculatorFunctionSqrt.codeHandler.publication = "Math.sqrt("
  myCalculatorWindow.appendChild(calculatorFunctionSqrt)

  let calculatorFunctionPow = new Rect()
  calculatorFunctionPow.init(360, 60, 40, 40)



  calculatorFunctionPow.actAsPublicistOnclick()
  calculatorFunctionPow.codeHandler.publication = "Math.pow("
  myCalculatorWindow.appendChild(calculatorFunctionPow)

  let calculatorFunctionPowTwo = new Rect()
  calculatorFunctionPowTwo.init(360, 110, 40, 40)



  calculatorFunctionPowTwo.actAsPublicistOnclick()
  calculatorFunctionPowTwo.codeHandler.publication = "Math.pow(.+, 2"
  myCalculatorWindow.appendChild(calculatorFunctionPowTwo)

  let calculatorFunctionPowThree = new Rect()
  calculatorFunctionPowThree.init(360, 160, 40, 40)



  calculatorFunctionPowThree.actAsPublicistOnclick()
  calculatorFunctionPowThree.codeHandler.publication = "Math.pow(.+, 3"
  myCalculatorWindow.appendChild(calculatorFunctionPowThree)

  let calculatorFunctionRandom = new Rect()
  calculatorFunctionRandom.init(360, 210, 40, 40)



  calculatorFunctionRandom.actAsPublicistOnclick()
  calculatorFunctionRandom.codeHandler.publication = "Math.random("
  myCalculatorWindow.appendChild(calculatorFunctionRandom)

  let calculatorClear = new Rect()
  calculatorClear.init(420, 60, 90, 40)


  calculatorClear.actAsPublicistOnclick()
  calculatorClear.codeHandler.publication = ""
  myCalculatorWindow.appendChild(calculatorClear)

  let calculatorOperatorSolve = new Rect()
  calculatorOperatorSolve.init(420, 210, 90, 40)


  calculatorOperatorSolve.actAsPublicistOnclick()
  myCalculatorWindow.appendChild(calculatorOperatorSolve)
  calculatorOperatorSolve.codeHandler.callbackOnReadPublication = () => {

  }

  calculatorProdNumberZero.codeHandler.registerSubscriber(
    { plotObject: calculatorDisplay, duty: [ CodeHandleMode.APPEND ] },
    { plotObject: calculatorOperatorSolve, duty: [ CodeHandleMode.APPEND ] }
  )

  calculatorProdNumberOne.codeHandler.registerSubscriber(
    { plotObject: calculatorDisplay, duty: [ CodeHandleMode.APPEND ] },
    { plotObject: calculatorOperatorSolve, duty: [ CodeHandleMode.APPEND ] }
  )

  calculatorProdNumberTwo.codeHandler.registerSubscriber(
    { plotObject: calculatorDisplay, duty: [ CodeHandleMode.APPEND ] },
    { plotObject: calculatorOperatorSolve, duty: [ CodeHandleMode.APPEND ] }
  )

  calculatorProdNumberThree.codeHandler.registerSubscriber(
    { plotObject: calculatorDisplay, duty: [ CodeHandleMode.APPEND ] },
    { plotObject: calculatorOperatorSolve, duty: [ CodeHandleMode.APPEND ] }
  )

  calculatorProdNumberFour.codeHandler.registerSubscriber(
    { plotObject: calculatorDisplay, duty: [ CodeHandleMode.APPEND ] },
    { plotObject: calculatorOperatorSolve, duty: [ CodeHandleMode.APPEND ] }
  )

  calculatorProdNumberFive.codeHandler.registerSubscriber(
    { plotObject: calculatorDisplay, duty: [ CodeHandleMode.APPEND ] },
    { plotObject: calculatorOperatorSolve, duty: [ CodeHandleMode.APPEND ] }
  )

  calculatorProdNumberSix.codeHandler.registerSubscriber(
    { plotObject: calculatorDisplay, duty: [ CodeHandleMode.APPEND ] },
    { plotObject: calculatorOperatorSolve, duty: [ CodeHandleMode.APPEND ] }
  )

  calculatorProdNumberSeven.codeHandler.registerSubscriber(
    { plotObject: calculatorDisplay, duty: [ CodeHandleMode.APPEND ] },
    { plotObject: calculatorOperatorSolve, duty: [ CodeHandleMode.APPEND ] }
  )

  calculatorProdNumberEight.codeHandler.registerSubscriber(
    { plotObject: calculatorDisplay, duty: [ CodeHandleMode.APPEND ] },
    { plotObject: calculatorOperatorSolve, duty: [ CodeHandleMode.APPEND ] }
  )

  calculatorProdNumberNine.codeHandler.registerSubscriber(
    { plotObject: calculatorDisplay, duty: [ CodeHandleMode.APPEND ] },
    { plotObject: calculatorOperatorSolve, duty: [ CodeHandleMode.APPEND ] }
  )

  calculatorConstantE.codeHandler.registerSubscriber(
    { plotObject: calculatorDisplay, duty: [ CodeHandleMode.EVALUATE ] },
    { plotObject: calculatorOperatorSolve, duty: [ CodeHandleMode.APPEND ] }
  )

  calculatorProdNumberPi.codeHandler.registerSubscriber(
    { plotObject: calculatorDisplay, duty: [ CodeHandleMode.APPEND ] },
    { plotObject: calculatorOperatorSolve, duty: [ CodeHandleMode.APPEND ] }
  )

  calculatorProdComma.codeHandler.registerSubscriber(
    { plotObject: calculatorDisplay, duty: [ CodeHandleMode.APPEND ] },
    { plotObject: calculatorOperatorSolve, duty: [ CodeHandleMode.APPEND ] }
  )

  calculatorOperatorPlus.codeHandler.registerSubscriber(
    { plotObject: calculatorDisplay, duty: [ CodeHandleMode.DELETE_WITH_NEXT_PUBLICATION ] },
    { plotObject: calculatorOperatorSolve, duty: [ CodeHandleMode.APPEND ] }
  )

  calculatorOperatorMinus.codeHandler.registerSubscriber(
    { plotObject: calculatorDisplay, duty: [ CodeHandleMode.DELETE_WITH_NEXT_PUBLICATION ] },
    { plotObject: calculatorOperatorSolve, duty: [ CodeHandleMode.APPEND ] }
  )

  calculatorOperatorMultiply.codeHandler.registerSubscriber(
    { plotObject: calculatorDisplay, duty: [ CodeHandleMode.DELETE_WITH_NEXT_PUBLICATION ] },
    { plotObject: calculatorOperatorSolve, duty: [ CodeHandleMode.APPEND ] }
  )

  calculatorOperatorDivide.codeHandler.registerSubscriber(
    { plotObject: calculatorDisplay, duty: [ CodeHandleMode.DELETE_WITH_NEXT_PUBLICATION ] },
    { plotObject: calculatorOperatorSolve, duty: [ CodeHandleMode.APPEND ] }
  )

  calculatorFunctionSqrt.codeHandler.registerSubscriber(
    { plotObject: calculatorOperatorSolve, duty: [ CodeHandleMode.APPEND_AS_FUNCTION, CodeHandleMode.EVALUATE ] },
    { plotObject: calculatorDisplay, duty: [ CodeHandleMode.APPEND_AS_FUNCTION, CodeHandleMode.EVALUATE ] }
  )

  calculatorFunctionPow.codeHandler.registerSubscriber(
    { plotObject: calculatorOperatorSolve, duty: [ CodeHandleMode.APPEND_AS_FUNCTION_EXPECT_PARAMS ] },
    { plotObject: calculatorDisplay, duty: [ CodeHandleMode.DELETE_WITH_NEXT_PUBLICATION ] }
  )

  calculatorFunctionPowTwo.codeHandler.registerSubscriber(
    { plotObject: calculatorOperatorSolve, duty: [ CodeHandleMode.APPEND_AS_FUNCTION_INJECT_PRESENT, CodeHandleMode.PUBLISH ] }
  )

  calculatorFunctionPowThree.codeHandler.registerSubscriber(
    { plotObject: calculatorOperatorSolve, duty: [ CodeHandleMode.APPEND_AS_FUNCTION_INJECT_PRESENT, CodeHandleMode.PUBLISH ] }
  )

  calculatorFunctionRandom.codeHandler.registerSubscriber(
    { plotObject: calculatorOperatorSolve, duty: [ CodeHandleMode.APPEND_AS_FUNCTION, CodeHandleMode.PUBLISH ] }
  )

  calculatorFunctionLn10.codeHandler.registerSubscriber(
    { plotObject: calculatorOperatorSolve, duty: [ CodeHandleMode.APPEND_AS_FUNCTION, CodeHandleMode.EVALUATE ] },
    { plotObject: calculatorDisplay, duty: [ CodeHandleMode.APPEND_AS_FUNCTION, CodeHandleMode.EVALUATE ] }
  )

  calculatorFunctionLnE.codeHandler.registerSubscriber(
    { plotObject: calculatorOperatorSolve, duty: [ CodeHandleMode.APPEND_AS_FUNCTION, CodeHandleMode.EVALUATE ] },
    { plotObject: calculatorDisplay, duty: [ CodeHandleMode.APPEND_AS_FUNCTION, CodeHandleMode.EVALUATE ] }
  )

  calculatorFunctionLn2.codeHandler.registerSubscriber(
    { plotObject: calculatorOperatorSolve, duty: [ CodeHandleMode.APPEND_AS_FUNCTION, CodeHandleMode.EVALUATE ] },
    { plotObject: calculatorDisplay, duty: [ CodeHandleMode.APPEND_AS_FUNCTION, CodeHandleMode.EVALUATE ] }
  )

  calculatorFunctionTan.codeHandler.registerSubscriber(
    { plotObject: calculatorAngleMode, duty: [ CodeHandleMode.OVERWRITE, CodeHandleMode.PUBLISH ] }
  )
  calculatorFunctionATan.codeHandler.registerSubscriber(
    { plotObject: calculatorAngleMode, duty: [ CodeHandleMode.OVERWRITE, CodeHandleMode.PUBLISH ] }
  )
  calculatorFunctionSin.codeHandler.registerSubscriber(
    { plotObject: calculatorAngleMode, duty: [ CodeHandleMode.OVERWRITE, CodeHandleMode.PUBLISH ] }
  )
  calculatorFunctionASin.codeHandler.registerSubscriber(
    { plotObject: calculatorAngleMode, duty: [ CodeHandleMode.OVERWRITE, CodeHandleMode.PUBLISH ] }
  )
  calculatorFunctionCos.codeHandler.registerSubscriber(
    { plotObject: calculatorAngleMode, duty: [ CodeHandleMode.OVERWRITE, CodeHandleMode.PUBLISH ] }
  )
  calculatorFunctionACos.codeHandler.registerSubscriber(
    { plotObject: calculatorAngleMode, duty: [ CodeHandleMode.OVERWRITE, CodeHandleMode.PUBLISH ] }
  )

  calculatorAngleMode.codeHandler.registerSubscriber(
    { plotObject: calculatorOperatorSolve, duty: [ CodeHandleMode.APPEND_AS_FUNCTION, CodeHandleMode.PUBLISH ] }
  )
  
  calculatorClear.codeHandler.registerSubscriber(
    { plotObject: calculatorDisplay, duty: [ CodeHandleMode.DELETE ] },
    { plotObject: calculatorOperatorSolve, duty: [ CodeHandleMode.DELETE ] },
    { plotObject: calculatorAngleMode, duty: [ CodeHandleMode.DELETE ] }
  )

  calculatorOperatorSolve.codeHandler.registerSubscriber(
    { plotObject: calculatorOperatorSolve, duty: [ CodeHandleMode.EVALUATE ]},
    { plotObject: calculatorDisplay, duty: [ CodeHandleMode.OVERWRITE ]}
  )

  
}