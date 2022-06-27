let init = (parentHtmlElement) => {

  let myDomElementA = new DomWindow(parentHtmlElement)
  myDomElementA.init(100, 100, 320, 240)
  myDomElementA.initStretchers()
  myDomElementA.initHeaderBar()

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