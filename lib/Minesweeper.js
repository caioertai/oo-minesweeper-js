import Grid from "./Grid.js"
import Tile from "./Tile.js"

class Minesweeper {
  constructor(gridElement) {
    this.initGame(gridElement)
  }
  
  initGame(gridElement) {
    this.tileElements = [...gridElement.querySelectorAll("td")]
    this.grid = new Grid(gridElement)
    this.grid.tiles = this.getAndInitTiles()
  }

  getAndInitTiles() {    
    return this.tileElements.map(tileElement => new Tile(tileElement, { grid: this.grid }))
  }
}

export default Minesweeper
