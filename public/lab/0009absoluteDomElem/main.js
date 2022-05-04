class AbsoluteDomElem extends LabUtils{

  constructor(parentHtmlElement, id) {

    super()

    this.parentHtmlElement = parentHtmlElement
    this.posX = 0
    this.posY = 0
    this.width = 100
    this.height = 100

    this.mainElem = this.createElementNS('div')

    this.headerBar = this.createElementNS('div')
    this.headerBarPosX = 0
    this.headerBarPosY = 0
    this.headerBarWidth = this.width
    this.headerBarHeight = this.height * 0.15
    this.headerBarColor = '#00AAAA'

    this.headerBarMouseIsDown = false
    this.clickPositionOffset = { x: 0, y: 0 }
    this.mousePosition = { x: 0, y: 0 }

    
  }

  init() {
    
    this.mainElem.style.position = 'absolute'
    this.mainElem.style.width = String(this.width) + 'px'
    this.mainElem.style.height = String(this.height) + 'px'
    this.mainElem.style.backgroundColor = '#999999'
    this.mainElem.style.top = '100px'
    this.mainElem.style.border = "1px solid #000000"
    this.parentHtmlElement.appendChild(this.mainElem)

    this.headerBar.style.width = String(this.headerBarWidth) + 'px'
    this.headerBar.style.height = String(this.headerBarHeight) + 'px'
    this.headerBar.style.backgroundColor = this.headerBarColor
    this.mainElem.appendChild(this.headerBar)

    this.headerBar.addEventListener('mousedown', (e) => {
      this.headerBarMouseIsDown = true;
      this.clickPositionOffset.x = this.headerBar.offsetLeft - e.clientX
      this.clickPositionOffset.y = this.headerBar.offsetTop - e.clientY
      console.log(this.clickPositionOffset.x, this.clickPositionOffset.y)
    }, true)
  
    document.addEventListener('mouseup', () => {
      this.headerBarMouseIsDown = false;
    }, true);
  
    document.addEventListener('mousemove', (event) => {
      event.preventDefault()
      if (this.headerBarMouseIsDown) {
        this.mousePosition.x = event.clientX
        this.mousePosition.y = event.clientY
        this.mainElem.style.left = (this.mousePosition.x + this.clickPositionOffset.x) + 'px';
        this.mainElem.style.top  = (this.mousePosition.y + this.clickPositionOffset.y) + 'px';
      }
    }, true)

  }
  
}