class PlotOptions extends Plot2DAny {
  
  constructor(parentPlot) {

    super()

    this.displayElement = null

    this.parentPlot = parentPlot

    this.x = 0
    this.y = 0

    this.radius = 8

    this.callbackOnMouseDown = () => {

    }

    this.callbackOnMouseUp = () => {

    }

    this.callbackOnMouseMove = () => {
      
    }
    
  }

  init() {

    super.init()

    this.displayElement = this.createHtmlElement('div')

    document.body.appendChild(this.displayElement)
      
    this.displayElement.style.position = 'absolute'
    this.displayElement.style.overflow = 'hidden'
    this.displayElement.style.userSelect =  'none'
    this.displayElement.style.height =  String(2 * this.radius) + 'px'
    this.displayElement.style.width =  String(2 * this.radius) + 'px'
    this.displayElement.style.backgroundColor = 'rgb(0, 255, 0)'
    this.displayElement.style.borderRadius =  '50%'
    this.displayElement.style.textAlign = 'center'
    this.displayElement.style.verticalAlign = 'middle'
    this.displayElement.style.lineHeight = String(2 * this.radius) + 'px'
    this.displayElement.style.fontWeight = 'bold'
    this.displayElement.innerText = '+'

  }

  setX(x) {

    this.x = x
    this.displayElement.style.left = String(x) + 'px'

  }

  setY(y) {

    this.y = y
    this.displayElement.style.top = String(y) + 'px'

  }

  setPos() {

    let pd = this.parentPlot.displayElement.getBoundingClientRect()

    this.setX(pd.x + pd.width - 2 * this.radius - 2)
    this.setY(pd.y + 2)

  }



}