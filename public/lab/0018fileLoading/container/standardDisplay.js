class StandardDisplay extends Display {
  
  constructor(parentElement) {

    super(parentElement)


  }

  init() {

    super.init()

    this.containerElement.style.overflow = 'scroll'

  }

  appendChild(element) {

    if(element.constructor.name === 'DomStage') {

      element.members.forEach((stageMember) => {

        this.containerElement.appendChild(stageMember.asDomElement())

      })

    } else {
      
      this.containerElement.appendChild(element)

    }

    
  }
  
}