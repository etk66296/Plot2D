class Container extends Plot2DAny {
  
  constructor() {

    super()

    this.members = []

  }

  admit() {
    
    for(let i = 0; i < arguments.length; i++) {
      
      this.members.push(arguments[i])

    }

  }
  
}