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
  calculatorProdNumberSeven.codeHandler.publication = "7"
  myFirstWindow.appendChild(calculatorProdNumberSeven)

  let calculatorProdNumberEight = new Rect()
  calculatorProdNumberEight.init(60, 60, 40, 40)
  calculatorProdNumberEight.setBackgroundColor()
  calculatorProdNumberEight.setBorder()
  calculatorProdNumberEight.setText('8')
  calculatorProdNumberEight.actAsReporterOnclick()
  calculatorProdNumberEight.codeHandler.publication = "8"
  myFirstWindow.appendChild(calculatorProdNumberEight)

  let calculatorProdNumberNine = new Rect()
  calculatorProdNumberNine.init(110, 60, 40, 40)
  calculatorProdNumberNine.setBackgroundColor()
  calculatorProdNumberNine.setBorder()
  calculatorProdNumberNine.setText('9')
  calculatorProdNumberNine.actAsReporterOnclick()
  calculatorProdNumberNine.codeHandler.publication = "9"
  myFirstWindow.appendChild(calculatorProdNumberNine)

  let calculatorProdNumberFour = new Rect()
  calculatorProdNumberFour.init(10, 110, 40, 40)
  calculatorProdNumberFour.setBackgroundColor()
  calculatorProdNumberFour.setBorder()
  calculatorProdNumberFour.setText('4')
  calculatorProdNumberFour.actAsReporterOnclick()
  calculatorProdNumberFour.codeHandler.publication = "4"
  myFirstWindow.appendChild(calculatorProdNumberFour)

  let calculatorProdNumberFive = new Rect()
  calculatorProdNumberFive.init(60, 110, 40, 40)
  calculatorProdNumberFive.setBackgroundColor()
  calculatorProdNumberFive.setBorder()
  calculatorProdNumberFive.setText('5')
  calculatorProdNumberFive.actAsReporterOnclick()
  calculatorProdNumberFive.codeHandler.publication = "5"
  myFirstWindow.appendChild(calculatorProdNumberFive)

  let calculatorProdNumberSix = new Rect()
  calculatorProdNumberSix.init(110, 110, 40, 40)
  calculatorProdNumberSix.setBackgroundColor()
  calculatorProdNumberSix.setBorder()
  calculatorProdNumberSix.setText('6')
  calculatorProdNumberSix.actAsReporterOnclick()
  calculatorProdNumberSix.codeHandler.publication = "6"
  myFirstWindow.appendChild(calculatorProdNumberSix)

  let calculatorProdNumberOne = new Rect()
  calculatorProdNumberOne.init(10, 160, 40, 40)
  calculatorProdNumberOne.setBackgroundColor()
  calculatorProdNumberOne.setBorder()
  calculatorProdNumberOne.setText('1')
  calculatorProdNumberOne.actAsReporterOnclick()
  calculatorProdNumberOne.codeHandler.publication = "1"
  myFirstWindow.appendChild(calculatorProdNumberOne)

  let calculatorProdNumberTwo = new Rect()
  calculatorProdNumberTwo.init(60, 160, 40, 40)
  calculatorProdNumberTwo.setBackgroundColor()
  calculatorProdNumberTwo.setBorder()
  calculatorProdNumberTwo.setText('2')
  calculatorProdNumberTwo.actAsReporterOnclick()
  calculatorProdNumberTwo.codeHandler.publication = "2"
  myFirstWindow.appendChild(calculatorProdNumberTwo)

  let calculatorProdNumberThree = new Rect()
  calculatorProdNumberThree.init(110, 160, 40, 40)
  calculatorProdNumberThree.setBackgroundColor()
  calculatorProdNumberThree.setBorder()
  calculatorProdNumberThree.setText('3')
  calculatorProdNumberThree.actAsReporterOnclick()
  calculatorProdNumberThree.codeHandler.publication = "3"
  myFirstWindow.appendChild(calculatorProdNumberThree)

  let calculatorProdNumberZero = new Rect()
  calculatorProdNumberZero.init(10, 210, 40, 40)
  calculatorProdNumberZero.setBackgroundColor()
  calculatorProdNumberZero.setBorder()
  calculatorProdNumberZero.setText('0')
  calculatorProdNumberZero.actAsReporterOnclick()
  calculatorProdNumberZero.codeHandler.publication = "0"
  myFirstWindow.appendChild(calculatorProdNumberZero)

  let calculatorProdNumberPi = new Rect()
  calculatorProdNumberPi.init(110, 210, 40, 40)
  calculatorProdNumberPi.setBackgroundColor()
  calculatorProdNumberPi.setBorder()
  calculatorProdNumberPi.setText('π')
  calculatorProdNumberPi.actAsReporterOnclick()
  calculatorProdNumberPi.codeHandler.evaluate = true
  calculatorProdNumberPi.codeHandler.publication = "Math.PI"
  myFirstWindow.appendChild(calculatorProdNumberPi)

  let calculatorProdComma = new Rect()
  calculatorProdComma.init(60, 210, 40, 40)
  calculatorProdComma.setBackgroundColor()
  calculatorProdComma.setBorder()
  calculatorProdComma.setText(',')
  calculatorProdComma.actAsReporterOnclick()
  calculatorProdComma.codeHandler.evaluate = true
  calculatorProdComma.codeHandler.publication = "."
  myFirstWindow.appendChild(calculatorProdComma)
  

  let calculatorDisplay = new Rect()
  calculatorDisplay.init(10, 10, 460, 40)
  calculatorDisplay.setBackgroundColor("#6f6a52")
  calculatorDisplay.setBorder()
  calculatorDisplay.actAsPublicist()
  calculatorDisplay.setTextAlign('right')
  // calculatorDisplay.codeHandler.forward = true
  calculatorDisplay.codeHandler.receivedPublications = ""
  calculatorDisplay.displayElement.innerText =
      calculatorDisplay.codeHandler.receivedPublications
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
  myFirstWindow.appendChild(calculatorDisplay)

  // operator
  let calculatorOperatorPlus = new Rect()
  calculatorOperatorPlus.init(160, 60, 40, 40)
  calculatorOperatorPlus.setBackgroundColor()
  calculatorOperatorPlus.setBorder()
  calculatorOperatorPlus.setText('+')
  calculatorOperatorPlus.actAsPublicistOnclick()
  calculatorOperatorPlus.codeHandler.publication = "+"
  myFirstWindow.appendChild(calculatorOperatorPlus)

  let calculatorOperatorMinus = new Rect()
  calculatorOperatorMinus.init(160, 110, 40, 40)
  calculatorOperatorMinus.setBackgroundColor()
  calculatorOperatorMinus.setBorder()
  calculatorOperatorMinus.setText('-')
  calculatorOperatorMinus.actAsPublicistOnclick()
  calculatorOperatorMinus.codeHandler.publication = "-"
  myFirstWindow.appendChild(calculatorOperatorMinus)

  let calculatorOperatorDivide = new Rect()
  calculatorOperatorDivide.init(160, 160, 40, 40)
  calculatorOperatorDivide.setBackgroundColor()
  calculatorOperatorDivide.setBorder()
  calculatorOperatorDivide.setText('/')
  calculatorOperatorDivide.actAsPublicistOnclick()
  calculatorOperatorDivide.codeHandler.publication = "/"
  myFirstWindow.appendChild(calculatorOperatorDivide)

  let calculatorOperatorMultiply = new Rect()
  calculatorOperatorMultiply.init(160, 210, 40, 40)
  calculatorOperatorMultiply.setBackgroundColor()
  calculatorOperatorMultiply.setBorder()
  calculatorOperatorMultiply.setText('·')
  calculatorOperatorMultiply.actAsPublicistOnclick()
  calculatorOperatorMultiply.codeHandler.publication = "*"
  myFirstWindow.appendChild(calculatorOperatorMultiply)

  let calculatorClear = new Rect()
  calculatorClear.init(380, 60, 90, 40)
  calculatorClear.setBackgroundColor()
  calculatorClear.setBorder()
  calculatorClear.setText('CE')
  calculatorClear.actAsPublicistOnclick()
  calculatorClear.codeHandler.publication = ""
  myFirstWindow.appendChild(calculatorClear)

  let calculatorOperatorSolve = new Rect()
  calculatorOperatorSolve.init(380, 210, 90, 40)
  calculatorOperatorSolve.setBackgroundColor()
  calculatorOperatorSolve.setBorder()
  calculatorOperatorSolve.setText('=')
  calculatorOperatorSolve.actAsPublicistOnclick()
  myFirstWindow.appendChild(calculatorOperatorSolve)
  calculatorOperatorSolve.codeHandler.callbackOnReadPublication = () => {

    console.log('received', calculatorOperatorSolve.codeHandler.receivedPublications, 'publication', calculatorOperatorSolve.codeHandler.publication)

  }

  calculatorProdNumberZero.codeHandler.registerSubscriber(
    { plotObject: calculatorDisplay, mode: CodeHandleMode.APPEND },
    { plotObject: calculatorOperatorSolve, mode: CodeHandleMode.APPEND }
  )
  calculatorProdNumberOne.codeHandler.registerSubscriber(
    { plotObject: calculatorDisplay, mode: CodeHandleMode.APPEND },
    { plotObject: calculatorOperatorSolve, mode: CodeHandleMode.APPEND }
  )
  calculatorProdNumberTwo.codeHandler.registerSubscriber(
    { plotObject: calculatorDisplay, mode: CodeHandleMode.APPEND },
    { plotObject: calculatorOperatorSolve, mode: CodeHandleMode.APPEND }
  )
  calculatorProdNumberThree.codeHandler.registerSubscriber(
    { plotObject: calculatorDisplay, mode: CodeHandleMode.APPEND },
    { plotObject: calculatorOperatorSolve, mode: CodeHandleMode.APPEND }
  )
  calculatorProdNumberFour.codeHandler.registerSubscriber(
    { plotObject: calculatorDisplay, mode: CodeHandleMode.APPEND },
    { plotObject: calculatorOperatorSolve, mode: CodeHandleMode.APPEND }
  )
  calculatorProdNumberFive.codeHandler.registerSubscriber(
    { plotObject: calculatorDisplay, mode: CodeHandleMode.APPEND },
    { plotObject: calculatorOperatorSolve, mode: CodeHandleMode.APPEND }
  )
  calculatorProdNumberSix.codeHandler.registerSubscriber(
    { plotObject: calculatorDisplay, mode: CodeHandleMode.APPEND },
    { plotObject: calculatorOperatorSolve, mode: CodeHandleMode.APPEND }
  )
  calculatorProdNumberSeven.codeHandler.registerSubscriber(
    { plotObject: calculatorDisplay, mode: CodeHandleMode.APPEND },
    { plotObject: calculatorOperatorSolve, mode: CodeHandleMode.APPEND }
  )
  calculatorProdNumberEight.codeHandler.registerSubscriber(
    { plotObject: calculatorDisplay, mode: CodeHandleMode.APPEND },
    { plotObject: calculatorOperatorSolve, mode: CodeHandleMode.APPEND }
  )
  calculatorProdNumberNine.codeHandler.registerSubscriber(
    { plotObject: calculatorDisplay, mode: CodeHandleMode.APPEND },
    { plotObject: calculatorOperatorSolve, mode: CodeHandleMode.APPEND }
  )
  calculatorProdNumberPi.codeHandler.registerSubscriber(
    { plotObject: calculatorDisplay, mode: CodeHandleMode.APPEND },
    { plotObject: calculatorOperatorSolve, mode: CodeHandleMode.APPEND }
  )

  calculatorProdComma.codeHandler.registerSubscriber(
    { plotObject: calculatorDisplay, mode: CodeHandleMode.APPEND },
    { plotObject: calculatorOperatorSolve, mode: CodeHandleMode.APPEND }
  )


  calculatorOperatorPlus.codeHandler.registerSubscriber(
    { plotObject: calculatorDisplay, mode: CodeHandleMode.DELETE },
    { plotObject: calculatorOperatorSolve, mode: CodeHandleMode.APPEND }
  )

  calculatorOperatorMinus.codeHandler.registerSubscriber(
    { plotObject: calculatorDisplay, mode: CodeHandleMode.DELETE },
    { plotObject: calculatorOperatorSolve, mode: CodeHandleMode.APPEND }
  )

  calculatorOperatorMultiply.codeHandler.registerSubscriber(
    { plotObject: calculatorDisplay, mode: CodeHandleMode.DELETE },
    { plotObject: calculatorOperatorSolve, mode: CodeHandleMode.APPEND }
  )

  calculatorOperatorDivide.codeHandler.registerSubscriber(
    { plotObject: calculatorDisplay, mode: CodeHandleMode.DELETE },
    { plotObject: calculatorOperatorSolve, mode: CodeHandleMode.APPEND }
  )

  calculatorOperatorSolve.codeHandler.registerSubscriber(
    { plotObject: calculatorDisplay, mode: CodeHandleMode.EVALUATE },
    { plotObject: calculatorOperatorSolve, mode: CodeHandleMode.EVALUATE }
  )

  calculatorClear.codeHandler.registerSubscriber(
    { plotObject: calculatorDisplay, mode: CodeHandleMode.DELETE },
    { plotObject: calculatorOperatorSolve, mode: CodeHandleMode.DELETE }
  )
  
  // calculatorDisplay.codeHandler.registerSubscriber({ plotObject: calculatorOperatorPlus, mode: CodeHandleMode.APPEND })
  // calculatorOperatorPlus.codeHandler.registerSubscriber({ plotObject: calculatorDisplay, mode: CodeHandleMode.DELETE })
  // calculatorOperatorPlus.codeHandler.registerSubscriber({ plotObject: calculatorOperatorSolve, mode: CodeHandleMode.APPEND })


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
  // myFirstWindow.appendChild(calculatorDisplay)


  // // operators

  // let calculatorOperatorComma = new Rect()
  // calculatorOperatorComma.init(60, 210, 40, 40)
  // calculatorOperatorComma.setBackgroundColor()
  // calculatorOperatorComma.setBorder()
  // calculatorOperatorComma.setText(',')
  // calculatorOperatorComma.actAsReporterOnclick()
  // calculatorOperatorComma.codeHandler.publication = "."
  // myFirstWindow.appendChild(calculatorOperatorComma)

  // let calculatorOperatorPlus = new Rect()
  // calculatorOperatorPlus.init(430, 110, 40, 40)
  // calculatorOperatorPlus.setBackgroundColor()
  // calculatorOperatorPlus.setBorder()
  // calculatorOperatorPlus.setText('+')
  // calculatorOperatorPlus.actAsPublicistOnclick()
  // calculatorOperatorPlus.codeHandler.publication = "+"
  // calculatorOperatorPlus.codeHandler.overwrite = false
  // myFirstWindow.appendChild(calculatorOperatorPlus)

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
  // myFirstWindow.appendChild(calculatorOperatorMinus)

  // let calculatorOperatorMultiply = new Rect()
  // calculatorOperatorMultiply.init(380, 160, 40, 40)
  // calculatorOperatorMultiply.setBackgroundColor()
  // calculatorOperatorMultiply.setBorder()
  // calculatorOperatorMultiply.setText('*')
  // calculatorOperatorMultiply.actAsReporterOnclick()
  // calculatorOperatorMultiply.codeHandler.publication = "*"
  // myFirstWindow.appendChild(calculatorOperatorMultiply)

  // let calculatorOperatorDivide = new Rect()
  // calculatorOperatorDivide.init(380, 110, 40, 40)
  // calculatorOperatorDivide.setBackgroundColor()
  // calculatorOperatorDivide.setBorder()
  // calculatorOperatorDivide.setText(':')
  // calculatorOperatorDivide.actAsReporterOnclick()
  // calculatorOperatorDivide.codeHandler.publication = "/"
  // myFirstWindow.appendChild(calculatorOperatorDivide)

  // let calculatorOperatorSqrt = new Rect()
  // calculatorOperatorSqrt.init(330, 110, 40, 40)
  // calculatorOperatorSqrt.setBackgroundColor()
  // calculatorOperatorSqrt.setBorder()
  // calculatorOperatorSqrt.setText('√')
  // calculatorOperatorSqrt.actAsReporterOnclick()
  // calculatorOperatorSqrt.CodeHandleMode.APPENDAsFunction = true
  // calculatorOperatorSqrt.codeHandler.publication = "Math.sqrt"
  // myFirstWindow.appendChild(calculatorOperatorSqrt)
  
  // let calculatorOperatorSin = new Rect()
  // calculatorOperatorSin.init(160, 60, 90, 40)
  // calculatorOperatorSin.setBackgroundColor()
  // calculatorOperatorSin.setBorder()
  // calculatorOperatorSin.setText('sin')
  // calculatorOperatorSin.actAsReporterOnclick()
  // calculatorOperatorSin.CodeHandleMode.APPENDAsFunction = true
  // calculatorOperatorSin.codeHandler.publication = "Math.sin"
  // myFirstWindow.appendChild(calculatorOperatorSin)
  
  // let calculatorOperatorCos = new Rect()
  // calculatorOperatorCos.init(160, 110, 90, 40)
  // calculatorOperatorCos.setBackgroundColor()
  // calculatorOperatorCos.setBorder()
  // calculatorOperatorCos.setText('cos')
  // calculatorOperatorCos.actAsReporterOnclick()
  // calculatorOperatorCos.CodeHandleMode.APPENDAsFunction = true
  // calculatorOperatorCos.codeHandler.publication = "Math.cos"
  // myFirstWindow.appendChild(calculatorOperatorCos)
  
  // let calculatorOperatorTan = new Rect()
  // calculatorOperatorTan.init(160, 160, 90, 40)
  // calculatorOperatorTan.setBackgroundColor()
  // calculatorOperatorTan.setBorder()
  // calculatorOperatorTan.setText('tan')
  // calculatorOperatorTan.actAsReporterOnclick()
  // calculatorOperatorTan.CodeHandleMode.APPENDAsFunction = true
  // calculatorOperatorTan.codeHandler.publication = "Math.tan"
  // myFirstWindow.appendChild(calculatorOperatorTan)

  // let calculatorModeDegRad = new Rect()
  // calculatorModeDegRad.init(160, 210, 90, 40)
  // calculatorModeDegRad.setBackgroundColor()
  // calculatorModeDegRad.setBorder()
  // calculatorModeDegRad.setText('deg')
  // calculatorModeDegRad.actAsStaticPublicist()
  // calculatorModeDegRad.codeHandler.publication = ""
  // myFirstWindow.appendChild(calculatorModeDegRad)
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
  // myFirstWindow.appendChild(calculatorSolve)

  // let calculatorDelete = new Rect()
  // calculatorDelete.init(380, 60, 90, 40)
  // calculatorDelete.setBackgroundColor()
  // calculatorDelete.setBorder()
  // calculatorDelete.setText('CE')
  // calculatorDelete.actAsReporterOnclick()
  // calculatorDelete.codeHandler.overwriteOnPublicate = true
  // calculatorDelete.codeHandler.publication = ""
  // myFirstWindow.appendChild(calculatorDelete)

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
  // myFirstWindow.appendChild(calculatorDisplay)


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