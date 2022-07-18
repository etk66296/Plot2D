let init = (parentHtmlElement) => {

  let domObjectTracker = new DomObjectTracker()
  let domBuilder = new DomBuilder(domObjectTracker)
  let myFirstWindow = domBuilder
    .produceWindowOn(parentHtmlElement)
    .and()
    .assembleItWith({
      pos: { x: 10, y: 200 },
      dim: { w: 100, h: 100 },
      headerBar: false
    })


  let mySecondWindow = domBuilder
    .produceWindowOn(parentHtmlElement)
    .and()
    .assembleItWith({
      pos: { x: 900, y: 200 },
      dim: { w: 800, h: 600 },
      headerBar: true
    })

  
    
  let testDiv =
    document.createElementNS("http://www.w3.org/1999/xhtml", 'div')

  testDiv.style.color = '#FFFFFF'
  testDiv.style.backgroundColor = '#4400FF'
  testDiv.innerText = `TEST TEST TEST TEST TEST TEST TEST TEST TEST 
  TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST 
  TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST
  TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST`

  myFirstWindow.appendChild(testDiv)


}