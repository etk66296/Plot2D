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
      displayType: 'performance2D'
    })
    
    
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


}