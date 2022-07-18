class Display2D extends PerformanceDisplay {
  
  constructor(parentElement) {

    super(parentElement)

    this.context = null

  }

  init() {

    super.init()

    // console.log(this.containerElement)
    this.containerElement.width = this.containerElement.clientWidth
    this.containerElement.height = this.containerElement.clientHeight

    console.log(this.containerElement.width, this.containerElement.height)

    this.context = this.containerElement.getContext('2d');
    
  }

  appendChild(element) {

    this.context.fillStyle = "white";
    this.context.fillRect(0, 0, this.containerElement.width, this.containerElement.height);
    // this.containerElement.appendChild(element)
    // Die Lininestärke festlegen
    this.context.lineWidth = 10;

    // Wand
    this.context.strokeRect(75, 140, 150, 110);

    // Tür
    this.context.fillRect(130, 190, 40, 60);

    // Dach
    this.context.moveTo(50, 140);
    this.context.lineTo(150, 60);
    this.context.lineTo(250, 140);
    this.context.closePath();
    this.context.stroke();


  }
  
}