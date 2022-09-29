let init = (parentHtmlElement) => {

  let domObjectTracker = new DomObjectTracker()
  let domBuilder = new DomBuilder(domObjectTracker)
  let myCalculatorWindow = domBuilder
    .produceWindowOn(parentHtmlElement)
    .and()
    .assembleItWith({
      pos: { x: 50, y: 200 },
      dim: { w: 520, h: 400 },
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
  calculatorProdNumberSeven.codeHandler.publication = "7"
  myCalculatorWindow.appendChild(calculatorProdNumberSeven)

  let calculatorProdNumberEight = new Rect()
  calculatorProdNumberEight.init(60, 60, 40, 40)
  calculatorProdNumberEight.setBackgroundColor()
  calculatorProdNumberEight.setBorder()
  calculatorProdNumberEight.setText('8')
  calculatorProdNumberEight.actAsReporterOnclick()
  calculatorProdNumberEight.codeHandler.publication = "8"
  myCalculatorWindow.appendChild(calculatorProdNumberEight)

  let calculatorProdNumberNine = new Rect()
  calculatorProdNumberNine.init(110, 60, 40, 40)
  calculatorProdNumberNine.setBackgroundColor()
  calculatorProdNumberNine.setBorder()
  calculatorProdNumberNine.setText('9')
  calculatorProdNumberNine.actAsReporterOnclick()
  calculatorProdNumberNine.codeHandler.publication = "9"
  myCalculatorWindow.appendChild(calculatorProdNumberNine)

  let calculatorProdNumberFour = new Rect()
  calculatorProdNumberFour.init(10, 110, 40, 40)
  calculatorProdNumberFour.setBackgroundColor()
  calculatorProdNumberFour.setBorder()
  calculatorProdNumberFour.setText('4')
  calculatorProdNumberFour.actAsReporterOnclick()
  calculatorProdNumberFour.codeHandler.publication = "4"
  myCalculatorWindow.appendChild(calculatorProdNumberFour)

  let calculatorProdNumberFive = new Rect()
  calculatorProdNumberFive.init(60, 110, 40, 40)
  calculatorProdNumberFive.setBackgroundColor()
  calculatorProdNumberFive.setBorder()
  calculatorProdNumberFive.setText('5')
  calculatorProdNumberFive.actAsReporterOnclick()
  calculatorProdNumberFive.codeHandler.publication = "5"
  myCalculatorWindow.appendChild(calculatorProdNumberFive)

  let calculatorProdNumberSix = new Rect()
  calculatorProdNumberSix.init(110, 110, 40, 40)
  calculatorProdNumberSix.setBackgroundColor()
  calculatorProdNumberSix.setBorder()
  calculatorProdNumberSix.setText('6')
  calculatorProdNumberSix.actAsReporterOnclick()
  calculatorProdNumberSix.codeHandler.publication = "6"
  myCalculatorWindow.appendChild(calculatorProdNumberSix)

  let calculatorProdNumberOne = new Rect()
  calculatorProdNumberOne.init(10, 160, 40, 40)
  calculatorProdNumberOne.setBackgroundColor()
  calculatorProdNumberOne.setBorder()
  calculatorProdNumberOne.setText('1')
  calculatorProdNumberOne.actAsReporterOnclick()
  calculatorProdNumberOne.codeHandler.publication = "1"
  myCalculatorWindow.appendChild(calculatorProdNumberOne)

  let calculatorProdNumberTwo = new Rect()
  calculatorProdNumberTwo.init(60, 160, 40, 40)
  calculatorProdNumberTwo.setBackgroundColor()
  calculatorProdNumberTwo.setBorder()
  calculatorProdNumberTwo.setText('2')
  calculatorProdNumberTwo.actAsReporterOnclick()
  calculatorProdNumberTwo.codeHandler.publication = "2"
  myCalculatorWindow.appendChild(calculatorProdNumberTwo)

  let calculatorProdNumberThree = new Rect()
  calculatorProdNumberThree.init(110, 160, 40, 40)
  calculatorProdNumberThree.setBackgroundColor()
  calculatorProdNumberThree.setBorder()
  calculatorProdNumberThree.setText('3')
  calculatorProdNumberThree.actAsReporterOnclick()
  calculatorProdNumberThree.codeHandler.publication = "3"
  myCalculatorWindow.appendChild(calculatorProdNumberThree)

  let calculatorProdNumberZero = new Rect()
  calculatorProdNumberZero.init(10, 210, 40, 40)
  calculatorProdNumberZero.setBackgroundColor()
  calculatorProdNumberZero.setBorder()
  calculatorProdNumberZero.setText('0')
  calculatorProdNumberZero.actAsReporterOnclick()
  calculatorProdNumberZero.codeHandler.publication = "0"
  myCalculatorWindow.appendChild(calculatorProdNumberZero)

  let calculatorProdNumberPi = new Rect()
  calculatorProdNumberPi.init(110, 210, 40, 40)
  calculatorProdNumberPi.setBackgroundColor()
  calculatorProdNumberPi.setBorder()
  calculatorProdNumberPi.setText('π')
  calculatorProdNumberPi.actAsReporterOnclick()
  calculatorProdNumberPi.codeHandler.evaluate = true
  calculatorProdNumberPi.codeHandler.publication = "Math.PI"
  myCalculatorWindow.appendChild(calculatorProdNumberPi)

  let calculatorProdComma = new Rect()
  calculatorProdComma.init(60, 210, 40, 40)
  calculatorProdComma.setBackgroundColor()
  calculatorProdComma.setBorder()
  calculatorProdComma.setText(',')
  calculatorProdComma.actAsReporterOnclick()
  calculatorProdComma.codeHandler.evaluate = true
  calculatorProdComma.codeHandler.publication = "."
  myCalculatorWindow.appendChild(calculatorProdComma)
  

  let calculatorDisplay = new Rect()
  calculatorDisplay.init(10, 10, 500, 40)
  calculatorDisplay.setBackgroundColor("#6f6a52")
  calculatorDisplay.setBorder()
  calculatorDisplay.actAsPublicist()
  calculatorDisplay.setTextAlign('right')
  calculatorDisplay.codeHandler.receivedPublications = ""
  calculatorDisplay.codeHandler.callbackOnReadPublication = () => {

    // let received = calculatorDisplay.codeHandler.receivedPublications
    // let lastReceived = received.charAt(received.length - 1)

    // if(lastReceived == '+' ||
    //   lastReceived == '-' ||
    //   lastReceived == ':' ||
    //   lastReceived == '*'
    // ) {

    //   calculatorDisplay.codeHandler.receivedPublications = ""

    // }

    calculatorDisplay.displayElement.innerText =
      calculatorDisplay.codeHandler.receivedPublications

  }
  myCalculatorWindow.appendChild(calculatorDisplay)

  // operator
  let calculatorOperatorPlus = new Rect()
  calculatorOperatorPlus.init(160, 60, 40, 40)
  calculatorOperatorPlus.setBackgroundColor()
  calculatorOperatorPlus.setBorder()
  calculatorOperatorPlus.setText('+')
  calculatorOperatorPlus.actAsPublicistOnclick()
  calculatorOperatorPlus.codeHandler.publication = "+"
  myCalculatorWindow.appendChild(calculatorOperatorPlus)

  let calculatorOperatorMinus = new Rect()
  calculatorOperatorMinus.init(160, 110, 40, 40)
  calculatorOperatorMinus.setBackgroundColor()
  calculatorOperatorMinus.setBorder()
  calculatorOperatorMinus.setText('-')
  calculatorOperatorMinus.actAsPublicistOnclick()
  calculatorOperatorMinus.codeHandler.publication = "-"
  myCalculatorWindow.appendChild(calculatorOperatorMinus)

  let calculatorOperatorDivide = new Rect()
  calculatorOperatorDivide.init(160, 160, 40, 40)
  calculatorOperatorDivide.setBackgroundColor()
  calculatorOperatorDivide.setBorder()
  calculatorOperatorDivide.setText('/')
  calculatorOperatorDivide.actAsPublicistOnclick()
  calculatorOperatorDivide.codeHandler.publication = "/"
  myCalculatorWindow.appendChild(calculatorOperatorDivide)

  let calculatorOperatorMultiply = new Rect()
  calculatorOperatorMultiply.init(160, 210, 40, 40)
  calculatorOperatorMultiply.setBackgroundColor()
  calculatorOperatorMultiply.setBorder()
  calculatorOperatorMultiply.setText('·')
  calculatorOperatorMultiply.actAsPublicistOnclick()
  calculatorOperatorMultiply.codeHandler.publication = "*"
  myCalculatorWindow.appendChild(calculatorOperatorMultiply)

  let calculatorAngleMode = new Rect()
  calculatorAngleMode.init(260, 210, 90, 40)
  calculatorAngleMode.setBackgroundColor("#888888")
  calculatorAngleMode.setBorder()
  calculatorAngleMode.setText('deg') // initial value
  calculatorAngleMode.actAsTogglePublicistOnclick()
  calculatorAngleMode.codeHandler.publication.push( "Math.PI / 180 * ")
  calculatorAngleMode.codeHandler.publication.push("1 * ")
  calculatorAngleMode.codeHandler.publicationText.push("deg")
  calculatorAngleMode.codeHandler.publicationText.push("rad")
  myCalculatorWindow.appendChild(calculatorAngleMode)

  let calculatorFunctionTan = new Rect()
  calculatorFunctionTan.init(210, 60, 90, 40)
  calculatorFunctionTan.setBackgroundColor()
  calculatorFunctionTan.setBorder()
  calculatorFunctionTan.setText('tan')
  calculatorFunctionTan.actAsPublicistOnclick()
  calculatorFunctionTan.codeHandler.publication = "Math.tan("
  myCalculatorWindow.appendChild(calculatorFunctionTan)

  let calculatorFunctionATan = new Rect()
  calculatorFunctionATan.init(310, 60, 90, 40)
  calculatorFunctionATan.setBackgroundColor()
  calculatorFunctionATan.setBorder()
  calculatorFunctionATan.setText('atan')
  calculatorFunctionATan.actAsPublicistOnclick()
  calculatorFunctionATan.codeHandler.publication = "Math.atan("
  myCalculatorWindow.appendChild(calculatorFunctionATan)


  let calculatorFunctionCos = new Rect()
  calculatorFunctionCos.init(210, 110, 90, 40)
  calculatorFunctionCos.setBackgroundColor()
  calculatorFunctionCos.setBorder()
  calculatorFunctionCos.setText('cos')
  calculatorFunctionCos.actAsPublicistOnclick()
  calculatorFunctionCos.codeHandler.publication = "Math.cos("
  myCalculatorWindow.appendChild(calculatorFunctionCos)

  let calculatorFunctionACos = new Rect()
  calculatorFunctionACos.init(310, 110, 90, 40)
  calculatorFunctionACos.setBackgroundColor()
  calculatorFunctionACos.setBorder()
  calculatorFunctionACos.setText('acos')
  calculatorFunctionACos.actAsPublicistOnclick()
  calculatorFunctionACos.codeHandler.publication = "Math.acos("
  myCalculatorWindow.appendChild(calculatorFunctionACos)


  let calculatorFunctionSin = new Rect()
  calculatorFunctionSin.init(210, 160, 90, 40)
  calculatorFunctionSin.setBackgroundColor()
  calculatorFunctionSin.setBorder()
  calculatorFunctionSin.setText('sin')
  calculatorFunctionSin.actAsPublicistOnclick()
  calculatorFunctionSin.codeHandler.publication = "Math.sin("
  myCalculatorWindow.appendChild(calculatorFunctionSin)

  let calculatorFunctionASin = new Rect()
  calculatorFunctionASin.init(310, 160, 90, 40)
  calculatorFunctionASin.setBackgroundColor()
  calculatorFunctionASin.setBorder()
  calculatorFunctionASin.setText('asin')
  calculatorFunctionASin.actAsPublicistOnclick()
  calculatorFunctionASin.codeHandler.publication = "Math.asin("
  myCalculatorWindow.appendChild(calculatorFunctionASin)

  let calculatorFunctionSqrt = new Rect()
  calculatorFunctionSqrt.init(210, 210, 40, 40)
  calculatorFunctionSqrt.setBackgroundColor()
  calculatorFunctionSqrt.setBorder()
  calculatorFunctionSqrt.setText('√')
  calculatorFunctionSqrt.actAsPublicistOnclick()
  calculatorFunctionSqrt.codeHandler.publication = "Math.sqrt("
  myCalculatorWindow.appendChild(calculatorFunctionSqrt)

  let calculatorClear = new Rect()
  calculatorClear.init(420, 60, 90, 40)
  calculatorClear.setBackgroundColor()
  calculatorClear.setBorder()
  calculatorClear.setText('CE')
  calculatorClear.actAsPublicistOnclick()
  calculatorClear.codeHandler.publication = ""
  myCalculatorWindow.appendChild(calculatorClear)

  let calculatorOperatorSolve = new Rect()
  calculatorOperatorSolve.init(420, 210, 90, 40)
  calculatorOperatorSolve.setBackgroundColor()
  calculatorOperatorSolve.setBorder()
  calculatorOperatorSolve.setText('=')
  calculatorOperatorSolve.actAsPublicistOnclick()
  myCalculatorWindow.appendChild(calculatorOperatorSolve)
  calculatorOperatorSolve.codeHandler.callbackOnReadPublication = () => {

    console.log('-->next is the solver')

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
    { plotObject: calculatorDisplay, duty: [ CodeHandleMode.APPEND_AS_FUNCTION, CodeHandleMode.EVALUATE ] },
  )

  calculatorFunctionTan.codeHandler.registerSubscriber(
    { plotObject: calculatorAngleMode, duty: [ CodeHandleMode.APPEND, CodeHandleMode.PUBLISH ] }
  )
  calculatorFunctionATan.codeHandler.registerSubscriber(
    { plotObject: calculatorAngleMode, duty: [ CodeHandleMode.APPEND, CodeHandleMode.PUBLISH ] }
  )
  calculatorFunctionSin.codeHandler.registerSubscriber(
    { plotObject: calculatorAngleMode, duty: [ CodeHandleMode.APPEND, CodeHandleMode.PUBLISH ] }
  )
  calculatorFunctionASin.codeHandler.registerSubscriber(
    { plotObject: calculatorAngleMode, duty: [ CodeHandleMode.APPEND, CodeHandleMode.PUBLISH ] }
  )
  calculatorFunctionCos.codeHandler.registerSubscriber(
    { plotObject: calculatorAngleMode, duty: [ CodeHandleMode.APPEND, CodeHandleMode.PUBLISH ] }
  )
  calculatorFunctionACos.codeHandler.registerSubscriber(
    { plotObject: calculatorAngleMode, duty: [ CodeHandleMode.APPEND, CodeHandleMode.PUBLISH ] }
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

  
  // calculatorDisplay.codeHandler.registerSubscriber({ plotObject: calculatorOperatorPlus, duty: [ CodeHandleMode.APPEND ] })
  // calculatorOperatorPlus.codeHandler.registerSubscriber({ plotObject: calculatorDisplay, duty: CodeHandleMode.DELETE })
  // calculatorOperatorPlus.codeHandler.registerSubscriber({ plotObject: calculatorOperatorSolve, duty: [ CodeHandleMode.APPEND ] })


  // calculatorNumbersRegister.codeHandler.registerSubscriber({ plotObject: calculatorOperatorPlus, overwrite: false })
  // calculatorOperatorPlus.codeHandler.registerSubscriber({ plotObject: calculatorNumbersRegister, overwrite: true })
  // calculatorNumbersRegister.codeHandler.registerSubscriber({ plotObject: calculatorDisplay, overwrite: true })
  
  
  // calculatorSolver.codeHandler.registerSubscriber({ plotObject: calculatorNumbersRegister, overwrite: false })
  
  // calculatorOperatorPlus.codeHandler.registerSubscriber({ plotObject: calculatorDisplay, overwrite: false })

  // let calculatorDisplay = new Rect()
  // calculatorDisplay.init(10, 10, 460, 40)
  // calculatorDisplay.setBackgroundColor("#6f6a52")
  // calculatorDisplay.setBorder()
  // calculatorDisplay.actAsReader()
  // calculatorDisplay.setTextAlign('right')
  // calculatorDisplay.codeHandler.pleaseForwardPublications = true
  // calculatorDisplay.codeHandler.overwrite = true
  // calculatorDisplay.codeHandler.callbackOnReadPublication = () => {

  //   // let received = calculatorDisplay.codeHandler.receivedPublications
  //   // let lastReceived = received.charAt(received.length - 1)

  //   // if(lastReceived == '+' ||
  //   //   lastReceived == '-' ||
  //   //   lastReceived == ':' ||
  //   //   lastReceived == '*'
  //   // ) {

  //   //   calculatorDisplay.codeHandler.receivedPublications = ""

  //   // }

  //   calculatorDisplay.displayElement.innerText =
  //     calculatorDisplay.codeHandler.receivedPublications

  // }
  // myCalculatorWindow.appendChild(calculatorDisplay)


  // // operators

  // let calculatorOperatorComma = new Rect()
  // calculatorOperatorComma.init(60, 210, 40, 40)
  // calculatorOperatorComma.setBackgroundColor()
  // calculatorOperatorComma.setBorder()
  // calculatorOperatorComma.setText(',')
  // calculatorOperatorComma.actAsReporterOnclick()
  // calculatorOperatorComma.codeHandler.publication = "."
  // myCalculatorWindow.appendChild(calculatorOperatorComma)

  // let calculatorOperatorPlus = new Rect()
  // calculatorOperatorPlus.init(430, 110, 40, 40)
  // calculatorOperatorPlus.setBackgroundColor()
  // calculatorOperatorPlus.setBorder()
  // calculatorOperatorPlus.setText('+')
  // calculatorOperatorPlus.actAsPublicistOnclick()
  // calculatorOperatorPlus.codeHandler.publication = "+"
  // calculatorOperatorPlus.codeHandler.overwrite = false
  // myCalculatorWindow.appendChild(calculatorOperatorPlus)

  // calculatorOperatorPlus.codeHandler.callbackOnReadPublication = () => {

  //   // console.log(calculatorOperatorPlus.codeHandler.receivedPublications)

  // }

  // calculatorOperatorPlus.codeHandler.callbackOnParticipate = () => {

  //   // console.log(calculatorOperatorPlus.codeHandler.receivedPublications)

  // }


  // let calculatorOperatorMinus = new Rect()
  // calculatorOperatorMinus.init(430, 160, 40, 40)
  // calculatorOperatorMinus.setBackgroundColor()
  // calculatorOperatorMinus.setBorder()
  // calculatorOperatorMinus.setText('-')
  // calculatorOperatorMinus.actAsReporterOnclick()
  // calculatorOperatorMinus.codeHandler.publication = "-"
  // myCalculatorWindow.appendChild(calculatorOperatorMinus)

  // let calculatorOperatorMultiply = new Rect()
  // calculatorOperatorMultiply.init(380, 160, 40, 40)
  // calculatorOperatorMultiply.setBackgroundColor()
  // calculatorOperatorMultiply.setBorder()
  // calculatorOperatorMultiply.setText('*')
  // calculatorOperatorMultiply.actAsReporterOnclick()
  // calculatorOperatorMultiply.codeHandler.publication = "*"
  // myCalculatorWindow.appendChild(calculatorOperatorMultiply)

  // let calculatorOperatorDivide = new Rect()
  // calculatorOperatorDivide.init(380, 110, 40, 40)
  // calculatorOperatorDivide.setBackgroundColor()
  // calculatorOperatorDivide.setBorder()
  // calculatorOperatorDivide.setText(':')
  // calculatorOperatorDivide.actAsReporterOnclick()
  // calculatorOperatorDivide.codeHandler.publication = "/"
  // myCalculatorWindow.appendChild(calculatorOperatorDivide)

  // let calculatorOperatorSqrt = new Rect()
  // calculatorOperatorSqrt.init(330, 110, 40, 40)
  // calculatorOperatorSqrt.setBackgroundColor()
  // calculatorOperatorSqrt.setBorder()
  // calculatorOperatorSqrt.setText('√')
  // calculatorOperatorSqrt.actAsReporterOnclick()
  // calculatorOperatorSqrt.[ CodeHandleMode.APPEND ]AsFunction = true
  // calculatorOperatorSqrt.codeHandler.publication = "Math.sqrt"
  // myCalculatorWindow.appendChild(calculatorOperatorSqrt)
  
  // let calculatorOperatorSin = new Rect()
  // calculatorOperatorSin.init(160, 60, 90, 40)
  // calculatorOperatorSin.setBackgroundColor()
  // calculatorOperatorSin.setBorder()
  // calculatorOperatorSin.setText('sin')
  // calculatorOperatorSin.actAsReporterOnclick()
  // calculatorOperatorSin.[ CodeHandleMode.APPEND ]AsFunction = true
  // calculatorOperatorSin.codeHandler.publication = "Math.sin"
  // myCalculatorWindow.appendChild(calculatorOperatorSin)
  
  // let calculatorOperatorCos = new Rect()
  // calculatorOperatorCos.init(160, 110, 90, 40)
  // calculatorOperatorCos.setBackgroundColor()
  // calculatorOperatorCos.setBorder()
  // calculatorOperatorCos.setText('cos')
  // calculatorOperatorCos.actAsReporterOnclick()
  // calculatorOperatorCos.[ CodeHandleMode.APPEND ]AsFunction = true
  // calculatorOperatorCos.codeHandler.publication = "Math.cos"
  // myCalculatorWindow.appendChild(calculatorOperatorCos)
  
  // let calculatorOperatorTan = new Rect()
  // calculatorOperatorTan.init(160, 160, 90, 40)
  // calculatorOperatorTan.setBackgroundColor()
  // calculatorOperatorTan.setBorder()
  // calculatorOperatorTan.setText('tan')
  // calculatorOperatorTan.actAsReporterOnclick()
  // calculatorOperatorTan.[ CodeHandleMode.APPEND ]AsFunction = true
  // calculatorOperatorTan.codeHandler.publication = "Math.tan"
  // myCalculatorWindow.appendChild(calculatorOperatorTan)

  // let calculatorModeDegRad = new Rect()
  // calculatorModeDegRad.init(160, 210, 90, 40)
  // calculatorModeDegRad.setBackgroundColor()
  // calculatorModeDegRad.setBorder()
  // calculatorModeDegRad.setText('deg')
  // calculatorModeDegRad.actAsStaticPublicist()
  // calculatorModeDegRad.codeHandler.publication = ""
  // myCalculatorWindow.appendChild(calculatorModeDegRad)
  // // calculatorModeDegRad.codeHandler.callbackOnParticipate = () => {
  // //   if(calculatorModeDegRad.codeHandler.publication == "") {

  // //     calculatorModeDegRad.setText('rad')
  // //     calculatorModeDegRad.codeHandler.publication = ""
  // //     console.log(calculatorModeDegRad.codeHandler.publication)

  // //   } else {

  // //     calculatorModeDegRad.setText('deg')
  // //     calculatorModeDegRad.codeHandler.publication = ""

  // //   }
    
  // // }

  // // control
  // let calculatorSolve = new Rect()
  // calculatorSolve.init(430, 210, 40, 40)
  // calculatorSolve.setBackgroundColor()
  // calculatorSolve.setBorder()
  // calculatorSolve.setText('=')
  // calculatorSolve.actAsPublicistOnclick()
  // calculatorSolve.codeHandler.evaluate = true
  // calculatorSolve.codeHandler.overwriteOnPublicate = true
  // calculatorSolve.codeHandler.publication = "="
  // myCalculatorWindow.appendChild(calculatorSolve)

  // let calculatorDelete = new Rect()
  // calculatorDelete.init(380, 60, 90, 40)
  // calculatorDelete.setBackgroundColor()
  // calculatorDelete.setBorder()
  // calculatorDelete.setText('CE')
  // calculatorDelete.actAsReporterOnclick()
  // calculatorDelete.codeHandler.overwriteOnPublicate = true
  // calculatorDelete.codeHandler.publication = ""
  // myCalculatorWindow.appendChild(calculatorDelete)

  // let calculatorDisplay = new Rect()
  // calculatorDisplay.init(10, 10, 460, 40)
  // calculatorDisplay.setBackgroundColor("#6f6a52")
  // calculatorDisplay.setBorder()
  // calculatorDisplay.actAsReader()
  // calculatorDisplay.setTextAlign('right')
  // calculatorDisplay.codeHandler.pleaseForwardPublications = true
  // calculatorDisplay.codeHandler.callbackOnReadPublication = () => {

  //   // let received = calculatorDisplay.codeHandler.receivedPublications
  //   // let lastReceived = received.charAt(received.length - 1)

  //   // if(lastReceived == '+' ||
  //   //   lastReceived == '-' ||
  //   //   lastReceived == ':' ||
  //   //   lastReceived == '*'
  //   // ) {

  //   //   calculatorDisplay.codeHandler.receivedPublications = ""

  //   // }

  //   calculatorDisplay.displayElement.innerText =
  //     calculatorDisplay.codeHandler.receivedPublications

  // }
  // myCalculatorWindow.appendChild(calculatorDisplay)


  // calculatorProdNumberZero.codeHandler.registerSubscriber(calculatorNumbersRegister)
  // calculatorProdNumberOne.codeHandler.registerSubscriber(calculatorNumbersRegister)
  // calculatorProdNumberTwo.codeHandler.registerSubscriber(calculatorNumbersRegister)
  // calculatorProdNumberThree.codeHandler.registerSubscriber(calculatorNumbersRegister)
  // calculatorProdNumberFour.codeHandler.registerSubscriber(calculatorNumbersRegister)
  // calculatorProdNumberFive.codeHandler.registerSubscriber(calculatorNumbersRegister)
  // calculatorProdNumberSix.codeHandler.registerSubscriber(calculatorNumbersRegister)
  // calculatorProdNumberSeven.codeHandler.registerSubscriber(calculatorNumbersRegister)
  // calculatorProdNumberEight.codeHandler.registerSubscriber(calculatorNumbersRegister)
  // calculatorProdNumberNine.codeHandler.registerSubscriber(calculatorNumbersRegister)
  // calculatorProdNumberPi.codeHandler.registerSubscriber(calculatorNumbersRegister)

  // calculatorNumbersRegister.codeHandler.registerSubscriber(calculatorDisplay, calculatorOperatorPlus)
  
  // calculatorDelete.codeHandler.registerSubscriber(calculatorSolve, calculatorDisplay)
  // calculatorOperatorComma.codeHandler.registerSubscriber(calculatorSolve, calculatorDisplay)

  // calculatorOperatorSqrt.codeHandler.registerSubscriber(calculatorSolve, calculatorDisplay)

  // calculatorOperatorSin.codeHandler.registerSubscriber(calculatorSolve, calculatorDisplay)
  // calculatorOperatorCos.codeHandler.registerSubscriber(calculatorSolve, calculatorDisplay)
  // calculatorOperatorTan.codeHandler.registerSubscriber(calculatorSolve, calculatorDisplay)


  // calculatorOperatorSin.codeHandler.registerSubscriber(calculatorModeDegRad)
  // calculatorOperatorCos.codeHandler.registerSubscriber(calculatorModeDegRad)
  // calculatorOperatorTan.codeHandler.registerSubscriber(calculatorModeDegRad)
  // calculatorModeDegRad.codeHandler.registerSubscriber(calculatorSolve, calculatorDisplay)

  // calculatorOperatorPlus.codeHandler.registerSubscriber(calculatorSolve, calculatorDisplay)
  // calculatorOperatorMinus.codeHandler.registerSubscriber(calculatorSolve, calculatorDisplay)
  // calculatorOperatorMultiply.codeHandler.registerSubscriber(calculatorSolve, calculatorDisplay)
  // calculatorOperatorDivide.codeHandler.registerSubscriber(calculatorSolve, calculatorDisplay)

  // calculatorSolve.codeHandler.registerSubscriber(calculatorDisplay)

  // calculatorOperatorPlus.codeHandler.registerSubscriber(calculatorSolve)

  // calculatorSolve.codeHandler.registerSubscriber(calculatorDisplay)
  // numberContainer.codeHandler.registerSubscriber(calculatorDisplay)
  // numberContainer.codeHandler.registerSubscriber(calculatorSolve)

  // calculatorOperatorPlus.codeHandler.registerSubscriber(numberContainer)

}