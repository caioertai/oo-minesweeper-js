class Tile {
  constructor(tileElement, options = {}) {
    tileElement.component = this
    this.grid = options.grid
    this.element = tileElement
    this.has_mine = Math.random() < 0.15

    this.element.addEventListener("click", event => this.handleLeftClick(event))
    this.element.addEventListener("contextmenu", event => this.handleRightClick(event))
  }

  adjacentMinesCount() {
    return this
      .grid.getAdjacentTilesOf(this)
      .filter(tile => tile.component.has_mine)
      .length
  }

  handleLeftClick(event) {
    this.has_mine ? this.triggerMine() : this.openTile()
  }

  handleRightClick(event) {
    event.preventDefault()
    this.addFlag()
  }

  addFlag() {
    this.element.classList.toggle("flagged")
  }

  openTile() {
    this.element.classList.add(`mine-neighbour-${this.adjacentMinesCount()}`)
  }

  triggerMine() {
    alert("You lost!")
    this.element.classList.add("mine")
  }
}

export default Tile