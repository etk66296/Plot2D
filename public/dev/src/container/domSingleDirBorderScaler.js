class DomSingleDirBorderScaler extends DomBorderScaler {
  
  constructor(parentElement, edgeSide) {

    super(parentElement)

    if( edgeSide !== 'N',
        edgeSide !== 'E',
        edgeSide !== 'S',
        edgeSide !== 'W') {
      console.error(
        String(edgeSide) +
          " is not a valid edge side character (allowed: N, E, S, W)")
    }

    this.edgeSide = edgeSide

  }

  
}