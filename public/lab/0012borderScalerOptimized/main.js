let init = (parentHtmlElement) => {

  let myDomElementA = new DomWindow(parentHtmlElement)
  myDomElementA.init(100, 100, 320, 240)
  let myDomElementB = new DomWindow(parentHtmlElement)
  myDomElementB.init(200, 130, 320, 240)
  let myDomElementC = new DomWindow(parentHtmlElement)
  myDomElementC.init(400, 600, 320, 240)
  let myDomElementD = new DomWindow(parentHtmlElement)
  myDomElementD.init(250, 200, 320, 240)

  // let myBorderElem = new DomBorderScaler(parentHtmlElement)
  // myBorderElem.init(200, 100, 320, 50)
  console.log("init")

}