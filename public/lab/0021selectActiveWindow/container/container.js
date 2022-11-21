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

  hasTheMember(any) {

    this.members.forEach((member) => {

      if(member.id == any.id) {

        return true

      }

    })

    return false

  }

  admit() {
    
    for(let i = 0; i < arguments.length; i++) {
      
      this.members.push(arguments[i])

    }

  }
  
}