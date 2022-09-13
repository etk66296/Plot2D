class ImageLoader extends Loader {
  
  constructor() {

    super()
    
  }

  loadListFromRemote(uriList) {

    this.filesToLoad = uriList.length

    
    uriList.forEach(uri => {
      
      this.loaded[uri.identifier] = new Image()
      this.loaded[uri.identifier].src = uri.url
      this.loaded[uri.identifier].onload = (event) => {
        
        this.filesLoaded += 1

        if(this.filesLoaded === this.filesToLoad) {

          this.onReadyToUse()

        }

      }
      
    })

  }
  
}