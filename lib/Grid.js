class Grid {
  constructor(gridElement, attributes = {}) {
    this.element      = gridElement
    this.tileElements = [...this.element.querySelectorAll("td")]

    this.tiles = attributes.tiles
  }

  getTileAt(position) {
    const row = this.element.children[position.y]
    if(row == null) return

    return row.children[position.x]
  }

  getAdjacentTilesOf(tile) {
    const adjacentPositions = this.getAdjacentPositionsOf(tile)
    return adjacentPositions.map((position) => {
      return this.getTileAt(position)
    }).filter(tile => tile != null)
  }

  getPositionOf(tile) {
    const row = tile.element.parentElement
    return { x: tile.element.cellIndex, y: row.rowIndex }
  }

  getAdjacentPositionsOf(tile) {
    const position = this.getPositionOf(tile)
    return [
      { x: position.x - 1, y: position.y - 1 },
      { x: position.x    , y: position.y - 1 },
      { x: position.x + 1, y: position.y - 1 },
      { x: position.x - 1, y: position.y     },
      { x: position.x + 1, y: position.y     },
      { x: position.x - 1, y: position.y + 1 },
      { x: position.x    , y: position.y + 1 },
      { x: position.x + 1, y: position.y + 1 },
    ]
  }
}

export default Grid
