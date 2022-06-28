let init = (parentHtmlElement) => {

  let myDomElementA = new DomWindow(parentHtmlElement)
  myDomElementA.init(100, 100, 320, 240)
  myDomElementA.initStretchers()
  myDomElementA.initHeaderBar()
  myDomElementA.containerElement.style.backgroundColor = '#FFFFFF'

  let myDomElementB = new DomWindow(parentHtmlElement)
  myDomElementB.init(500, 100, 320, 240)
  myDomElementB.initStretchers()
  myDomElementB.initHeaderBar()
  myDomElementB.containerElement.style.backgroundColor = '#FFFFFF'

  let myLabUtils = new LabUtils()
  let aTestImage = myLabUtils.createElementNS("img")
  aTestImage.src = "assets/square.png"
  // aTestImage.style.position = 'absolute'
  // aTestImage.style.top = "30px"

  let myDummyText = myLabUtils.createElementNS("p")
  myDummyText.innerHTML = `
    blalbalba</br>
    blalbalba</br>
    blalbalba</br>
    blalbalba</br>
    blalbalba</br>
    blalbalba</br>
    blalbalba</br>
    blalbalba</br>
    blalbalba</br>
    blalbalba</br>
    blalbalba</br>
    blalbalba</br>
    blalbalba</br>
    blalbalba</br>
    blalbalba</br>
    blalbalba</br>
    blalbalba</br>
    blalbalba</br>
  `

  myDomElementA.appendChild(aTestImage)
  myDomElementA.appendChild(myDummyText)


}