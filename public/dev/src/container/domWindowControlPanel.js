class DomWindowControlPanel extends DomAbsolute {
  
  constructor(parentElement = null, clientWindow = null) {

    super(parentElement)

    this.clientWindow = clientWindow

    this.defaultHeight = 0
    this.defaultWidth = 0
    this.backgroundColor = '#5c307a'
    this.borderColor = '#c08ee3'
    this.color = '#c5b5d0'
    this.colorOnMouseOver = '#f1e7f9'

    this.ctrlWidth = 0
    this.ctrlHeight = 0
    this.ctrlMarginTop = 0
    this.ctrlMarginLeft = 0
    this.ctrlBorderRadius = 0

    this.lastX = this.clientWindow.x
    this.lastY = this.clientWindow.y

    this.lastW = this.clientWindow.w
    this.lastH = this.clientWindow.h

    this.stdCtrl = {
      fullscreen: null,
      destroy: null,
      minimize: null
    }

    this.callbackOnFullscreen = () => {

      this.lastX = this.clientWindow.x
      this.lastY = this.clientWindow.y
      this.lastW = this.clientWindow.w
      this.lastH = this.clientWindow.h

      this.clientWindow.setX(9)
      this.clientWindow.setY(9)
      this.clientWindow.setW(window.innerWidth - 18)
      this.clientWindow.setH(window.innerHeight - 18)
      this.clientWindow.callbackOnMouseUp()
      if(this.clientWindow.headerBar.isInitialized) {

        this.clientWindow.headerBar.setW(this.parentElement.clientWidth)

      }
      this.clientWindow.display.alignToParentSize(this.clientWindow.headerBar.defaultHeight)

    }

    this.callbackOnMinimize = () => {

      this.clientWindow.setX(this.lastX)
      this.clientWindow.setY(this.lastY)
      this.clientWindow.setW(this.lastW)
      this.clientWindow.setH(this.lastH)
  
      this.clientWindow.callbackOnMouseUp()
    //   if (this.clientWindow.headerBar.containerElement != null) {

        this.clientWindow.headerBar.setW(this.parentElement.clientWidth)

    //   }
    //   this.clientWindow.display.alignToParentSize(this.clientWindow.headerBar.defaultHeight)
    }

    // this.callbackOnDestroy = () => {

    //   this.clientWindow.destroy()
      
    // }
    
    
  }
  
  init() {
    
    // super.init()

    // this.defaultHeight = 26
    // this.defaultWidth = 85
    // this.ctrlMarginLeft = 3
    // this.ctrlMarginTop = 3
    // this.ctrlHeight = this.defaultHeight - 4
    // this.ctrlWidth = this.ctrlHeight
    // this.ctrlBorderRadius = 5
    
    // // this.containerElement.style.backgroundColor = '#00ff00'
    // this.containerElement.style.color = this.color
    // this.containerElement.style.right = '0px'
    // this.setW(this.defaultWidth)
    // this.setH(this.defaultHeight)

    // this.stdCtrl.minimize = this.createHtmlElement('div')
    // this.stdCtrl.minimize.style.display = 'inline-block'
    // this.stdCtrl.minimize.style.backgroundColor = this.backgroundColor
    // this.stdCtrl.minimize.style.width = String(this.ctrlWidth) + 'px'
    // this.stdCtrl.minimize.style.height = String(this.ctrlHeight) + 'px'
    // this.stdCtrl.minimize.style.border = 'solid 1px ' + this.borderColor
    // this.stdCtrl.minimize.style.marginLeft = String(this.ctrlMarginLeft) + 'px'
    // this.stdCtrl.minimize.style.marginTop = String(this.ctrlMarginTop) + 'px'
    // this.stdCtrl.minimize.style.textAlign = 'center'
    // this.stdCtrl.minimize.style.lineHeight = String(this.ctrlHeight) + 'px'
    // this.stdCtrl.minimize.style.borderRadius = String(this.ctrlBorderRadius) + 'px'
    // this.stdCtrl.minimize.style.userSelect = 'none'
    // this.stdCtrl.minimize.innerText = '_'
    // this.stdCtrl.minimize.onmouseover = () => {

    //   this.stdCtrl.minimize.style.color = this.colorOnMouseOver
      
    // }
    // this.stdCtrl.minimize.onmouseout = () => {

    //   this.stdCtrl.minimize.style.color = this.color

    // }
    // this.stdCtrl.minimize.onclick = this.callbackOnMinimize
    // this.containerElement.appendChild(this.stdCtrl.minimize)
    

    // this.stdCtrl.fullscreen = this.createHtmlElement('div')
    // this.stdCtrl.fullscreen.style.display = 'inline-block'
    // this.stdCtrl.fullscreen.style.backgroundColor = this.backgroundColor
    // this.stdCtrl.fullscreen.style.width = String(this.ctrlWidth) + 'px'
    // this.stdCtrl.fullscreen.style.height = String(this.ctrlHeight) + 'px'
    // this.stdCtrl.fullscreen.style.border = 'solid 1px ' + this.borderColor
    // this.stdCtrl.fullscreen.style.marginLeft = String(this.ctrlMarginLeft) + 'px'
    // this.stdCtrl.fullscreen.style.marginTop = String(this.ctrlMarginTop) + 'px'
    // this.stdCtrl.fullscreen.style.textAlign = 'center'
    // this.stdCtrl.fullscreen.style.lineHeight = String(this.ctrlHeight) + 'px'
    // this.stdCtrl.fullscreen.style.borderRadius = String(this.ctrlBorderRadius) + 'px'
    // this.stdCtrl.fullscreen.style.userSelect = 'none'
    // this.stdCtrl.fullscreen.innerText = '⌂'
    // this.stdCtrl.fullscreen.onmouseover = () => {

    //   this.stdCtrl.fullscreen.style.color = this.colorOnMouseOver

    // }
    // this.stdCtrl.fullscreen.onmouseout = () => {

    //   this.stdCtrl.fullscreen.style.color = this.color

    // }
    // this.stdCtrl.fullscreen.onclick = this.callbackOnFullscreen
    // this.containerElement.appendChild(this.stdCtrl.fullscreen)


    // this.stdCtrl.destroy = this.createHtmlElement('div')
    // this.stdCtrl.destroy.style.display = 'inline-block'
    // this.stdCtrl.destroy.style.backgroundColor = this.backgroundColor
    // this.stdCtrl.destroy.style.width = String(this.ctrlWidth) + 'px'
    // this.stdCtrl.destroy.style.height = String(this.ctrlHeight) + 'px'
    // this.stdCtrl.destroy.style.border = 'solid 1px ' + this.borderColor
    // this.stdCtrl.destroy.style.marginLeft = String(this.ctrlMarginLeft) + 'px'
    // this.stdCtrl.destroy.style.marginTop = String(this.ctrlMarginTop) + 'px'
    // this.stdCtrl.destroy.style.textAlign = 'center'
    // this.stdCtrl.destroy.style.lineHeight = String(this.ctrlHeight) + 'px'
    // this.stdCtrl.destroy.style.borderRadius = String(this.ctrlBorderRadius) + 'px'
    // this.stdCtrl.destroy.style.userSelect = 'none'
    // this.stdCtrl.destroy.innerText = 'X'
    // this.stdCtrl.destroy.onmouseover = () => {

    //   this.stdCtrl.destroy.style.color = this.colorOnMouseOver
      
    // }
    // this.stdCtrl.destroy.onmouseout = () => {

    //   this.stdCtrl.destroy.style.color = this.color

    // }
    // this.stdCtrl.destroy.onclick = this.callbackOnDestroy
    // this.containerElement.appendChild(this.stdCtrl.destroy)
    
  }

  destroy() {

    // if(this.isInitialized) {

    //   this.containerElement.removeChild(this.stdCtrl.fullscreen)
    //   this.containerElement.removeChild(this.stdCtrl.minimize)
    //   this.containerElement.removeChild(this.stdCtrl.destroy)
   
    // }

    // super.destroy()

  }

}