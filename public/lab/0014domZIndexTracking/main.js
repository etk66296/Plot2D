let init = (parentHtmlElement) => {

  let domObjectTracker = new DomObjectTracker()
  let domBuilder = new DomBuilder(domObjectTracker)
  let myFirstWindow = domBuilder.createWindow(parentHtmlElement)

  let mySecondWindow = domBuilder.createWindow(parentHtmlElement)

  let manyWindows = []
  for(let i = 0; i < 40; i++) {
    for(let j = 0; j < 17; j++) {

      let cfg = {x: j * 110,y: i * 110, w: 80, h: 80 }
      manyWindows.push(domBuilder.createWindow(parentHtmlElement, cfg))

    }
  }

  // let myDomElementA = new DomWindow(parentHtmlElement)
  // myDomElementA.init(100, 100, 320, 240)
  // myDomElementA.initStretchers()
  // myDomElementA.initContentContainer()
  // myDomElementA.initHeaderBar()

  // let myDomElementB = new DomWindow(parentHtmlElement)
  // myDomElementB.init(500, 100, 320, 240)
  // myDomElementB.initStretchers()
  // myDomElementB.initContentContainer()
  // myDomElementB.initHeaderBar()
  

  // let myLabUtils = new LabUtils()
  // let aTestImageA = myLabUtils.createElementNS("img")
  // aTestImageA.src = "assets/square.png"
  // // aTestImage.style.position = 'absolute'
  // // aTestImage.style.top = "30px"

  // let myDummyTextA = myLabUtils.createElementNS("p")
  // myDummyTextA.style.color = 'rgb(255, 255, 255)'
  // myDummyTextA.innerText = 
  // `Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed dia nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.    Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.    Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer`
  

  // let aTestImageB = myLabUtils.createElementNS("img")
  // aTestImageB.src = "assets/square.png"
  // // aTestImage.style.position = 'absolute'
  // // aTestImage.style.top = "30px"

  // let myDummyTextB = myLabUtils.createElementNS("p")
  // myDummyTextB.style.color = 'rgb(255, 255, 255)'
  // myDummyTextB.innerHTML = `Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed dia nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.    Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.    Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer`

  // myDomElementA.appendChild(aTestImageA)
  // myDomElementA.appendChild(myDummyTextA)

  // myDomElementB.appendChild(aTestImageB)
  // myDomElementB.appendChild(myDummyTextB)


}