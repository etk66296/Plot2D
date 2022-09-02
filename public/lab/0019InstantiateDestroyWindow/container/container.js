class Container extends Plot2DAny {
  
  constructor() {

    super()

    this.members = []

  }

  init() {

    super.init()

  }

  destroy() {

    super.destroy()

  }


  admit() {
    
    for(let i = 0; i < arguments.length; i++) {
      
      this.members.push(arguments[i])

    }

  }
  
}