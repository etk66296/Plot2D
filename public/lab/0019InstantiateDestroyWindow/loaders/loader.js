class Loader extends Plot2DAny {
  
  constructor() {

    super()

    this.loaded = {}

    this.filesToLoad = 0
    this.filesLoaded = 0

    this.onReadyToUse = null

  }

  init() {
    this.onReadyToUse = () => {

      console.log(`${this.filesLoaded} of ${this.filesLoaded}`)
      
    }
  }

}