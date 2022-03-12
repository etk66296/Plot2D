class RenderSurface extends LabUtils{

  constructor(parentHtmlElementId, id) {

    super()

    this.parentHtmlElementId = parentHtmlElementId
    this.parentHtmlElement = document.getElementById(this.parentHtmlElementId)
    this.id = id
    this.width = '800'
    this.height = '600'
    this.renderingContextType = '2d'
    this.hasAnAlphaChannel = false
    this.isDesynchronized = false
    this.renderingCanvas = undefined
    this.renderingContext = undefined

  }

  init() {
    
    this.renderingCanvas = this.createElementNS("canvas")
    this.renderingCanvas.style.backgroundColor = '#000000'
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

  // fullscreen() {
    
  //   if (this.renderingCanvas.requestFullscreen) {

  //     this.renderingCanvas.requestFullscreen()

  //   } else if (this.renderingCanvas.webkitRequestFullscreen) { /* Safari */

  //     this.renderingCanvas.webkitRequestFullscreen()

  //   } else if (this.renderingCanvas.msRequestFullscreen) { /* IE11 */

  //     this.renderingCanvas.msRequestFullscreen()

  //   }
  // }
  
}