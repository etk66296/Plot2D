class RenderSurface extends Any{

  constructor(parentHtmlElementId, id) {

    super()

    this.parentHtmlElementId = parentHtmlElementId
    this.parentHtmlElement = document.getElementById(this.parentHtmlElementId)
    this.id = id
    this.width = '800px'
    this.height = '600px'
    this.renderingContextType = '2d'
    this.hasAnAlphaChannel = false
    this.isDesynchronized = false
    this.renderingCanvas = undefined
    this.renderingContext = undefined

  }

  init() {
    
    this.renderingCanvas = this.createElementNS("canvas")
    this.renderingCanvas.style.backgroundColor = '#000022'
    this.renderingCanvas.setAttribute('width', this.width)
    this.renderingCanvas.setAttribute('height', this.height)
    this.renderingCanvas.setAttribute('id', this.id)

    if (this.renderingCanvas.getContext) {

      this.renderingContext = this.renderingCanvas.getContext(
        this.renderingContextType, {
        antialias: this.hasAnAlphaChannel,
        depth: this.isDesynchronized
      })

      this.parentHtmlElement.appendChild(this.renderingCanvas)

    } else {

      this.parentHtmlElement.style.backgroundColor = '#000000'
      this.parentHtmlElement.style.color = '#FF00FF'
      this.parentHtmlElement.style.padding = '10px'
      this.parentHtmlElement.innerHTML = `<h3>
        your browser does not support canvas rendering
      </h3>`
      
    }
    

  }

  fullscreen() {

    this.renderingCanvas.style.width = '100%'
    
    if (this.parentHtmlElement.requestFullscreen) {

      this.parentHtmlElement.requestFullscreen()

    } else if (this.parentHtmlElement.webkitRequestFullscreen) { /* Safari */

    this.parentHtmlElement.webkitRequestFullscreen()

    } else if (this.parentHtmlElement.msRequestFullscreen) { /* IE11 */

    this.parentHtmlElement.msRequestFullscreen()

    }
  }
  
}

class Tracker extends Any {
  constructor() {
    super()
    this.idCounter = 0
    this.trackedObjects = []
  }

  registerObject(obj) {
    this.obj.trackerId = this.idCounter
    this.trackedObjects.push(obj)
  }
  
}

class DataSymbol extends Any {
  constructor(parentHtmlElementId, id, data) {
    super()
    this.parentHtmlElementId = parentHtmlElementId
    this.parentHtmlElement = document.getElementById(this.parentHtmlElementId)
    this.id = id
    this.data = data

  }

  createSprite(imageSheet, cfg) {
    new Sprite(imageSheet, cfg)
  }
}

class JsonSymbol extends DataSymbol {
  constructor(parentHtmlElementId, id, data) {
    super(parentHtmlElementId, id, data)
    this.symbol = this.createElementNS("div")
    this.symbol.style.backgroundColor = '#ffffff'
    this.symbol.style.position = 'relative'
    this.symbol.style.left = '10px'
    this.symbol.style.top = '10px'
    this.symbol.style.width = '32px'
    this.symbol.style.height = '32px'
    this.symbol.setAttribute('id', this.id)
    this.symbol.draggable = "true"
    this.parentHtmlElement.appendChild(this.symbol)


    this.symbol.ondrop = (event) => {
      event.preventDefault()
      console.log(event.dataTransfer.getData("text"))
    }

    this.symbol.ondragstart = (event) => {
      event.dataTransfer.setData("text/plain", 'Hey this is JsonSymbol')
    }

    this.symbol.ondragover = (event) => {
      event.preventDefault()
    }
    
  }
}

class ImageSymbol extends DataSymbol {
  constructor(parentHtmlElementId, id, data) {
    super(parentHtmlElementId, id, data)

    this.symbol = this.createElementNS("img")
    this.data = data
    this.symbol.src = data
    this.symbol.setAttribute('id', this.id)
    this.symbol.draggable = "true"
    this.parentHtmlElement.appendChild(this.symbol)
    
    this.symbol.ondrop = (event) => {
      event.preventDefault()
      console.log(event.dataTransfer.getData("text"))
    }

    this.symbol.ondragstart = (event) => {
      event.dataTransfer.setData("text/plain", 'Hey this is ImageSymbol')
    }


    this.symbol.ondragover = (event) => {
      event.preventDefault()
    }

  }
}

class Sprite {

  constructor(sheet, cfg) {
    this.canvas = document.getElementById('myRenderCanvas')
    this.context = this.canvas.getContext('2d')
    this.imageSheet = sheet
    this.cfg = cfg
  }

}