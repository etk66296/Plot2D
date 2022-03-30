class ObjectTracker extends Plot2DAny {
  
  constructor() {

    super()

    this.any = []
    this.idCount = 0

  }

  add(any) {

    any.id = this.idCount
    this.any.push(any)

    this.idCount += 1

  }
  
}